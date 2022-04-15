import React from 'react';
import { View, Text, StyleSheet, Image,Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Profile = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.navbar}>
                <View style={styles.item}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <View>
                            <Icon name='bars' size={25} color="#fff" />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.text}>My Profile</Text>
                    </View>

                    <TouchableOpacity>
                        <View>
                            <Text style={styles.text}>Save</Text>
                        </View>

                    </TouchableOpacity>

                </View>
            </View>

            <View>
                <View style={styles.profile}>
                    <View>
                        <Image source={require('../asset/profile.jpg')}
                            style={styles.profileimg} />
                    </View>
                    <View style={{ flexDirection: 'column', left: 44 }}>
                        <Text style={styles.name}>Test Dude</Text>
                        <Text style={styles.email}>techlinkserver@gmail.com</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: '#FFFF' }}>
                <ScrollView>
                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>First Name</Text>
                        <Text style={styles.details1}>Test</Text>
                    </View>
                    </TouchableOpacity>
                    

                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>Last Name</Text>
                        <Text style={styles.details1}>Dude</Text>
                    </View>
                    </TouchableOpacity>
                   

                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>Other Name</Text>
                        <Text style={styles.details1}>optional</Text>
                    </View>
                    </TouchableOpacity>
                   

                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>Email</Text>
                        <Text style={styles.details1}>techlinkserver@gmail.com</Text>
                    </View>
                    </TouchableOpacity>
                   

                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>Phone No</Text>
                        <Text style={styles.details1}>1234567890</Text>
                    </View>
                    </TouchableOpacity>
                  

                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>Mobile No</Text>
                        <Text style={styles.details1}>123456</Text>
                    </View>
                    </TouchableOpacity>
                   

                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>Address1</Text>
                        <Text style={styles.details1}>12 Bentley Street Do</Text>
                    </View>
                    </TouchableOpacity>
                  

                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>Address2</Text>
                        <Text style={styles.details1}>jobhiho</Text>
                    </View>
                    </TouchableOpacity>
                   

                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>City</Text>
                        <Text style={styles.details1}>Indore</Text>
                    </View>
                    </TouchableOpacity>
                  

                    <TouchableOpacity>
                    <View style={styles.borderstyle}>
                        <Text style={styles.details}>State</Text>
                        <Text style={styles.details1}>Indore</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>navigation.navigate('PasswordChange')}>
                           <Button title='Change Password'></Button>
                    </TouchableOpacity>
                   
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar:
    {
        height: 64, width: '100%', backgroundColor: '#52A7DD'
    },
    item:
    {
        top: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', justifyContent: 'space-around'
    },
    text: {
        fontSize: 22,
        color: '#fff'
    },
    profile:
    {
        width: '100%', height: 125, backgroundColor: '#f9f9f9',
        flexDirection: 'row', alignItems: 'center'
    },
    profileimg: {
        width: 65,
        height: 65,
        left: 24
    },
    name: {
        color: '#52A7DD',
        fontSize: 20, fontWeight: '300'
    },
    email: {
        color: '#52A7DD'
    },
    borderstyle: {
        height: 62,
        borderWidth: 1,
        borderColor: '#DCDCDF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    details: {
        left: 24, color: '#505050'
    },
    details1: {
        right: 16, color: '#505050'
    }
})
export default Profile;