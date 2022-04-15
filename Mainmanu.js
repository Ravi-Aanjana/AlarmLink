import Icon from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {View, Text} from 'react-native'
import Mainmanu1 from './ManuDrawer';
import Slider from './Screen/Slider';
import Panic from './Screen/Panic';
import Temprature from './Screen/Temprature';
import Dashboard from './Screen/Dashboard';
import History from './Screen/History';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import ArmDisarm from './Screen/ArmDisarm';
import Control from './Screen/Control';
import EventHistory from './Screen/EventHistory';
import TempSensors from './Screen/TempSensors';
import TempSensors32 from './Screen/TempSensors32';
import MapAlarmActive from './Screen/MapAlarmActive';
import Profile from './Screen/Profile';
import About from './Screen/About';
import Legal from './Screen/Legal';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const  Mainmanu=({ navigation })=> {

    return (
     
    
      
    <Drawer.Navigator drawerContent={props=><Slider {...props}/>}
    ScreenOptions={{headerShown:false,
      
      }}
    >
    <Drawer.Screen name='Slider' component={Dashboard} 
    options={{headerShown:false,
   
        drawerStyle:{
          flex:1,
          backgroundColor:'#2E3136',
          width:'85%',
          height:'100%'
        },
      
  }}
/>
<Drawer.Screen name ='Profile' component={Profile} 
  options={{headerShown:false,
   
    drawerStyle:{
      flex:1,
      backgroundColor:'#2E3136',
      width:'85%',
  
    }
  
}}/> 
<Drawer.Screen name ='About' component={About} 
  options={{headerShown:false,
   
    drawerStyle:{
      flex:1,
      backgroundColor:'#2E3136',
      width:'85%',
  
    }
  
}}/> 
 <Drawer.Screen name ='Dashboard' component={Dashboard} 
  options={{headerShown:false,
   
    drawerStyle:{
      flex:1,
      backgroundColor:'#2E3136',
      width:'85%',
  
    }
  
}}/> 
<Drawer.Screen name='ArmDisarm' component={ArmDisarm} 
options={{headerShown:false,
  drawerStyle:{
    flex:1,
    backgroundColor:'#2E3136',
    width:'85%',
  
  }}}
/>
<Drawer.Screen name='Control' component={Control} 
options={{headerShown:false,
drawerStyle:{
  flex:1,
  backgroundColor:'#2E3136',
  width:'85%',

}}}/>
<Drawer.Screen name ='Temprature' component={Temprature} options={{headerShown:false,
drawerStyle:{
  flex:1,
  backgroundColor:'#2E3136',
  width:'85%',

}}}/>
<Drawer.Screen name='Panic' component={Panic} options={{headerShown:false,
drawerStyle:{
  flex:1,
  backgroundColor:'#2E3136',
  width:'85%',

}}}/>
<Drawer.Screen name='EventHistory' component={EventHistory} options={{headerShown:false,
drawerStyle:{
  flex:1,
  backgroundColor:'#2E3136',
  width:'85%',

}}}/>
<Drawer.Screen name='History' component={History} options={{headerShown:false,
drawerStyle:{
  flex:1,
  backgroundColor:'#2E3136',
  width:'85%',

}}}/>
<Drawer.Screen name='TempSensors' component={TempSensors} options={{headerShown:false,
drawerStyle:{
  flex:1,
  backgroundColor:'#2E3136',
  width:'85%',

}}}/>
<Drawer.Screen name='TempSensors32' component={TempSensors32} options={{headerShown:false,
drawerStyle:{
  flex:1,
  backgroundColor:'#2E3136',
  width:'85%',

}}}/>
<Drawer.Screen name='Legal' component={Legal} options={{headerShown:false,
drawerStyle:{
  flex:1,
  backgroundColor:'#2E3136',
  width:'85%',

}}}/>
    </Drawer.Navigator>

    );
  }
  export default Mainmanu;