import React from 'react';
import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const Dashboard = ({ navigation }) => {


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{}}>
                        <Icon name='bars' size={30} color="#fff" />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: '#fff' }}>Home</Text>
                <TouchableOpacity>
                    <Text style={styles.texttitle}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Image source={require('../asset/HLLS.png')}
                    style={styles.hlls} />
            </View>

            <View style={{ flex: 1, marginTop: 33 }}>
            <ScrollView>

                <TouchableOpacity   onPress={() => navigation.navigate('DashboardNoti')}>
                <View style={styles.imgitems}>
                        <View>
                            <Image source={require('../asset/lock.png')}
                                style={styles.allsame}
                            />
                        </View>

                        <View style={styles.end}>
                            <Text>Alarm System</Text>
                            <Text style={{ color: 'green' }}>Armed</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                   

                    <TouchableOpacity >
                    <View style={styles.imgitems}>
                        <View>
                            <Image source={require('../asset/updown.png')}
                                style={styles.allsame} />
                        </View>

                        <View style={styles.end}>
                            <Text>Garage Door</Text>
                            <Text style={{ color: 'green' }}
                              >UP</Text>
                        </View>

                    </View>
                    </TouchableOpacity>
                  

                    <TouchableOpacity onPress={()=>navigation.navigate('CompanyDetails')}>
                    <View style={styles.imgitems}>
                        <View>
                            <Image source={require('../asset/sutdown.png')}
                                style={styles.allsame} />
                        </View>

                        <View style={styles.end}>
                            <Text>Front Light</Text>
                            <Text style={{ color: 'green' }}>On</Text>
                        </View>

                    </View>

                    </TouchableOpacity>
                  
                    <TouchableOpacity>
                    <View style={styles.imgitems}>
                        <View>
                            <Image source={require('../asset/5degree.png')}
                                style={styles.allsame} />
                        </View>

                        <View style={styles.end}>
                            <Text>Fridge</Text>
                            <Text style={{ color: 'red' }}>Alarm</Text>
                        </View>

                    </View>

                    </TouchableOpacity>
                   
                    <TouchableOpacity  onPress={() => navigation.navigate("DashCAMSNoti")}>
                    <View style={styles.imgitems}>
                        <View>
                            <Image source={require('../asset/2degree.png')}
                                style={styles.allsame} />
                        </View>

                        <View style={styles.end}>
                            <Text>Freezer</Text>
                            <Text style={{ color: 'green' }}
                                onPress={() => navigation.navigate('DashCAMSNoti')}>No Alarm</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    
               
            </ScrollView>
            </View>
            <View style={{ position: 'absolute', left: 300, bottom: 100 }}>
                <TouchableOpacity>
                    <Image source={require('../asset/alert.png')}
                        style={styles.allsame} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const Mainmanu1 = ({ navigation }) => {

    return (
        <View style={{ width: '100%', height: 65, backgroundColor: 'skyblue', alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 16 }}>
            <Icon name="bars" size={30} color="#fff"
                onPress={() => navigation.openDrawer()} />
        </View>
    );
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
    img: {
        height: 30,
        width: 30,
        margin: 15,
        backgroundColor: 'red'
    },
    hlls: {
        height: 60,
        width: 150,
        marginTop: 20
    },
    allsame: {
        height: 70,
        width: 70,
        margin: 10,

    },
    end: {
        flexDirection: 'column'
    },
    imgitems: {
        flexDirection: 'row', alignItems: 'center',
        width: '100%', height: 115, borderWidth: 1, borderColor: '#DCDCDF'
    }

})
export default Dashboard;