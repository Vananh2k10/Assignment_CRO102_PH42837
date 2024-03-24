import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DetailProduct = ({navigation,route}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity  onPress={()=>navigation.goBack()}>
                <Image style={{ width: 20, height: 20 }}
                    source={require('../Image/back.png')}/>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <TouchableOpacity style={{ width: 50 }}>
                <Image style={{ width: 26, height: 26 }}
                    source={require('../Image/cart.png')}/>
                </TouchableOpacity>
            </View>

            <Image source={{ uri : item.img}} style={{width: '100%', height: 300}}/>

            <View style={{gap: 10, paddingHorizontal: 30}}>
              <View style={{padding: 10, backgroundColor: 'green'}}>
                {item.type ? <Text>Ưa bóng</Text> : <Text>Ưa râm</Text>}
              </View>
            </View>
    </View>
  )
}

export default DetailProduct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16
},
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 20
},
})