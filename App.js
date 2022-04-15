import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import DrawertopScreen from './Screen/DrawertopScreen';
import ArmDisarm from './Screen/ArmDisarm';
import Temprature from './Screen/Temprature';
import Panic from './Screen/Panic';
import EventHistory from './Screen/EventHistory';
import Control from './Screen/Control';
import SideDrawer from './Screen/SideDrawer';
import Slider from './Screen/Slider';
import Mainmanu from './Mainmanu';
import Mainmanu1 from './ManuDrawer';
import Dashboard from './Screen/Dashboard';
import RemoteKeypad from './Screen/RemoteKeypad';
import Zones from './Screen/Zones';
import History from './Screen/History';
import HistoryDetails from './Screen/HistoryDetails';
import TempSensors from './Screen/TempSensors';
import DrinkFridge from './Screen/DrinkFridge';
import TempSensors32 from './Screen/TempSensors32';
import SitePanelUsers from './Screen/SitePanelUsers';
import MapAlarmActive from './Screen/MapAlarmActive';
import Profile from './Screen/Profile';
import About from './Screen/About';
import Legal from './Screen/Legal';
import Feedback from './Screen/Feedback';
import Home from './Home';
import Login from './Login';
import Forget from './Screen/Forget';
import Edit from './Screen/Edit';
import PasswordChange from './Screen/PasswordChange';
import DashboardNoti from './Screen/DashboardNoti';
import DashCAMSNoti from './Screen/DashCAMSNoti';
import CompanyDetails from './Screen/CompanyDetails';
import DashboardNoti1 from './Screen/DashboardNoti1';
import Chat from './Screen/Chat/Chat';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <>
      <SafeAreaProvider>
        {/* <Mainmanu/> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Slider" component={Slider} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="forget" component={Forget} options={{ headerShown: false }} />
            <Stack.Screen name='Mainmanu' component={Mainmanu} options={{ headerShown: false }} />
            <Stack.Screen name='Mainmanu1' component={Mainmanu1} options={{ headerShown: false }} />
            <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Arm/Disarm' component={ArmDisarm} options={{ headerShown: false }} />
            <Stack.Screen name='Control' component={Control} options={{ headerShown: false }} />
            <Stack.Screen name='Temprature' component={Temprature} options={{ headerShown: false }} />
            <Stack.Screen name='Panic' component={Panic} options={{ headerShown: false }} />
            <Stack.Screen name='EventHistory' component={EventHistory} options={{ headerShown: false }} />
            <Stack.Screen name="RemoteKeypad" component={RemoteKeypad} options={{ headerShown: false }} />
            <Stack.Screen name="Zones" component={Zones} options={{ headerShown: false }} />
            <Stack.Screen name='History' component={History} options={{ headerShown: false }} />
            <Stack.Screen name='HistoryDetails' component={HistoryDetails} options={{ headerShown: false }} />
            <Stack.Screen name="TempSensors" component={TempSensors} options={{ headerShown: false }} />
            <Stack.Screen name='DrinkFridge' component={DrinkFridge} options={{ headerShown: false }} />
            <Stack.Screen name="TempSensors32" component={TempSensors32} options={{ headerShown: false }} />
            <Stack.Screen name="SitePanelUsers" component={SitePanelUsers} options={{ headerShown: false }} />
            <Stack.Screen name='MapAlarmActive' component={MapAlarmActive} options={{ headerShown: false }} />
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='About' component={About} options={{ headerShown: false }} />
            <Stack.Screen name='Legal' component={Legal} options={{ headerShown: false }} />
            <Stack.Screen name='Feedback' component={Feedback} options={{ headerShown: false }} />
            <Stack.Screen name='Edit' component={Edit} options={{ headerShown: false }} />
            <Stack.Screen name='Forget' component={Forget} options={{ headerShown: false }} />
            <Stack.Screen name='PasswordChange' component={PasswordChange} options={{ headerShown: false }} />
            <Stack.Screen name='DashboardNoti' component={DashboardNoti} options={{ headerShown: false }} />
            <Stack.Screen name='DashCAMSNoti' component={DashCAMSNoti} options={{ headerShown: false }} />
            <Stack.Screen name='CompanyDetails' component={CompanyDetails} options={{ headerShown: false }} />
            <Stack.Screen name='DashboardNoti1' component={DashboardNoti1} options={{ headerShown: false }} />
            <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>

    </>
  );
}
