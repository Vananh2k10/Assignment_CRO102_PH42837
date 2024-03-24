import { ActivityIndicator, Image, StyleSheet, View } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style = {styles.background}>
      <Image style={styles.img} source={require('../Image/logo.png')}/>

      <ActivityIndicator color={'black'}/>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%',
        gap: 30
    },
    img: {
        width: 160,
        height: 160,
        marginTop: 300,
    }
})