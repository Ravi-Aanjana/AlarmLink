import React,{useState,useEffect} from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity,FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Navbar = () =>{
    return(
        <View style={{ flex: 1 }}>
        <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Text style={styles.texttitle}>Back</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: '#fff' }}>New Message</Text>
                <TouchableOpacity>
                    <Text style={styles.texttitle}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#565B5F',
    },
    texttitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '400'
    }})
export default Navbar;