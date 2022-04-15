import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colorProps } from 'react-native-reanimated/src/reanimated2/UpdateProps';
import Icon from 'react-native-vector-icons/FontAwesome5'
const HistoryDetails = ({ props, navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 64, backgroundColor: '#52A7DD', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.back}
                            onPress={() => navigation.goBack()}>Back</Text>
                    </View>
                </TouchableOpacity>


                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>History Details</Text>
                </View>
            </View>

            <View style={{ width: '100%', height: 62, backgroundColor: '#52A7DD', top: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Test Dude cancelled Panic Alarm</Text>
            </View>
            <View style={{ marginTop: 10, backgroundColor: '#F9F9F9' }}>
                <View style={{ height: 62, borderWidth: 1, justifyContent: 'center', borderColor: '#DCDCDF' }}>
                    <View style={{ flexDirection: 'row', height: 24 }}>
                        <Text style={styles.text1}>Panel Id</Text>
                        <Text style={{ fontSize: 18, left: 86, color: '#505050' }}>0810818447</Text>
                    </View>

                </View>
                <View style={{ height: 62, borderWidth: 1, justifyContent: 'center', borderColor: '#DCDCDF' }}>
                    <View style={{ flexDirection: 'row', height: 24 }}>
                        <Text style={styles.text1}>Date Time</Text>
                        <Text style={{ fontSize: 18, left: 69, color: '#505050' }}>1/10/2015 7:07:42PM</Text>
                    </View>

                </View>

                <View style={{ height: 62, borderWidth: 1, justifyContent: 'center', borderColor: '#DCDCDF' }}>
                    <View style={{ flexDirection: 'row', height: 24, }}>
                        <Text style={styles.text1}>Operator</Text>
                        <Text style={{ fontSize: 18, left: 85, color: '#505050' }}>Test Dude</Text>
                    </View>

                </View>

                <View style={{ height: 62, borderWidth: 1, justifyContent: 'center', borderColor: '#DCDCDF' }}>
                    <View style={{ flexDirection: 'row', height: 24 }}>
                        <Text style={styles.text1}>Area</Text>
                        <Text style={{ fontSize: 18, left: 125, color: '#505050' }}>N/A</Text>
                    </View>

                </View>


            </View>

            <View style={{ width: '100%', height: 62, top:25, justifyContent: 'center', alignItems: 'center',borderWidth:1,borderColor:'#DCDCDF',backgroundColor:'#FFF'}}>
                <Text style={{fontSize: 20,color: '#505050' }}>Test Dude cancelled Panic Alarm</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    back: {
        left: 24,
        fontSize: 22,
        color: '#fff'
    },

    text: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginLeft: '25%'
    },
    text1: {
        fontSize: 20,
        left: 24,
        color: '#505050'
    },

})
export default HistoryDetails