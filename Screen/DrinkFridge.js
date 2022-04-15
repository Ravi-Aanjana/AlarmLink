import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-gesture-handler';


const DrinkFridge = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch2 = () => setIsEnabled1(previousState => !previousState);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <Text style={styles.text} onPress={()=>navigation.goBack()}>Back</Text>
                <Text style={{ fontSize: 24, color: '#fff' }}>Drinks Fridge 3</Text>
                <TouchableOpacity>
                <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
              
            </View>

            <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>

                <View style={{ marginTop: 50, backgroundColor: '#fff', }}>
                    <View style={styles.content}>
                        <Text style={styles.text1}>Name</Text>
                        <Text style={{ marginLeft: 270, fontSize: 18, color: '#505050' }}>Drink Fridge 3</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text1}>High Alarm</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{marginLeft:350}}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text1}>High Temp</Text>
                        <Text style={{ marginLeft: 350, fontSize: 18, color: '#505050' }}>0.0</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text1}>Low Alarm</Text>
                        <Switch
                         trackColor={{ false: "#767577", true: "#81b0ff" }}
                         onValueChange={toggleSwitch2}
                         value={isEnabled1}
                            style={{ marginLeft: 350 }} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text1}>Low Temp</Text>
                        <Text style={{ marginLeft: 350, fontSize: 18, color: '#505050' }}>0.0</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 62,
        backgroundColor: '#52A7DD',
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
    }
})
export default DrinkFridge;