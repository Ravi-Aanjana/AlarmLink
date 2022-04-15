import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Panic from './Panic';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Switch } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator()

const SideDrawer = (props) => {
// console.log("props",props);
    

    const [isSelected, setSelection] = useState(false);
    const [isSelectedSecond, setSelectionSecond] = useState(false);
    const [contain, setContain] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const onTextToggle = () => {
        // setStatus(status === 'checked' ? 'unchecked' : 'checked');
        setContain(contain === true ? false : true);
        // props.togaldata(contain);
    }

    const [time, setTime] = useState();
    const panicscreen=()=>{
      setTime(<Panic />)
       
    }
  useEffect(()=>{
     setTime();
  },[])


    return (
        <>
            <StatusBar backgroundColor={'#575957'} barStyle="light-content" />
            <SafeAreaView style={styles.innerContainer}>

                <View style={{ flexDirection: 'row' }}>

                    {contain === true ?

                        <View style={styles.Container}>

                            <View style={{ marginLeft: 24, marginTop: 6 }}>
                                <Text style={{ color: '#fcfcfc' }}>Test Dute</Text>

                                <Text style={{ color: '#fcfcfc', fontSize: 21 }}>Jones Gun Shop</Text>

                            </View>

                            <View>
                                <TouchableOpacity onPress={onTextToggle} style={{ marginLeft: '30%', marginTop: 25 }} >
                                    <Icon name='angle-down' size={20} color='white' />
                                </TouchableOpacity>

                            </View>
                            <View style={{ width: 75, height: 66, backgroundColor: '#25272B', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity >
                                    <Image source={require('../asset/emailimg.png')} style={{ width: 33, height: 24,  }} />
                                </TouchableOpacity>
                            </View>
                        </View>


                        :

                        <View style={styles.Container}>

                            <View style={{ marginLeft: 24, marginTop: 6 }}>
                                <Text style={{ color: '#fcfcfc' }}>Alarm Link</Text>

                                <Text style={{ color: '#878682', fontSize: 20 }}>TEMPs SENSOR2</Text>

                            </View>

                            <View>
                                <TouchableOpacity onPress={onTextToggle} style={{ marginLeft: '30%', marginTop: 25 }} >
                                    <Icon name='angle-up' size={20} color='white' />
                                </TouchableOpacity>

                            </View>
                            <View style={{ width: 75, height: 66, backgroundColor: '#25272B', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity >
                                    <Image source={require('../asset/emailimg.png')} style={{ width: 33.5, height: 24, }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    }



                </View>


                <DrawerContentScrollView  {...props} showsVerticalScrollIndicator={false} >
                    {
                        contain === true ?
                            <>
                                <ScrollView>

                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        
                                        <TouchableOpacity>
                                            <View  style={styles.draweritems}>
                                                <Image source={require('../asset/dashboardicon.png')} style={styles.dashboard} />
                                                <DrawerItem
                                                    label='Dashboard'
                                                    labelStyle={styles.labelitems}
                                                    style={styles.linkitems}
                                                    onPress={() => props.navigation.navigate('Dashboard')}
                                                />
                                            </View>
                                        </TouchableOpacity>



                                        <TouchableOpacity>
                                            <View  style={styles.draweritems}>
                                                <Image source={require('../asset/lockicon.png')} style={styles.lockicon} />
                                                <DrawerItem
                                                    label='Arm/Disarm'
                                                    labelStyle={styles.labelitems}
                                                    style={styles.linkitems}
                                                    onPress={() => { props.navigation.navigate('ArmDisarm') }}
                                                />
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <View  style={styles.draweritems}>
                                                <Image source={require('../asset/controlicon.png')} style={styles.dashboard} />
                                                <DrawerItem
                                                    label='Control'
                                                    labelStyle={styles.labelitems}
                                                    style={styles.linkitems}
                                                    onPress={() => { props.navigation.navigate('Control') }}
                                                />
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <View  style={styles.draweritems}>
                                                <Image source={require('../asset/tempratureicon.png')} style={styles.temprature} />
                                                <DrawerItem
                                                    label='Temprature'
                                                    labelStyle={styles.labelitems}
                                                    style={styles.linkitems}

                                                />
                                            </View>
                                        </TouchableOpacity>


                                        <View style={{flexDirection:'row',}}>
                                            <TouchableOpacity>
                                                <View  style={styles.draweritems}>
                                                    <Image source={require('../asset/panicicon.png')} style={styles.dashboard} />
                                                    <DrawerItem
                                                        label='Panic'
                                                        labelStyle={styles.labelitems}
                                                        style={styles.linkitems}
                                                            onPress={panicscreen}
                                                           
                                                    />
                                                
                                                
                                                  
                                                </View>
                                                
                                                <Text style={{position:'absolute',marginLeft:'40%',alignItems:'center'}}>{time}</Text>
                                              

                                            </TouchableOpacity>
                                          
                                           
                                        </View>
                                      

                                        <TouchableOpacity>
                                            <View  style={styles.draweritems}>
                                                <Image source={require('../asset/calendaricon.png')} style={styles.dashboard} />
                                                <DrawerItem
                                                    label='Event History'
                                                    labelStyle={styles.labelitems}
                                                    style={styles.linkitems}

                                                />
                                            </View>
                                        </TouchableOpacity>




                                    </View>
                                </ScrollView>


                            </>

                            :
                            <>
                                <Text style={{ color: '#878682', margin: 10, fontSize: 20 }}>Sites</Text>



                                <View style={{ marginLeft: 0, height: 60, flexDirection: 'row', alignItems: 'center', borderWidth: 0.5 }}>

                                    <Image source={require('../asset/circleoff.png')} resizeMode="contain" style={{ width: 20, height: 20, marginLeft: 24, color: '#fff' }} />

                                    <DrawerItem
                                        label='Temp Sensor 32'
                                        style={{ width: 200 }}
                                        labelStyle={{ fontSize: 20, fontFamily: "ROBOTO", lineHeight: 23, color: '#ACADAE' }}
                                        onPress={()=>props.navigation.navigate('TempSensors32')}
                                    />
                                    <TouchableOpacity>
                                        <Image source={require('../asset/settingicon.png')} resizeMode="contain" style={{ width: 24, height: 24, color: '#fff', marginHorizontal: 30 }} />
                                    </TouchableOpacity>
                                </View>


                                <View style={{ marginLeft: 0, height: 60, flexDirection: 'row', alignItems: 'center', borderWidth: 0.5 }}>
                                    <Image source={require('../asset/circleon.png')} resizeMode="contain" style={{ width: 20, height: 20, marginLeft: 24, color: '#fff' }} />


                                    <DrawerItem
                                        label='TEMPS SENSOR2'
                                        style={{ width: 200 }}
                                        labelStyle={{ fontSize: 20, fontFamily: 'ROBOTO', lineHeight: 23, color: '#ACADAE' }}
                                        onPress={()=>props.navigation.navigate('TempSensors')}
                                    />
                                    <TouchableOpacity>
                                        <Image source={require('../asset/settingicon.png')} resizeMode="contain" style={{ width: 24, height: 24, color: '#fff', marginHorizontal: 30 }} />
                                    </TouchableOpacity>
                                </View>

                                <Text style={{ color: '#878682', margin: 10, fontSize: 20 }}>Account</Text>

                                <ScrollView>
                                    <View style={styles.nextlabelView}>
                                        <Image source={require('../asset/eye.png')} style={styles.eye} />
                                        <DrawerItem
                                            label='Change Password'
                                            labelStyle={styles.nextlabelitems}
                                            style={styles.nextlinkitems}

                                        />
                                    </View>

                                    <View style={styles.nextlabelView}>
                                        <Image source={require('../asset/woman.png')} style={styles.woman} />
                                        <DrawerItem
                                            label='Alarm To Recieve'
                                            labelStyle={styles.nextlabelitems}
                                            style={styles.nextlinkitems}

                                        />
                                    </View>

                                    <View style={styles.nextlabelView}>
                                        <Image source={require('../asset/InfoBox.png')} style={styles.woman} />
                                        <DrawerItem
                                            label='About'
                                            labelStyle={styles.nextlabelitems}
                                            style={styles.nextlinkitems}
                                            onPress={() => props.navigation.navigate('About')}
                                        />
                                    </View>

                                    <View style={styles.nextlabelView}>
                                        <Image source={require('../asset/Legal.png')} style={styles.legal} />
                                        <DrawerItem
                                            label='Legal'
                                            labelStyle={styles.nextlabelitems}
                                            style={styles.nextlinkitems}
                                            onPress={() => props.navigation.navigate('Legal')}
                                        />
                                    </View>

                                    <View style={styles.nextlabelView}>
                                        <Image source={require('../asset/Feedback.png')} style={styles.feedback} />
                                        <DrawerItem
                                            label='Feedback'
                                            labelStyle={styles.nextlabelitems}
                                            style={styles.nextlinkitems}
                                            onPress={() => props.navigation.navigate('Feedback')}
                                        />


                                    </View>

                                    <View style={{ marginVertical: 30, flexDirection: 'row' }}>
                                        <TouchableOpacity
                                         onPress={() => props.navigation.navigate('Profile')}>
                                            <View style={{ flexDirection: 'row', borderWidth: 0.5, flexDirection: 'row', height: 60, width: 175, justifyContent: 'center' }}>
                                                <Image source={require('../asset/Profile.png')} style={styles.profile} />
                                                <Text style={{ color: '#ACADAE', fontSize: 16, top: 10, left: 20 }}>Profile</Text>

                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={{ flexDirection: 'row', borderWidth: 0.5, flexDirection: 'row', height: 60, width: 175, justifyContent: 'center' }}>
                                                <Image source={require('../asset/SignOut.png')} style={styles.signout} />
                                                <Text style={{ color: '#ACADAE', fontSize: 16, top: 10, left: 20 }}>Sign Out</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>



                                </ScrollView>
                            </>
                    }





                </DrawerContentScrollView>

            </SafeAreaView>







        </>

    )
}
const styles = StyleSheet.create({
    innerContainer: { flex: 1 },
    Container: { width: '80%', height: 65, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#292C30' },

    checkbox: { marginLeft: 20, marginTop: 20 },
    eye: {
        width: 23, height: 16, left: 24
    },
    woman: {
        width: 27, height: 27, left: 24
    },
    feedback: {
        width: 35, height: 36, left: 20
    },
    legal: {
        width: 28, height: 26, left: 24
    },

    profile: {
        width: 27,
        height: 25,
        top: 10
    },
    signout: {
        width: 25, height: 24, top: 10
    }, dashboard: {
        width: 27, height: 27, left: 24
    },
    lockicon: {
        width: 22, height: 27, left: 24
    },
    temprature: {
        width: 17, height: 28, left: 30
    },
    animation:{
        position:'absolute',
        width:'20%',height:'25%',borderWidth:1,borderColor:'green',justifyContent:'center',alignItems:'center',borderRadius:20
    },
    draweritems:{ flexDirection: 'row', alignItems: 'center', height: 60, borderWidth: 0.3 },
    labelitems:{ fontSize: 20, lineHeight: 23, color: '#ACADAE', fontWeight: '400', left: 44, top: 5 },
    linkitems:{ width: '100%', height: 60, marginLeft: 0, },
    nextlabelitems:{ fontSize: 20, lineHeight: 23, color: '#ACADAE', fontWeight: '400', left: 30, top: 5 },
    nextlinkitems:{ width: '100%', height: 60, marginLeft: 0, },
    nextlabelView:{ flexDirection: 'row', alignItems: 'center', height: 60,borderWidth:0.5 }

})
export default SideDrawer;