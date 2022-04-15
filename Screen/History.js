import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,FlatList,Image} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5'
const History = ({ navigation }) => {

    const [mydata, setMydata] = useState([]);


    const fetchData = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const myData = await resp.json();

            setMydata(myData);
            // console.warn(myData[0].name)
            // return myData;
        }
        catch (error) {
            console.warn(error);
        }
    }
    useEffect(() => {
        fetchData();

    }, []);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 64, backgroundColor: '#52A7DD', flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={styles.manubar}>
                        <Icon name='bars' size={30} color='#fff'
                            onPress={() => navigation.openDrawer()} />
                    </View>
                </TouchableOpacity>


                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.text}>History</Text>
                </View>



            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, color: '#52A7DD', left: 24 }}>Filter by</Text>
                    <View style={styles.panel}>
                        <Dropdown
                            labelField='Panel Activity'
                            style={{ borderWidth: 0.5, borderRadius: 10 }}
                        />

                    </View>
                </View>

                <FlatList data={mydata}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <View style={{ borderWidth: 0.5, height: 62 }}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('HistoryDetails')}>
                                    <Text style={styles.nametext}>Arm Request by {item.name}</Text>
                                    <Text style={styles.timetext}>2/10/2015 11:35:46 AM</Text>
                                    <View style={{ position: 'absolute' }}>
                                        
                                            <Image source={require('../asset/greaterthen.png')}
                                                style={styles.greaterthen} />
                                        

                                    </View>
                                    </TouchableOpacity>
                                  

                                </View>

                            </View>

                        )
                    }

                    } />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    manubar: {

        top: 22,
        left: 24
    },
    text: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        marginLeft: '45%'
    },
    panel: {
        width: 248, height: 34,
        marginLeft: '15%',

    },
    greaterthen: {
        width: 12,
        height: 21,
        top: 20,
        left: 355
    },
    nametext: {
        fontSize: 15,
        height: 24,
        left: 24,
        top: 10,
        color: '#505050'
    },
    timetext: {
        top: 11,
        left: 24,
        fontSize: 13
    },

}
)
export default History;