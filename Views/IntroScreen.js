import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import logo from '../assets/171352_calculator_icon.png';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.inner}>
            <Image source={logo} style={styles.innerimg} />
        </View>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#FF5757',
        alignItems: 'center',
        justifyContent: 'center'
    },

    inner: {
        width: 100,
        height: 100,
        backgroundColor: 'inherit',
    },

    innerimg: {
        width: 100,
        height: 100,
    }
})