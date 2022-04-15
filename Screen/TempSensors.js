import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5'


const TempSensors = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ width: '100%', height: 64, backgroundColor: '#52A7DD', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={styles.manubar}>
                        <Icon name='bars' size={30} color='#fff'
                            onPress={() => navigation.openDrawer()} />
                    </View>
                </TouchableOpacity>


                <View style={{ justifyContent: 'center', marginHorizontal: '20%', alignItems: 'center' }}>
                    <Text style={styles.text}>Temp Sensors</Text>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('DrinkFridge')}>
                <View style={{ height: 62, borderWidth: 1, borderColor: '#DCDCDF', flexDirection: 'row' }}>
                    <Text style={styles.text1}>1. Drinks Fridge 3</Text>
                    <View style={styles.degrees}>
                        <Text style={styles.degreenumber}>27.0°C</Text>
                    </View>
                    <View style={styles.setting}>
                        <Image source={require('../asset/settingicon.png')}
                            style={styles.settingicon} />
                    </View>
                </View>
                </TouchableOpacity>
               

                <View style={{ height: 62, borderWidth: 1, borderColor: '#DCDCDF', flexDirection: 'row' }}>
                    <Text style={styles.text1}>2. Dahh Coolr</Text>
                    <View style={styles.degrees}>
                        <Text style={styles.degreenumber}>26.0°C</Text>
                    </View>
                    <View style={styles.setting}>
                        <Image source={require('../asset/settingicon.png')}
                            style={styles.settingicon} />
                    </View>
                </View>

                <View style={{ height: 62, borderWidth: 1, borderColor: '#DCDCDF', flexDirection: 'row' }}>
                    <Text style={styles.text1}>3. Morgue Freeza</Text>
                    <View style={styles.degrees}>
                        <Text style={styles.degreenumber}>28.5°C</Text>
                    </View>
                    <View style={styles.setting}>
                        <Image source={require('../asset/settingicon.png')}
                            style={styles.settingicon} />
                    </View>
                </View>

                <View style={{ height: 62, borderWidth: 1, borderColor: '#DCDCDF', flexDirection: 'row' }}>
                    <Text style={styles.text1}>4. Sensor 4</Text>
                    <View style={styles.degrees}>
                        <Text style={styles.degreenumber}>0.0°C</Text>
                    </View>
                    <View style={styles.setting}>
                        <Image source={require('../asset/settingicon.png')}
                            style={styles.settingicon} />
                    </View>
                </View>

                <View style={{ height: 62, borderWidth: 1, borderColor: '#DCDCDF', flexDirection: 'row' }}>
                    <Text style={styles.text1}>5. Sensor 5 5</Text>
                    <View style={styles.degrees}>
                        <Text style={styles.degreenumber}>0.0°C</Text>
                    </View>
                    <View style={styles.setting}>
                        <Image source={require('../asset/settingicon.png')}
                            style={styles.settingicon} />
                    </View>
                </View>

                <View style={{ height: 62, borderWidth: 1, borderColor: '#DCDCDF', flexDirection: 'row' }}>
                    <Text style={styles.text1}>6. Sensor 6</Text>
                    <View style={styles.degrees}>
                        <Text style={styles.degreenumber}>0.0°C</Text>
                    </View>
                    <View style={styles.setting}>
                        <Image source={require('../asset/settingicon.png')}
                            style={styles.settingicon} />
                    </View>
                </View>



                <View style={{marginTop:10,backgroundColor:'#52A7DD',
                height:46,alignItems:'center',
                flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity>
                    <Text style={{marginLeft:10,color:'#fff',fontSize:20}}>Prev</Text>
                    </TouchableOpacity>
                 
                     <View style={{width:50,height:30,borderWidth:1,borderRadius:15,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                     <Text style={{fontSize:20,color:'#52A7DD'}}>1h</Text>
                     </View>
                     <Text style={styles.text3}>1d</Text>
                     <Text style={styles.text3}>1w</Text>
                     <Text style={styles.text3}>1m</Text>
                     <TouchableOpacity>
                     <Text style={{marginRight:10,fontSize:20,color:'#fff'}}>Next</Text>
                     </TouchableOpacity>
                    
                </View>


                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#555555'}}>No history available</Text>
            </View>

            </View>

           
        </View>
    )
}
const styles = StyleSheet.create({
    manubar: {

        top: 19,
        left: 24
    },
    text: {
        color: '#fff',
        fontSize: 25
    },
    text1: {
        fontSize: 18, left: 24, color: '#505050', top: 20
    },
    degrees: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        position: 'absolute',
        marginLeft: '50%',
        width: 30, height: 42, backgroundColor: '#73D44B'
    },
    degreenumber: {
        fontSize: 20, color: '#fff', fontWeight: '700'
    },
    setting: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginHorizontal: '35%'
    },
    settingicon: {
        width: 24, height: 24, top: 19, left: 125

    },
    text3:{
        color:'#fff',fontSize:20,
    }

})
export default TempSensors;