import React, { useState, useEffect } from "react";
import {
    View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity
} from 'react-native';
import { Swipeable } from "react-native-gesture-handler";
import { createAnimatedPropAdapter, log } from "react-native-reanimated";
import { colorProps } from "react-native-reanimated/src/reanimated2/UpdateProps";

import Swiper from "react-native-swiper";
import Icon from 'react-native-vector-icons/FontAwesome5';
const ArmDisarm = ({ navigation }) => {

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
            <View style={{ width: '100%', height: 64, backgroundColor: '#52A7DD', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={styles.manubar}>
                        <Icon name='bars' size={25} color='#fff'
                            onPress={() => navigation.openDrawer()} />
                    </View>
                </TouchableOpacity>

                <View>

                    <Text style={styles.texttitle}>Arm/Disarm</Text>
                </View>

            </View>


            {/* Slide to Arm */}
            <View style={{ width: '100%', height: 172, backgroundColor: '#363C40' }}>
                <View style={{ width: '100%', height: 44, backgroundColor: '#2D3336' }}>
                    <Text style={styles.textcontent}>Your security system is currently Disarmed</Text>
                </View>



                {/* <View style={styles.SlidetoArm}>
                    <Text style={styles.SlidetoArmtext}>Slide to Arm</Text>
                   
                    <View style={styles.whitecircle}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate("RemoteKeypad")}>
                        <Image source={require('../asset/Armlock.png')}
                            style={styles.Armlock}/>
                        </TouchableOpacity>
                      
                    </View> 
             </View> */}
                <View style={styles.SlidetoArm}>
                    <Swipeable
                        renderLeftActions={LeftSwipeActions}
                        onSwipeableLeftOpen={() => {
                            navigation.navigate("RemoteKeypad")
                        }}>

                        <View
                            style={{
                                width: 92, height: 92, backgroundColor: '#fff', borderRadius: 50
                            }}
                        >
                            <Image source={require('../asset/Armlock.png')}
                                style={styles.Armlock} />
                        </View>
                    </Swipeable>
                </View>

            </View>


            {/* History of Arm/Disarm */}
            <TouchableOpacity onPress={()=>navigation.navigate("History")}>
                <View style={{ width: '100%', height: 46 }}>
                    <Text style={styles.historytext}>History</Text>
                </View>

            </TouchableOpacity>



            <FlatList data={mydata}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={{ borderWidth: 0.5, height: 62 }}>
                                <Text style={styles.nametext}>Arm Request by {item.name}</Text>
                                <Text style={styles.timetext}>2/10/2015 11:35:46 AM</Text>
                                <View style={{ position: 'absolute' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../asset/greaterthen.png')}
                                            style={styles.greaterthen} />
                                    </TouchableOpacity>

                                </View>

                            </View>

                        </View>

                    )
                }

                } />





        </View>
    )
}

// function onSwipeableLeftOpen (){
//     alert('Swipe from left')
//    navigation.navigate("Dashboard")
// }
const LeftSwipeActions = () => {

    return (


        <View
            style={{ width: 250, justifyContent: 'center', left: 14 }}>
            <Text
                style={{
                    color: '#fff',
                    fontSize: 25
                }}

            >
                Slide to Arm
            </Text>
        </View>







    );
};
const styles = StyleSheet.create({
    manubar: {

        top: 22,
        left: 24
    },
    texttitle: {
        left: 122,
        width: 131,
        height: 28,
        fontSize: 24,
        color: '#fff',
        top: 18,
        lineHeight: 28,
    },
    textcontent: {
        top: 12,
        left: 17,
        fontSize: 18, color: '#fff'
    },
    SlidetoArm: {
        width: 345,
        height: 98,
        borderWidth: 1,
        borderColor: "skyblue",
        top: 14,
        left: 15,

        backgroundColor: '#70CC4A',
        borderRadius: 210
    }, SlidetoArmtext: {
        width: 142,
        height: 26,
        top: 36,
        left: 54, fontSize: 25, lineHeight: 26,
        color: '#fff', position: 'absolute'
    },
    whitecircle: {
        width: 92,
        height: 92,
        borderRadius: 1,
        borderRadius: 50,
        backgroundColor: '#fff',
        left: 250,
        borderRadius: 45,
        top: 3
    },
    Armlock: {
        width: 24,
        height: 35,
        left: 34,
        top: 29
    },
    historytext: {
        width: 59,
        height: 26,
        fontSize: 18,
        color: '#3399FF',
        left: 24,
        top: 10
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
    greaterthen: {
        width: 12,
        height: 21,
        top: 20,
        left: 339
    }
})
export default ArmDisarm;



