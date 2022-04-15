import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    View, Text, StyleSheet, FlatList, Image, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Edit = ({ navigation }) => {

    const [iconName, setIconName] = useState('')
    const [data, setData] = useState([])
    const getData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setData(data);
    }
    useEffect(() => {
        getData()
    })


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.nav}>
                <Text style={styles.textedit}
                    onPress={() => navigation.goBack()}>Back</Text>
                <Text style={styles.textedit}>Edit Dashboard</Text>
            </View>



            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <View style={{ flex: 1 ,backgroundColor:'#fff'}}>
                        <View style={styles.itemsView}>
                            <Text style={styles.itemtext}>{item.name}</Text>
                            <View style={styles.icon}>
                                <TouchableOpacity onPress={() => {
                                    // console.warn(item.id)
                                    setIconName(item.id);

                                }}>

                                    <Icon name={iconName === item.id ? 'car' : 'bars'} size={20} background="#fff" />

                                </TouchableOpacity>

                            </View>
                            <TouchableOpacity>
                            <View style={styles.bars}>
                                <Icon name='bars' size={20} color="#c4c4c4"/>
                            </View>
                            </TouchableOpacity>
                            
                        </View>


                    </View>
                }

            />



        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        backgroundColor: '#52A7DD',
        height: 50,
    },
    textedit: {
        fontSize: 25,
        color: 'white',
        margin: 10,
        marginLeft: 18,


    },
    righticon: {
        height: 35,
        width: 30,
        position: 'absolute',
        marginTop: 10,
        padding: 10,
        marginLeft: 250,
    },
    togglebar: {
        height: 30,
        width: 30,
        position: 'absolute',
        marginTop: 15,
        padding: 10,
        marginLeft: 350,

    },
    itemsView: {
        height: 64,
        borderWidth: 0.5,
        borderColor: '#c4c4c4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemtext: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Roboto',
        color: '#555555',
        left: 24
    },
    icon: {
        
        width: 30, height: 30, backgroundColor: '#52A7DD', borderRadius: 16,
        alignItems: 'center', justifyContent: 'center',
        position:'absolute',left:300
    },
    bars:{
        right:20
    }
})
export default Edit;