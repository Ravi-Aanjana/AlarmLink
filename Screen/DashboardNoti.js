import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import {
    View, Text, StyleSheet, Image, TouchableOpacity, FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const DashboardNoti = ({ navigation }) => {

    const [mydata, setMydata] = useState([]);


    const fetchData = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const myData = await resp.json();

            setMydata(myData);
            // console.warn(myData[0].name)
            // return myData;
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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{}}>
                        <Icon name='bars' size={30} color="#fff" />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: '#fff' }}>Home</Text>
                <TouchableOpacity>
                    <Text style={styles.texttitle}>Edit</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.hlls}>
                <Image source={require('../asset/HLLS.png')}
                    style={styles.hllsimg} />
            </View>

            <View style={{ borderWidth: 1, top: 50, borderColor: '#DCDCDF' }}>
                <TouchableOpacity>
                    <View style={styles.panicAlarm}>
                        <Image source={require('../asset/noti.png')}
                            style={styles.panicimg} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('DashboardNoti1')}>
                    <View style={styles.panicAlarm}>
                        <Image source={require('../asset/noti2.png')}
                            style={styles.panicimg} />
                    </View>
                </TouchableOpacity>

            </View>
            <View style={{ flex: 1, top: '5%' }}>
                <Text style={styles.history}>History</Text>


                <FlatList data={mydata}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View style={{ borderWidth: 0.5, height: 62 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('HistoryDetails')}>
                                        <Text style={styles.nametext}>Arm Request by {item.name}</Text>
                                        <Text style={styles.timetext}>2/10/2015 11:35:46 AM</Text>
                                        <View style={{ position: 'absolute' }}>

                                            <Image source={require('../asset/greaterthen.png')}
                                                style={styles.greaterthen} />

                                        </View>
                                    </TouchableOpacity>

                                </View>

                            </View>

                        )
                    }

                    } />
                      <View style={{ position: 'absolute', left: 300, top: 180 }}>
                        <TouchableOpacity>
                            <Image source={require('../asset/alert.png')}
                                style={styles.allsame} />
                        </TouchableOpacity>
                    </View>
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

    },
    hlls: {
        top: 33,
        justifyContent: 'center',
        alignItems: 'center'
    },

    hllsimg: {
        width: 150,
        height: 60,

    },
    panicAlarm: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    panicimg: {
        width: 327,
        height: 80,

    },
    history: {
        fontSize: 20,
        color: "#3399FF",
        margin: 20,
        top: 5
    },
    greaterthen: {
        width: 12,
        height: 21,
        top: 20,
        left: 355
    },
    nametext: {
        fontSize: 15,
        height: 24,
        left: 24,
        top: 10,
        color: '#505050'
    },
    timetext: {
        top: 11,
        left: 24,
        fontSize: 13
    },
    allsame: {
        height: 70,
        width: 70,
        margin: 10,
    },

}
)
export default DashboardNoti;