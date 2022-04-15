import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Switch, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PasswordChange = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon name='bars' size={25} color='#fff' />
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: '#fff' }}>Change Password</Text>
                <TouchableOpacity>
                    <Text style={styles.texttitle}>Save</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
                <View style={{ marginTop: 55,backgroundColor:'#ffff' }}>
                    <View style={styles.inputfiled}>
                        <TextInput placeholder='* Enter Old Password' style={styles.text} />
                    </View>
                    <View style={styles.inputfiled}>
                        <TextInput placeholder='* Enter New Password' style={styles.text} />
                    </View>
                    <View style={styles.inputfiled}>
                        <TextInput placeholder='* Re-type New Password' style={styles.text} />
                    </View>
                    <View style={styles.inputfiled1}>
                        <Text style={styles.text1}>Auto Login</Text>
                        <View>
                        <Switch/>
                        </View>
                      
                    </View>
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
    inputfiled: {
        height: 66,
        borderWidth: 1, justifyContent: 'center',
        borderColor: '#DCDCDF'
    },
    text:{
        color:'#C9C9CE',
        fontSize:21,
        fontWeight:'300',
        fontFamily:'Roboto',
        left:24
    },
    inputfiled1: {
        height: 66,
        borderWidth: 1,
        justifyContent:'space-between', 
        borderColor: '#DCDCDF',
        flexDirection:'row',
        alignItems:'center'
    },
    text1:{
        fontSize:21,
        fontFamily:'Roboto',
        fontWeight:'300',
        left:24
    }
}
)
export default PasswordChange;