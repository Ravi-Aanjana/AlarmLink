import { template } from '@babel/core';
import React from 'react';
import {
    View, Text, StyleSheet, Image, ImageBackground, Pressable, TouchableOpacity
} from 'react-native';

const RemoteKeypad = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <Text style={styles.titletext}>Jones Gun Shop</Text>
            </View>


            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../asset/bg.png')} resizeMode="cover" style={styles.bg}>
                    <Text style={styles.codetext}>Enter User Code</Text>

                    <View style={{ borderWidth: 0.5, top: 10, borderColor: '#686868' }}>
                        <View style={styles.remotekeypad}>
                            <Text style={styles.keypadtext}>Remote Keypad</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 113 }}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>3</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 137 }}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>4</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>5</Text>
                            </TouchableOpacity>

                           <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>6</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 163,width:'100%' }}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>7</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>8</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>9</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 187 }}>
                            <TouchableOpacity style={styles.btn2}>
                                <ImageBackground source={require('../asset/cancelvector.png')} style={styles.cancelimg}>
                                    <Text style={styles.cancel}>X</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.number}>0</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn2}>
                                <Text style={styles.number2}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ImageBackground>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        height: 65,
        width: '100%',
        backgroundColor: '#52A7DD'
    },
    titletext: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        top: 19
    },
    codetext: {
        top: 8,
        textAlign: 'center',
        fontSize: 22,
        color: '#fff'
    },
    bg: {
        flex: 1
    },
    keypadtext: {

        fontSize: 20,
        color: '#000000',
        lineHeight: 25,
        fontFamily: 'Abyssinica SIL',
        textAlign: 'center',
    },
    remotekeypad: {
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#45B038',
        height: 74,
        width: 301,
        left: 37,
        justifyContent: 'center'
    },
    btn: {
        
        width: 88,
        height: 70,
        backgroundColor: '#fff',
        borderRadius:40,
        justifyContent: 'center',
        alignItems: 'center',
      
    },
    number: {
        fontSize: 50,
        color: '#282828',
        fontWeight: '500'
    },

    btn2: {
        width: 88,
        height: 70,
        fontFamily: 'Epilogue',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#282828',
        backgroundColor: '#9F9F9F',
    },
    number2: {
        fontSize: 46,
        color: '#282828',
        fontWeight: '700'
    },
    cancelimg: {
        width: 39,
        height: 28,
        justifyContent: 'center', alignItems: 'center'
    },
    cancel: {
        width: 15,
        height: 56,
        color: '#FFFFFF',
        fontSize: 26,
        lineHeight: 56,
        left: 5

    }
})
export default RemoteKeypad;