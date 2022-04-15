import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, SafeAreaView,ScrollView } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome5'




const SideDrawer = (props) => {

  const [isSelected, setSelection] = useState(false);
  const [isSelectedSecond, setSelectionSecond] = useState(false);
  const [contain, setContain] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const onTextToggle = () => {
    // setStatus(status === 'checked' ? 'unchecked' : 'checked');
    setContain(contain === true ? false : true);
    // props.togaldata(contain);
  }

  return (
    <>
      <StatusBar backgroundColor={'#575957'} barStyle="light-content" />
      <SafeAreaView style={styles.innerContainer}>

        <View style={{ flexDirection: 'row' }}>

          {contain === true ?

            <View style={styles.Container}>
              <View style={{ marginLeft: 24, marginTop: 6 }}>
                <Text style={{ color: '#fcfcfc' }} >Test Dude</Text>
                <Text style={{ color: '#fcfcfc' }}>Jones Gun Shop</Text>

              </View>
              <TouchableOpacity onPress={onTextToggle} style={{ marginLeft: '50%', marginTop: 25 }} >
                <Icon name='angle-down' size={20} color='white' />
              </TouchableOpacity>
  
            </View>
            
           
            :

            <View style={styles.Container}>

              <View style={{ marginLeft: 24, marginTop: 6 }}>
                <Text style={{ color: '#fcfcfc' }}>Alarm Link</Text>

                <Text style={{ color: '#878682', fontSize: 20 }}>TEMPs SENSOR2</Text>

              </View>

              <View style={{ marginLeft: 20, marginTop: 15, }}>
                <TouchableOpacity onPress={onTextToggle} style={{ marginTop: 20, marginLeft: 45 }}>
                  <Icon name='angle-up' size={20} color='white' />
                </TouchableOpacity>

              </View>
            </View>
            
          }


          <View style={{ width: 75, height: 62, backgroundColor: '#25272B', alignItems: 'center', justifyContent: 'center', marginHorizontal: 45 }}>
            <TouchableOpacity >
              <Image source={require('../asset/email.png')} style={{ width: 33.5, height: 24,  }} />
            </TouchableOpacity>
          </View>
        </View>


        <DrawerContentScrollView  {...props} showsVerticalScrollIndicator={false} >
          {
            contain === true ?
              <>
                <DrawerItemList {...props} />
              </>

              :
              <>
                <Text style={{ color: '#878682', margin: 10, fontSize: 20 }}>Sites</Text>



                <View style={{ marginLeft: 0, height: 60, flexDirection: 'row', alignItems: 'center', borderWidth: 0.5 }}>
            
                <Image source={require('../asset/circleoff.png')} resizeMode="contain" style={{ width: 20, height: 20, marginLeft: 24, color: '#fff' }} />
                
                  <DrawerItem
                    label='Temp Sensor 32'
                    style={{ width: 200 }}
                    labelStyle={{ fontSize: 20, fontFamily: "ROBOTO", lineHeight: 23, color: '#ACADAE' }}

                  />
                  <TouchableOpacity>
                    <Image source={require('../asset/settingicon.png')} resizeMode="contain" style={{ width: 24, height: 24, color: '#fff', marginHorizontal: 30 }} />
                  </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 0, height: 60, flexDirection: 'row', alignItems: 'center', borderWidth: 0.5 }}>
                  <Image source={require('../asset/circleon.png')} resizeMode="contain" style={{ width: 20, height: 20, marginLeft: 24, color: '#fff' }} />
                  <DrawerItem
                    label='TEMPS SENSOR2'
                    style={{ width: 200 }}
                    labelStyle={{ fontSize: 20, fontFamily: 'ROBOTO', lineHeight: 23, color: '#ACADAE' }}
                  />
                  <TouchableOpacity>
                    <Image source={require('../asset/settingicon.png')} resizeMode="contain" style={{ width: 24, height: 24, color: '#fff', marginHorizontal: 30 }} />
                  </TouchableOpacity>
                </View>

                <Text style={{ color: '#878682', margin: 10, fontSize: 20 }}>Account</Text>

                <ScrollView>
                  <View style={{ flexDirection: 'row', alignItems: 'center',height:60 }}>
                    <Image source={require('../asset/eye.png')} style={styles.eye} />
                    <DrawerItem
                      label='Change Password'
                      labelStyle={{ fontSize: 20, lineHeight: 23, color: '#ACADAE', fontWeight: '400', left: 30, top: 5 }}
                      style={{ width: '100%', height: 60, marginLeft: 0, }}

                    />
                  </View>

                  <View style={{ flexDirection: 'row', borderWidth: 0.5, alignItems: 'center',height:60 }}>
                    <Image source={require('../asset/woman.png')} style={styles.woman} />
                    <DrawerItem
                      label='Alarm To Recieve'
                      labelStyle={{ fontSize: 20, lineHeight: 23, color: '#ACADAE', fontWeight: '400', left: 30, top: 5 }}
                      style={{ width: '100%', height: 60, marginLeft: 0, }}

                    />
                  </View>

                  <View style={{ flexDirection: 'row', borderWidth: 0.5, alignItems: 'center',height:60}}>
                    <Image source={require('../asset/InfoBox.png')} style={styles.woman} />
                    <DrawerItem
                      label='About'
                      labelStyle={{ fontSize: 20, lineHeight: 23, color: '#ACADAE', fontWeight: '400', left: 30, top: 5 }}
                      style={{ width: '100%', height: 60, marginLeft: 0, }}
                    />
                  </View>

                  <View style={{ flexDirection: 'row', borderWidth: 0.5, alignItems: 'center',height:60}}>
                    <Image source={require('../asset/Legal.png')} style={styles.legal} />
                    <DrawerItem
                      label='Legal'
                      labelStyle={{ fontSize: 20, lineHeight: 23, color: '#ACADAE', fontWeight: '400', left: 30, top: 5 }}
                      style={{ width: '100%', height: 60, marginLeft: 0, }}

                    />
                  </View>

                  <View style={{ flexDirection: 'row', borderWidth: 0.5, alignItems: 'center',height:60 }}>
                    <Image source={require('../asset/Feedback.png')} style={styles.feedback} />
                    <DrawerItem
                      label='Feedback'
                      labelStyle={{ fontSize: 20, lineHeight: 23, color: '#ACADAE', fontWeight: '400', left: 24, top: 5 }}
                      style={{ width: '100%', height: 60, marginLeft: 0, }}
                    />

                   
                  </View>
                
                <View style={{marginVertical:30,flexDirection:'row'}}>
                  <TouchableOpacity>
                  <View style={{flexDirection:'row',borderWidth:0.5,flexDirection:'row',height:60,width:175,justifyContent:'center'}}>
                    <Image source={require('../asset/Profile.png')} style={styles.profile}/>
                    <Text style={{color:'#ACADAE',fontSize:16,top:10,left:20}}>Profile</Text>
                    
                    </View>
                  </TouchableOpacity>
               <TouchableOpacity>
               <View style={{flexDirection:'row',borderWidth:0.5,flexDirection:'row',height:60,width:175,justifyContent:'center'}}>
                      <Image source={require('../asset/SignOut.png')} style={styles.signout}/>
                      <Text style={{color:'#ACADAE',fontSize:16,top:10,left:20}}>Sign Out</Text>
                    </View>
               </TouchableOpacity>
                     
                </View>
                    
                  
                       
                </ScrollView>
              </>
          }
         <Text>Hello</Text>
        </DrawerContentScrollView>

      </SafeAreaView>
      {/* {
        contain === false ?
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', borderTopColor:colors.Black, borderTopWidth:1, borderBottomColor:colors.Black, borderBottomWidth:1, }}>
              <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 20 }} onPress={() =>props.navigation.navigate('Profile')}>
              <Image source={imageUrl.profiledrawer} resizeMode="contain" style={{width:27,height:25.13,color:colors.white}} />  
                <TextComponent
                    color={colors.drawerTextColor}
                    font_20
                    children={'Profile'}
                    mleft={15}
                    align={'left'}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: 'row', borderLeftColor:colors.Black, borderLeftWidth:1, paddingHorizontal: 20, paddingVertical: 20 }}
                onPress={() =>
                  Alert.alert('Sign out', 'Do you want to logout?', [
                    { text: 'Yes', onPress: () => {dispatch(doLogout(auth.userDetailsLocal))} },
                    { text: 'Cancel', style: 'cancel' },
                  ])
                }>
                <Image source={imageUrl.logout} resizeMode="contain" style={{width:27,height:25.13,color:colors.white}} />  
                <TextComponent
                    color={colors.drawerTextColor}
                    font_20
                    children={'Sign Out'}
                    mleft={15}
                    align={'right'}
                  />
              </TouchableOpacity>
            </View>
          </>
          :
          null
      } */}

      {/* <Modal
        backdropOpacity={0.6}
        isVisible={modalVisible}
        style={{ margin: 0, marginTop: 1, flex: 1 }}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <CountdownCircleTimer
            onComplete={() => {
              // return [true, 1500]
              setModalVisible(false);
              props.navigation.navigate('Panic');
            }}
            isPlaying
            size={180}
            strokeLinecap="square"
            strokeWidth={24}
            rotation="clockwise"
            trailStrokeWidth={25}
            trailColor="#BFBFBF"
            initialRemainingTime={5}
            duration={5}
          >
            {({ remainingTime, animatedColor }) => (
              <Animated.Text style={{ color: animatedColor, fontSize: 90, }}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
      </Modal> */}
    </>
  );
};
const styles = StyleSheet.create({
  innerContainer: { flex: 1 },
  Container: { width: 225, height: 48.92, flexDirection: 'row', justifyContent: 'space-between' },
  checkbox: { marginLeft: 20, marginTop: 20 },
  eye: {
    width: 23, height: 16, left: 24
  },
  woman: {
    width: 27, height: 27, left: 24
  },
  feedback:{
    width:35,height:36,left:20
  },
  legal:{
    width:28,height:26,left:24
  },
 
  profile:{
    width:27,
    height:25,
    top:10
  },
  signout:{
    width:25,height:24,top:10
  }

})
export default SideDrawer;