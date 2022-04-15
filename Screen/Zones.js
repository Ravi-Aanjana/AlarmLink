import React from 'react';

import {
    View, Text, StyleSheet
} from 'react-native';
import { colorProps } from 'react-native-reanimated/src/reanimated2/UpdateProps';

const Zones = ({navigation}) => {
    return (
        <View>
            <View style={styles.navbar}>
                <Text style={styles.back}
                onPress={()=>{navigation.goBack()}}>Back</Text>
                <Text style={styles.texttitle}>Zones</Text>
            </View>

            <View>
                <View style={styles.zones}>
                    <Text style={styles.zonestext}>Zones3</Text>
                    <Text style={styles.seale}>Unsealed</Text>
                </View>
                <View style={styles.zones}>
                    <Text style={styles.zonestext}>Zones4</Text>
                    <Text style={styles.seale}>sealed</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 64,
        backgroundColor: '#52A7DD',
        flexDirection: 'row',
        
       
    },
    texttitle: {
        margin:19,
        left:50,
        width: 78,
        height: 28,
        fontSize: 24,
        color: '#fff',
        lineHeight: 28,
        
        
    },
    back: {
        margin:20,
        fontSize: 22,
        lineHeight: 25,
        color: '#fff',
        
    },
    zones: {
        borderWidth:0.5,
        borderColor:'#DCDCDF',
        height: 62,
        flexDirection: 'row',
        justifyContent:'space-between'
        
    },
    zonestext: {
        top: 19,
        left: 24,
        fontSize: 16,
        color: '#505050'
    },
    seale: {
        top: 23,
        fontSize: 14,
        color: '#50575D',
        fontWeight: '400',
        lineHeight: 16,
        left:-20
        
    }

})
export default Zones;