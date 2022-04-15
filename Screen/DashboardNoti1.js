import React, { useState, useEffect, useRef } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'react-native-svg';
// import BottomSheet from 'react-native-gesture-bottom-sheet';


import Icon from 'react-native-vector-icons/FontAwesome5'
const DashboardNoti1 = ({ navigation, props }) => {

    // const bottomSheet = useRef();

    const [modalVisible, setModalVisible] = useState(false);

    const [bottom, setBottom] = useState(true);
    const [mydata, setMydata] = useState([]);

    const [images, setImages] = useState([

        {
           src:require('../asset/eye-icon.png'),key:1,
           name:'Ignore',
        },
        {
            src: require('../asset/clock.png'),key:2,
            name:'Remind Me Later',
        },
        {
            src: require('../asset/Send-patrol.png'),key:3,
            name:'Send Parol',
        },
          
          {
            src: require('../asset/chain.png'),key:4,
            name:'Goto URL',
          },
          {
            src: require('../asset/call.png'),key:5,
            name:' Call Operator',
          },
          {
            src: require('../asset/Phone-Book.png'),key:6,
            name:'Call Other User',
          },
          {
            src: require('../asset/men-icon.png'),key:7,
            name:'Send To Other User',
          },
          {

            src: require('../asset/Custom.png'),key:8,
            name:'Custom Reply',
          },
          {
               
           src: require('../asset/clock-icon.png'),key:9,
            name:'Extend Schedule',
          }
        ])
   
        const getItem = (name) => {
 
            Alert.alert(name);
         
          }
    

    const bottomdrawer = () => {
        setBottom(bottom === true ? false : true)

    }


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

            {
                bottom === true ?
                    <>
                        <View style={styles.navbar}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={styles.texttitle}>Back</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 24, color: '#fff' }}>Notification</Text>
                            <TouchableOpacity>
                                <Text style={styles.texttitle}>Chat</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                    :
                    <>

                        <View style={styles.navbar}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={styles.texttitle}>Notification</Text>
                            </TouchableOpacity>
                            {/* <Text style={{ fontSize: 24, color: '#fff' }}>Notification</Text> */}

                            <TouchableOpacity style={{}} onPress={bottomdrawer}>
                                <Text style={styles.texttitle}>X</Text>
                            </TouchableOpacity>
                        </View>


                    </>
            }

            {
                bottom === true ?
                    <>
                        <View style={styles.alarmbox}>
                            <View style={styles.notialarm}>
                                <View style={styles.namestyle}>
                                    <Text style={styles.name}>Smith Residence</Text>
                                    <Text style={styles.name}>Today 2:21 pm</Text>
                                </View>
                                <View style={styles.centeralarm}>
                                    <Image source={require('../asset/alert.png')}
                                        style={styles.alertimg} />
                                    <Text style={styles.alerttext}>Burglary Alarm {'\n'}7 alarm events</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.btn} onPress={bottomdrawer}>
                                <Icon name='reply' size={20} color="#fff" />
                                <Text style={styles.name}>Response</Text>

                            </TouchableOpacity>

                        </View>


                        <View style={{ flex: 1, backgroundColor: '#ffff' }}>
                            <Text style={{ margin: 10, color: '#3399FF' }}>Event List</Text>
                            <FlatList data={mydata}
                                renderItem={({ item}) => {
                                    return (
                                        <View>
                                            <View style={styles.eventitem}>
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
                        </View>
                    </>


                    :

                    <>
                        <View style={styles.alarmbox}>
                            <View style={styles.notialarm}>
                                <View style={styles.namestyle}>
                                    <Text style={styles.name}>Smith Residence</Text>
                                    <Text style={styles.name}>Today 2:21 pm</Text>
                                </View>
                                <View style={styles.centeralarm}>
                                    <Image source={require('../asset/alert.png')}
                                        style={styles.alertimg} />
                                    <Text style={styles.alerttext}>Burglary Alarm {'\n'}7 alarm events</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.btn} onPress={bottomdrawer}>
                                <Icon name='reply' size={20} color="#fff" />
                                <Text style={styles.name}>Response</Text>

                            </TouchableOpacity>

                        </View>


                        <View style={{ flex: 1, backgroundColor: '#ffff' }}>
                            <Text style={{ margin: 10, color: '#3399FF' }}>Event List</Text>
                            <FlatList data={mydata}
                                renderItem={({ item }) => {
                                    return (
                                        <View>
                                            <View style={styles.eventitem}>
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
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                // Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Hello World!</Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Hide Modal</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.textStyle}>Show Modal</Text>
                        </Pressable>



                        <View style={{
                            flex: 1 / 2,
                            backgroundColor: "rgba(52, 52, 52, 0.6)",
                            paddingHorizontal: 30,
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            height: "75%",
                           
                        }}>
                            <FlatList
                                
                                numColumns={3}
                                data={images}
                                // keyExtractor={item => item.id}
                                renderItem={({item, index }) => (
                                    <View style={styles.imagesbody}>
                                         <TouchableOpacity onPress={()=>{
                                                navigation.navigate('Chat')
                                         }}>
                                       <View style={styles.iconwrap}>
                                           <Image source={item.src}
                                               key={index}
                                               style={{ resizeMode: 'contain', width: 38, height: 28 }}
                                           />

                                       </View>
                                       <Text style={styles.text}>{item.name}</Text>
                                   </TouchableOpacity>
                                    </View>
                                   


                                )}
                            />

                        </View>

                    </>

            }


        </View >

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
    alarmbox: {
        width: '100%',
        height: 246,
        backgroundColor: '#EDF0F2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    notialarm: {
        width: 327,
        height: 156,
        backgroundColor: '#EE5400',

    },
    btn: {
        width: 327,
        height: 60,
        backgroundColor: '#3399FF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        flexDirection: 'row'
    },
    name: {
        color: '#fff',
        margin: 10,
        fontWeight: '300',

    },
    namestyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: '#fff'
    },
    centeralarm: {

        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    alertimg: {
        width: 50,
        height: 50
    },
    alerttext: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '200',
        fontFamily: 'Roboto'
    },
    eventitem: {
        height: 62,
        borderWidth: 1,
        borderColor: '#DCDCDF',
        justifyContent: 'center'
    },
    greaterthen: {
        width: 12,
        height: 21,
        top: 10,
        left: 355
    },
    nametext: {
        fontSize: 15,
        height: 24,
        left: 24,
        color: '#505050'
    },
    timetext: {
        left: 24,
        fontSize: 13
    },
    // imagesbody: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width:85,height:137,
    //     // backgroundColor:'green',
    //     margin:18
    // },
    iconwrap: {
        marginHorizontal:18,
        width: 85,
        height: 85,
        borderWidth: 1.5,
        borderRadius: 45,
        borderColor: '#ffffff',
        justifyContent:'center',
        alignItems: 'center',
        margin:15,
    },
    imgstyle: {
        width: 38,
        height: 28,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
        width:86,
        height:45,
        left:10
        
        
    }
}
)
export default DashboardNoti1;