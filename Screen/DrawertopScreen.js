import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import{View,Text} from 'react-native';
import { color } from 'react-native-reanimated';

const DrawertopScreen=(props)=>{
    return(
        <View style={{flex:1}}>
         <DrawerContentScrollView
         {...props}
         contentContainerStyle={{backgroundColor:'#292C30',height:62}}>
        <Text style={{margin:10,color:'#fff'}}>Test Dude</Text>
        <Text style={{margin:-10,left:18,fontSize:25,color:'#fff'}}>Jones Gun Shop</Text>
       
 
         </DrawerContentScrollView>
      
        </View>
       
    )
}
export default DrawertopScreen;
