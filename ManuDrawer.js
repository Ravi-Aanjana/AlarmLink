import Icon from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import {View, Text} from 'react-native'

const Drawer = createDrawerNavigator();
const  Mainmanu1=({ navigation })=> {

    return (
      <View style={{  width:'100%',height:65,backgroundColor:'skyblue',alignItems:'flex-start',justifyContent:'center',paddingHorizontal: 16}}>
      <Icon name="bars" size={30} color="#fff"
      onPress={()=>navigation.openDrawer()}/>
      </View>
    );
  }
  export default Mainmanu1;