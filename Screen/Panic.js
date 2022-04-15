import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet
}
  from 'react-native';

  import { useNavigation } from '@react-navigation/native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Children } from 'react/cjs/react.production.min';
import MapAlarmActive from './MapAlarmActive';

const Panic = () => {

  const navigation = useNavigation();
 const [isActive,setIsActive]=useState(false);
  const [time, setTime] = useState(5);

  const timer = () => {
 
      setTimeout(() => {
      
          if (time !== 0) {
            setTime(time => time - 1)
          }
          else {
       navigation.navigate("MapAlarmActive");
          }
       
      }, 1000);
    }
   


  useEffect(() => {
 
    timer();
  })

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={styles.timer}>
        {time !== 0 ?
          <View>
            <CountdownCircleTimer
              size={120}
              isPlaying
              duration={5}
              colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
            >
              <Text style={{ fontSize: 25, fontWeight: '500', color: '#fff' }}>{time}</Text>
            </CountdownCircleTimer>

          </View> :
          <Text></Text>
        }


        <Text onPress={timer}></Text>
      </View>
    </View>




  )
}

const styles = StyleSheet.create({
  animation: {
    width: 100, height: 100, borderWidth: 1, borderColor: 'green', borderRadius: 25,
    justifyContent: 'center', alignItems: 'center'
  },
  timer: {
    width: 100,
    height: 100,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 45,

  },
  number: {
    color: '#000',
    fontSize: 101,
    lineHeight: 118,
    fontWeight: '700',
    top: 42,
    left: 71,
    width: 58, height: 118,
    color: '#5D5D5D'
  },
  elipseimg: {
    width: 200,
    height: 200,

  }
})
export default Panic;