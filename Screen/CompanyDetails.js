import React from 'react';
import {
    View, Text, StyleSheet, Image, ScrollView, TouchableOpacity
} from 'react-native';

const CompanyDetails = ({navigation}) =>{
  
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', paddingHorizontal: 10, backgroundColor: '#52A7DD', alignItems: 'center' }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text style={styles.textstyle}>Back</Text>
                    </TouchableOpacity>
                   
                    <Text style={styles.textstyle}>Support</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.5 }}>
                        <Image source={require('../asset/NYCONLOGO.png')}
                            style={styles.nyclogo} />
                    </View>


                    <ScrollView>
                        {/* <View style={{ marginVertical: 20, marginHorizontal: 20 }}> */}
                        <View style={styles.content}>
                            <View style={{ flexDirection: 'row',marginVertical:5 }}>
                                <Text style={styles.text1}>Web:</Text>
                                <TouchableOpacity>
                                    <Text style={{ marginHorizontal: 30, fontSize: 20, color: '#1D548F', textDecorationLine: 'underline' }}>www.nycon.com.au:</Text>
                                </TouchableOpacity>

                            </View>



                            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                <Text style={styles.text1}>Call:</Text>
                                <TouchableOpacity>
                                    <Text style={{ marginHorizontal: 35, fontSize: 20, color: '#1D548F', textDecorationLine: 'underline' }}>1300 931 111:</Text>
                                </TouchableOpacity>
                            </View>



                            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                <Text style={styles.text1}>Email:</Text>
                                <TouchableOpacity>
                                    <Text style={{ marginHorizontal: 20, fontSize: 20, color: '#1D548F', textDecorationLine: 'underline' }}>info@nycon.com.au:</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>Sydney</Text>
                        </View>
                       


                        <View style={styles.content}>
                            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                <Text style={styles.text1}>Call:</Text>
                                <TouchableOpacity>
                                    <Text style={{ marginHorizontal: 35, fontSize: 20, color: '#1D548F', textDecorationLine: 'underline' }}>(02) 9311 1111</Text>
                                </TouchableOpacity>
                            </View>



                            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                <Text style={styles.text1}>Address:</Text>
                                <Text style={styles.text2}>591-595 Bunnerong Rd{'\n'}Matraville NSW 2036</Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>Central Coast</Text>
                        </View>


                        <View style={styles.content}>
                        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                            <Text style={styles.text1}>Call:</Text>
                            <Text style={{ marginHorizontal: 35, fontSize: 20, color: '#1D548F', textDecorationLine: 'underline' }}>(02) 4340 1111</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                            <Text style={styles.text1}>Address:</Text>
                            <Text style={styles.text2}> U2/218 Wisemams Ferry Rd{'\n'}Somerby NSW 2050</Text>
                        </View>
</View>
                    </ScrollView>
                </View>

            </View>



        )
    }

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 25,
        margin: 15,
        marginLeft: 35,
        padding: 5,
        color: 'white',
    },
    nyclogo: {
        width: 188,
        height: 72,
        margin: 40,
        padding: 10,

    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 20,
        color: '#1B1B1B'
    },
    content: {
        width: 375,
        height: 160,
        margin: 10,
        padding: 10,
        borderBottomWidth: 0.5
    }

})
export default CompanyDetails;