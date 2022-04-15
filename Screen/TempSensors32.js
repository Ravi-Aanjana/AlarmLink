import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import TempSensors from './TempSensors';
import Icon from 'react-native-vector-icons/FontAwesome5'


const TempSensors32 = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <TouchableOpacity>
                    <View style={styles.manubar}>
                        <Icon name='bars' size={30} color='#fff'
                            onPress={() => navigation.openDrawer()} />
                    </View>
                </TouchableOpacity>

                <Text style={{ fontSize: 24, color: '#fff' }}>Temp Sensors 34</Text>
                <TouchableOpacity>
                <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
              
            </View>

        
           
            <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
               
                  
            <Text style={{top:15,left:24,color:'#505050'}}>Panel ID - 081081847</Text>

                <View style={{ marginTop:30, backgroundColor: '#fff', }}>
                    <View style={styles.content}>
                        <Text style={styles.text1}>Site Name</Text>
                        <Text style={{ marginLeft: 250, fontSize: 18, color: '#505050' }}>Temp Sensors 34</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text1}>Remote Keypad</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ marginLeft: 350 }}
                        />
                    </View>
                    <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text1}>Set User Code</Text>
                        <Image source={require('../asset/greaterthen.png')} style={styles.greater}/>
                    </View>
                    </TouchableOpacity>
                   
                    <TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.text1}>Keypad Theme</Text>
                        <Text style={{marginLeft:240,size:18,color:'#505050'}}> Ivory square Keys</Text>
                        <Image source={require('../asset/greaterthen.png')} style={styles.greater}/>
                    </View>
                    </TouchableOpacity>
                   
                  
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("SitePanelUsers")}>
                <View style={{marginTop:25,borderWidth:1,borderColor:'#DCDCDF',backgroundColor:'#fff',height:62,justifyContent:'center'}}>
                        <Text style={styles.text1}>User</Text>
                        <Image source={require('../asset/greaterthen.png')} style={styles.greater}/>
                        
                    </View>
                </TouchableOpacity>
               
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 62,
        backgroundColor: '#545B5E',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 22, color: "#fff"
    },
    content: {
        height: 65, borderWidth: 1, borderColor: '#DCDCDF',
        flexDirection: 'row', alignItems: 'center'
    },
    text1: {
        position: 'absolute', marginLeft: 24, fontSize: 18, color: '#505050'
    },
    text2: {
        fontSize: 18, marginLeft: 270
    },
    greater:{
        width:12,
        height:21,
        left:370,
        position:'absolute'
        
    }
})
export default TempSensors32;