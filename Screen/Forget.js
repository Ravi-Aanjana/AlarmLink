import React from 'react';

import {
    View,Text,TextInput,StyleSheet,TouchableOpacity
} from 'react-native'



const Forget =({navigation})=> {

        return(

            <View>
               <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.texttitle}>Back</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, color: '#fff' }}>New Message</Text>
                <TouchableOpacity>
                    <Text style={styles.texttitle}>Send</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.email}>
                <TextInput placeholder='*Email' style={styles.text}/>
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
        email:{
            top:50,
            height:69,
            borderWidth:1,
            borderColor:'#DCDCDF',
            backgroundColor:'#FFFF',
            justifyContent:'center'
        },
        text:{
            fontSize:22,
            left:24,
            fontWeight:'300',

        }

    }
    )
export default Forget;