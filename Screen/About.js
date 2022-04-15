import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
const About = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <View style={{left:24,width:50}}>
                    <Icon name='bars' size={25} color='#fff' />
                </View>
                </TouchableOpacity>
               
                <View style={{ left: 100 }}>
                    <Text style={styles.texttitle}>About Us</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.multicomview}>
                    <Image source={require('../asset/multicom.png')}
                        style={styles.multicom} />
                </View>
                <View style={styles.multicomtext}>
                    <Text style={styles.text}>Another Suretek Innovation</Text>
                </View>
                <View style={styles.multicomtext1}>
                    <Text style={styles.text1}>Multicom Syatem Pty Ltd</Text>
                </View>
                <View style={styles.multicomtext2}>
                    <Text  style={styles.text2}>12 to Bently Street</Text>
                    <Text  style={styles.text2}>Wetherill Park NSW 2164</Text>
                    <Text  style={styles.text2}>Australia Phone:1300 603 704</Text>
                    <Text  style={styles.text2}>International: +61287879872</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.text2}>Web:</Text>
                    <Text  style={{color:'#5757F1',fontSize:17}}>www.multicomsystems.com.a</Text>
                    </View>
                   <View style={{flexDirection:'row'}}>
                   <Text style={styles.text2}>Email:</Text>
                   <Text  style={{color:'#5757F1',fontSize:17}}>contact@multicomsystems.com.au</Text>
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
        backgroundColor: '#52A7DD',
    },
    multicomview: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    multicom: {
        width: 117,
        height: 96
    },
    multicomtext:{
       
        justifyContent:'center',
        alignItems:'center'
    },
    multicomtext1:{
        top:35,
        justifyContent:'center',
        alignItems:'center'
    },
  text:{
        color:'#474D52',
        fontSize:16
    },
    text1:{
        color:'#474D52',
        fontSize:22

    },
    text2:{
color:'#505050',
fontSize:18
    },
    multicomtext2:{
        justifyContent:'center',alignItems:'center',top:70
    },
    texttitle:{
        color:'#fff',
        fontSize:24
    }
})
export default About;