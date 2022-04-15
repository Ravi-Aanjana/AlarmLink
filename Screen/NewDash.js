import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image
} from 'react-native';

const NewDash= ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <TouchableOpacity >
                    <View style={{ marginLeft: 325 }}>
                        <Image source={require('../asset/newmanubar.png')}
                            style={styles.manubar} onPrees={()=>navigation.navigate('Dashboard')} />

                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ width: 300, height: '100%', backgroundColor: '#2E3136', position: 'absolute', }}>

                <View style={{ width: '100%', height: 64, flexDirection: 'row', backgroundColor: '#292C30' }}>
                    <View>
                        <Text style={{ color: '#ffff', fontSize: 16, lineHeight: 19, top: 7, left: 24 }}>Alarm Link</Text>
                        <Text style={{ color: '#4D5457', fontSize: 20, lineHeight: 23, top: 8, left: 24 }}>TEMPs SENSOR2</Text>
                    </View>

                    <View style={{ backgroundColor: '#25272B', width: 75, height: 64, left: 69 }}>
                        <TouchableOpacity>
                            <Image source={require('../asset/emailimg.png')}
                                style={styles.emailnoti} />
                        </TouchableOpacity>
                    </View>
                </View>




                <Text style={{ top: 12, left: 24, color: '#4D5457', lineHeight: 23, fontSize: 20 }}>Sites</Text>

                <View style={{ width: '100%', top: 24 }}>

                    <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#25272B', height: 59 }}>
                        <TouchableOpacity>
                            <Image source={require('../asset/circleoff.png')}
                                style={{ width: 20, height: 20, left: 24, top: 20 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, lineHeight: 23, color: '#ACADAE', left: 51, top: 18 }}>Temp Sensor 32</Text>
                        <TouchableOpacity>
                            <Image source={require('../asset/settingicon.png')} style={styles.setting} />
                        </TouchableOpacity>
                    </View>



                    <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#25272B', height: 59 }}>
                        <TouchableOpacity>
                            <Image source={require('../asset/circleon.png')}
                                style={{ width: 20, height: 20, left: 24, top: 20 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, lineHeight: 23, color: '#ACADAE', left: 51, top: 18 }}>TEMPs SENSOR2</Text>
                        <TouchableOpacity>
                            <Image source={require('../asset/settingicon.png')} style={styles.setting1} />
                        </TouchableOpacity>
                    </View>


                    <Text style={{ fontSize: 20, lineHeight: 23, color: '#4D5457', top: 11, left: 24 }}>Account</Text>

                    <View style={{ width: '100%', top: 23 }}>

                        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#25272B', height: 59 }}>
                            <Image source={require('../asset/eye.png')}
                                style={{ top: 21, left: 24, width: 23, height: 16 }} />
                            <TouchableOpacity>
                                <Text style={{ fontSize: 20, lineHeight: 23, color: '#ACADAE', left: 47, top: 18 }}>Change Password</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#25272B', height: 59 }}>
                            <Image source={require('../asset/woman.png')}
                                style={{ top: 16, left: 24, width: 27, height: 27 }} />
                            <TouchableOpacity>
                                <Text style={{ left: 44, top: 18, fontSize: 20, color: '#ACADAE' }}>Alarm To Recieve</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#25272B', height: 59 }}>
                            <Image source={require('../asset/InfoBox.png')}
                                style={{ width: 27, height: 27, top: 16, left: 24 }} />
                            <TouchableOpacity>
                                <Text style={{ left: 44, top: 18, fontSize: 20, color: '#ACADAE' }}>About</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', borderWidth: 0.5, borderColor: '#25272B', height: 59 }}>
                            <Image source={require('../asset/Legal.png')} resizeMode="contain"
                                style={{ width: 28, height: 40, top: 16, left: 24 }} />
                            <TouchableOpacity>
                                <Text style={{ left: 38, top: 18, fontSize: 20, color: '#ACADAE' }}>Legal</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ flexDirection: 'row', borderWidth: 0.5, borderColor: '#25272B', height: 59 }}>
                            <Image source={require('../asset/Feedback.png')}
                                style={{ top: 6, left: 13, width: 35, height: 36 }} />

                            <TouchableOpacity>
                                <Text style={{ fontSize: 20, color: '#ACADAE', left: 33, top: 18 }}>Feedback</Text>
                            </TouchableOpacity>
                        </View>




                    </View>
            <View style={{top:60,borderWidth:0.5,borderColor:'#25272B',flex:1}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'  }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row',top:18 }}>
                                <Image source={require('../asset/Profile.png')}
                                    style={styles.profile} />
                                <Text style={styles.textprofile}>Profile</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row',top:18 }}>
                                <Image source={require('../asset/SignOut.png')}
                                    style={styles.profile} />
                                <Text style={styles.textsignout}>SignOut</Text>
                            </View>
                        </TouchableOpacity>

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
        backgroundColor: '#545B5E',
    },
    manubar: {
        left: 22,
        top: 20,
        width: 29,
        height: 19,

    },
    emailnoti: {
        width: 33,
        height: 24,
        left: 21,
        top: 15
    },
    icons: {
        width: 35,
        height: 35,
        color: 'white',
        margin: 20
    },
    icontext: {
        color: 'white',
        fontSize: 25,
        margin: 20,
    },
    texticon: {
        color: 'white',
        margin: 10,
        opacity: 0.4,
        fontSize: 18
    },
    radio: {
        margin: 10,
        padding: 10,
        borderRadius: 15
    },
    setting: {
        width: 24,
        height: 24,
        top: 18,
        left: 96
    },
    setting1: {
        width: 24,
        height: 24,
        top: 18,
        left: 88

    },
    icons1: {
        width: 24,
        height: 17,
        margin: 8
    },
    woman: {
        width: 27,
        height: 27,
        margin: 8
    },
    legal: {
        width: 27.95,
        height: 18,
        margin: 8
    },
    feedback: {
        width: 24,
        height: 27,
        margin: 8
    },
    textstyle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 7
    },
    profile: {
        width: 27,
        height: 25
    },
    textprofile: {
        width: 46, height: 19, marginLeft: 20, color: '#fff'
    },
    textsignout: {
        width: 61,
        height: 19, color: '#fff', marginLeft: 20
    }

}
)
export default NewDash;