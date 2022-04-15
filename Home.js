import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
class Home extends React.Component {
  constructor(props){
super(props)
this.state={
  component:"false"
}
  }
  componentDidMount(){
 setTimeout(() => {
     this.props.navigation.navigate("Login")
    },3000);
  }
 
  render(){
  return (
    <View style={{ backgroundColor:"#4D5255",width:"100%",height:"100%",justifyContent:'center',alignItems:'center'}}>
      <Image
        resizeMode='contain'
        source={require('./asset/homewifi.png')}
        style={styles.homestyle} />
      <Image
        resizeMode='contain'
        source={require('./asset/wifiii.png')}
        style={styles.WIFI} />
       
    </View>
    
  )
  }
 
}

const styles = StyleSheet.create({
  homestyle: {
    width: 350,
    height: "35%",
    marginBottom:40
  },
  WIFI: {
    width:"100%",
    height:"50%",
    opacity:0.1,
    position:'absolute',
    display:'flex',
    bottom:'-10%'
  }

})
export default Home;
