import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';


const SitePanelUsers = ({ navigation }) => {
   
   const[iconName,setIconName]=useState('')

    const [mydata, setMydata] = useState([]);


    const fetchData = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const myData = await resp.json();

            setMydata(myData);

        }
        catch (error) {
            console.warn(error);
        }
    }
    useEffect(() => {
        fetchData();

    }, []);


   
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <Text style={styles.text} onPress={() => navigation.goBack()}>Back</Text>
                <Text style={{ fontSize: 24, color: '#fff', marginLeft: '30%' }}>Users</Text>
            </View>

            <FlatList data={mydata}
                renderItem={({ item, index}) => {
                    return (

                        <View style={{ borderWidth: 0.5, height: 62, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Image source={require('../asset/usericon.png')} style={styles.user} />
                                <Text style={styles.nametext}>{item.name}</Text>
                            </View>



                            <View style={styles.icon}>
                                <TouchableOpacity onPress={()=>{
                                    // console.warn(item.id)
                                    setIconName(item.id);
                                    
                                }}>
                                 
                                   <Icon name={iconName=== item.id ? 'car' : 'bars' }  size={20} background="#fff"/>
                                   
                                    </TouchableOpacity>

                            </View>

                        </View>



                    )
                }

                } />
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 62,
        backgroundColor: '#52A7DD',
        flexDirection: 'row',
        alignItems: 'center',


    },
    text: {
        fontSize: 22, color: "#fff", left: 24
    },
    icon: {
        position: 'absolute', marginLeft: 350,
        width: 30, height: 30, borderWidth: 1, borderRadius: 16,
        justifyContent: 'center', alignItems: 'center'
    },
    nametext: {
        top: 10,
        fontSize: 15,
        height: 24,
        left: 30,
        color: '#505050'
    },
    user: {
        width: 40, height: 40, left: 24
    }

})

export default SitePanelUsers;