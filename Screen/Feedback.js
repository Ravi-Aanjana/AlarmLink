import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const Feedback = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Text style={styles.texttitle}>Back</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: '#fff' }}>New Message</Text>
                <TouchableOpacity>
                    <Text style={styles.texttitle}>Send</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.compose}>
                <View style={styles.composemail}>
                    <TextInput style={styles.text} placeholder='To:' />
                </View>
                <View style={styles.composemail}>
                    <TextInput style={styles.text} placeholder='Cc/Bcc:' />
                </View>
                <View style={styles.composemail}>
                    <TextInput style={styles.text} placeholder='Subject:' />
                </View>
                <View style={styles.composemail}>
                    <TextInput style={styles.text} placeholder='Message:' />
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
    compose:
    {
        flex: 1, backgroundColor: '#ffff'

    },
    composemail:
    {
        height: 64,
        borderWidth: 1,
        borderColor: '#DCDCDF',
        justifyContent: 'center',

    },
    text: {
        left: 24,
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Roboto',
        color: '#BBB9B9'
    }
}

)

export default Feedback;