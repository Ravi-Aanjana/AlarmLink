import React from 'react';

import { View, Text, Animated, StyleSheet, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
import MapView from 'react-native-maps';

const MapAlarmActive = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>

                <View style={{ width: 55 }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Text style={styles.Back}>Back</Text>
                    </TouchableOpacity>
                </View>



                <Text style={{ fontSize: 24, color: '#fff',left:85 }}>Alarm Active</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View>
                    <Text style={styles.text}>Control Room Alerted</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.text}>Location Confirmed,Tracking...</Text>
                        <View style={styles.icon}>
                            <Icon name='signal' size={20} color='#fff' />
                        </View>
                    </View>

                </View>
                <MapView
                    style={{ backgroundColor: 'red', height: "70%", width: '100%' }}
                    initialRegion={{
                        latitude: 22.7196,
                        longitude: 75.8577,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                />
                <View style={{ flexDirection: 'row', top: 5 }}>
                    <TouchableOpacity>
                        <View style={styles.back}>
                            <Text style={styles.backtext}>Call Security</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.back}>
                            <Text style={styles.backtext}>Call 000</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.back}>
                            <Text style={styles.backtext}>Cancel</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({

    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    Back: {
        color: '#fff',
        fontSize: 20,
        left: 10, width: 49, height: 26
    },
    navbar: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        backgroundColor: '#52A7DD',
        alignItems: 'center'
    },
    text:
        { margin: 10, padding: 10, color: '#505050' },
    icon: {
        marginLeft: '30%', width: 40, height: 40, backgroundColor: 'green', borderRadius: 40, justifyContent: 'center', alignItems: 'center'
    },


    back: {

        width: 112, height: 34, backgroundColor: '#52A7DD',
        margin: 10, justifyContent: 'center', alignItems: 'center',
        borderRadius: 10
    },
    backtext: {
        color: '#fff',
        fontSize: 19
    }
});
export default MapAlarmActive;