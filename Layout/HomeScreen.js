import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export const URL = 'http://192.168.0.125:3000'

const HomeScreen = ({ navigation }) => {

    const [ListPlant, setListPlant] = useState([]);
    const [ListPlantFull, setListPlantFull] = useState([]);
    const [ListPlanta, setListPlanta] = useState([]);
    const [ListPlantaFull, setListPlantaFull] = useState([]);

    const getListPlant = async () => {
        await fetch(`${URL}/plants`)
            .then(res => res.json())
            .then(data => {
                setListPlantFull(data);
                const list = data;
                const list4 = list.filter((item, index) => index < 4);
                setListPlant(list4)
            })
            .catch(err => console.log(err))
    }

    const getListPlanta = async () => {
        await fetch(`${URL}/plantas`)
            .then(res => res.json())
            .then(data => {
                setListPlantaFull(data);
                const list = data;
                const list4 = list.filter((item, index) => index < 4);
                setListPlanta(list4);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getListPlant();
        getListPlanta();
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            
            <ScrollView>
                <View style={{ width: '100%', height: 320 }}>
                    <Image
                        style={{ width: '100%', height: '100%', justifyContent: 'center' }}
                        source={require('../Image/logo.png')}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate("PlantSceen", { data: ListPlantFull })}
                        style={styles.newSP}>
                        <Text style={{ fontSize: 14, color: 'green', fontWeight: 'bold', textDecorationLine: 'underline' }}>Xem hàng mới về </Text>
                        <Image source={require('../Image/next.png')} style={{ height: 30, width: 30 }} tintColor={"green"} />
                    </TouchableOpacity>

                </View>

                <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 30, marginLeft: 10 }}>Bánh Ngọt</Text>

                <FlatList
                    numColumns={2}
                    scrollEnabled={false}
                    data={ListPlant}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("DetailProduct", { item: item })}
                            style={styles.itemPlant}>
                            <Image source={{ uri: item.img }}
                                style={styles.itemImage} />
                            <Text style={styles.itemName}>{item.name}</Text>
                            {item.type ? <Text>Ưa bóng</Text> : <Text>Ưa râm</Text>}
                            <Text style={styles.price}>{item.price} đ</Text>
                        </TouchableOpacity >} >
                </FlatList>
                <TouchableOpacity onPress={() => navigation.navigate("PlantSceen", { data: ListPlantFull })}
                    style={styles.Xemthem}>
                    <Text style={{ fontSize: 14, color: 'green', fontWeight: 'bold', textDecorationLine: 'underline' }}>Xem thêm bánh khác </Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>Đồ uống</Text>

                <FlatList
                    numColumns={2}
                    extraData={4}
                    scrollEnabled={false}
                    data={ListPlanta}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate("DetailProduct", { item: item })}
                            style={styles.itemPlant}>
                            <Image source={{ uri: item.img }}
                                style={styles.itemImage} />
                            <Text>{item.name}</Text>
                            <Text style={styles.price}>{item.price} đ</Text>
                        </TouchableOpacity>} >
                </FlatList>

                <TouchableOpacity style={styles.Xemthem}>
                    <View />
                    <Text style={{ fontSize: 14, color: 'green', fontWeight: 'bold', textDecorationLine: 'underline' }}>Xem thêm nước khác </Text>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={styles.cart}>
                <Image source={require('../Image/cart.png')} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    container: {
        height: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 12
    },
    image: {
        width: 180,
        height: 150,
        borderRadius: 10
    },
    itemPlant: {
        backgroundColor: 'white',
        width: '45%',
        borderRadius: 12,
        padding: 12,
        margin: 10,
        gap: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowRadius: 5,
        shadowOpacity: 0.35,
        elevation: 10
    },
    itemImage: {
        width: '100%',
        height: 130,
        borderRadius: 12,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    Xemthem: {
        width: '100%',
        padding: 12,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    price: {
        fontSize: 17,
        fontWeight: '600',
        color: 'green'
    },
    cart: {
        width: 40, height: 40,
        borderRadius: 12, alignItems: 'center', justifyContent: 'center',
        position: 'absolute',
        right: 40, top: 60, shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowRadius: 5,
        shadowOpacity: 0.35,
        elevation: 10
    },
    newSP: {
        padding: 20, gap: 20, flexDirection: 'row',
        position: 'absolute', bottom: 0, alignItems: 'center'
    }

})