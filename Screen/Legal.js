import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
const Legal = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <View style={{ left: 24, width: 50 }}>
                        <Icon name='bars' size={25} color='#fff' />
                    </View>
                    
                </TouchableOpacity>

                <View style={{ left: 120 }}>
                    <Text style={styles.texttitle}>Legal</Text>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: '#ffff' }}>
               
                <View style={styles.content1}>
                    <Text style={styles.textcontent}>Copyright Notice & Disclaimers</Text>
                </View>
             
                 <View style={styles.copyright}>
                 <Text style={styles.copyrighttext}>
                    Copyright@ 2012 Multicom System Pty Ltd.All right reserved
                </Text>
                 </View>
                
                 <View style={{width:'95%',margin:10,height:'85%',justifyContent:'center',alignItems:'center'}}>
                 <ScrollView>
               <View style={{marginTop:20}}>
               <Text style={styles.contenttext}>
                    Please address your comments and suggestions to: Multicom 
                    systems, PO Box 7075 Wetherill park NSW 2164 Australia.
                    Changes may be made periodically to the infomationin this
                    publication. The chnages will be incorporated in new editions
                    of the user guide.
                </Text>
                
               </View>
               
                

                <View  style={{marginTop:20}}>
                <Text style={styles.contenttext}>
                    This user guide and the software described this document is
                    furnished under a license ageement,and may be used or
                    copied only in accordance with the terms thereof. It is against
                    the low to copy the user guide and software on another
                    medium, except as specifically provide in the license
                    agreement. The licensee may make one copy of the software
                    for backup purposes. No part of this publication may be
                    reproduced, stored in a retrieval system, or transmitted in any
                    form or by any means, electronic, mechanical, photocopied.
                    recorded or otherwise, without the prior written permission of
                    Multicom system Pty Ltd.
                </Text>

                </View>
                
                <View style={{marginTop:20}}>
                <Text style={styles.contenttext}>
                    The software licencs and limited warranty for the accom-
                    panying products are det forth in the information packet
                    supplied with the product, and are incorporated herein by this
                    reference. If you cannpt locate the software license, contact
                    you Multicom Systems representative for a copy.
                </Text>
                </View>
               

                <View style={{marginTop:20}}>
                <Text style={styles.contenttext}>
                    All product names mentioned in this manual are for
                    identification purposes only, and are either trademarks or
                </Text>
                </View> 
                 </ScrollView>
               
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
        backgroundColor: '#565B5F',
    },
    texttitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '400'
    },
    content1: {
        left: 25,
        top: 10,
        width: 355,
        height: 39,
        backgroundColor: '#C6C7C7',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textcontent: {
        color: '#000',
        fontSize: 22,
        fontWeight: '700',

    },
    copyright:{
        marginTop:10,
        width:331,
        height:26,
        left:35,
        justifyContent:'center',
        alignItems:'center'
    },
    copyrighttext:{
        fontSize:12,
        color:'#6A6F73'
    },
    content1text:{
        width:'95%',
        justifyContent:'center',
        top:10,
        alignItems:'center',
       
    },
    contenttext:{
        letterSpacing:0.4,
        lineHeight:23,
        fontSize:12,
        fontWeight:'700',
        fontFamily:'Roboto'
    },
   
   
})
export default Legal