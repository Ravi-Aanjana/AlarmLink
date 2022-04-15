import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View, Text, StyleSheet, Image, Switch, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Control = ({ navigation }) => {
    // const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>

                <View style={styles.manubar} >
                    <Icon name='bars' size={25} color='#fff'
                        onPress={() => navigation.openDrawer()}
                    />
                </View>


                <View style={{ marginHorizontal: '35%' }}>
                    <Text style={styles.texttitle}>Control</Text>
                </View>

            </View>


            <View>
                <View style={styles.text}>
                    <Text style={styles.textcontent}>Relay 1{'\n'}Relay inactive (Off)</Text>
                    <View style={styles.switch}>
                        <Switch value={true} >

                        </Switch>
                    </View>
                </View>

                <View style={styles.text}>
                    <Text style={styles.textcontent}>Relay {'\n'}Relay inactive (Down)</Text>
                    <View style={styles.switch}>
                        <Switch value={true}
                            height={40}
                        >
                        </Switch>
                    </View>
                </View>

                <View style={styles.text}>
                    <Text style={styles.textcontent}>Relay 1{'\n'}Relay inactive (Closed)</Text>
                    <View style={styles.switch}>
                        <Switch value={true} >
                        </Switch>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Zones')}>
                    <View style={styles.text2}>

                        <Text style={{left:24, fontSize: 16,  color: '#505050' }}>Zones</Text>
                        <View >
                            <Image source={require('../asset/greaterthen.png')}
                                style={styles.greaterthen} />
                        </View>




                    </View>
                </TouchableOpacity>
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
    manubar: {

        top: 22,
        left: 34
    },
    texttitle: {
        width: 78,
        height: 28,
        fontSize: 24,
        color: '#fff',
        top: 18,
        lineHeight: 28,

    },
    text: {
        borderWidth: 0.5,
        height: 62,
        width: '100%',
        borderColor: '#868686',
        flexDirection: 'row',
    },
    text2: {
        borderWidth: 0.5,
        height: 62,
        width: '100%',
        borderColor: '#868686',
        flexDirection: 'row',
        alignItems:'center',
        
        
    },
    textcontent: {
        fontSize: 16,
        lineHeight: 24,
        color: '#505050',
        left: 24,
        top: 8
    },
    switch: {
        flex: 1,
        top: 14,

    },
    greaterthen: {
        width: 12,
        height: 21,
        left:340

    },
    root: {
        height: 500, width: 200
    }
})
export default Control;