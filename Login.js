import React from 'react';

import
{
    View,Text,TextInput,StyleSheet,Image,Switch,Button
} from 'react-native';
const Login =({navigation})=>{
   
// const onclick=()=>{
//    this.props.navigation.navigate(Forget)
// }
// Homemenu(){
//     this.props.navigation.navigate(Homemenu)
// }
   
        return(
            <View style={{ flex:1,backgroundColor:'#C8C7CC'}}>
              <View style={{backgroundColor:'#545B5E',width:'100%',height:50}}>
               <View style={{marginLeft:15,flexDirection:'row',justifyContent:'space-between',padding:5}}>
                   <Text style={{fontSize:25,color:'white'}}
                   onPress={()=>navigation.navigate('Forget')}>
                       Forgot
                   </Text>
                   <Text style={{fontSize:25,color:'white',position:'absolute',marginLeft:"35%",top:5}}>
                       AlarmLINK
                   </Text>
                   <Text style={{fontSize:25,color:'white',marginRight:15}}
                   onPress={()=>navigation.navigate("Mainmanu")}>
                       SignIn
                   </Text>
               </View>
               
              </View>  
              
              <Image source={require('./asset/homewifi2.png')}
              style={styles.homestyle}/>
                <TextInput placeholder='Username or Email'
                style={styles.textinput}/>
                 <TextInput placeholder='Password' secureTextEntry={true}
                style={styles.textinput}/>

                 <View style={styles.textview}>
                 <Text style={styles.text}>Auto Sign in</Text>
                  <Switch style={styles.switch}
                   />
                
                 </View>
               
            </View>
           
        )
    }


const styles= StyleSheet.create({
    textinput:{
       
       borderWidth:1,
       height:60,
       borderColor:'#3f3f3f',
       margin:0,
       paddingLeft:20,
       alignItems:'center',
       fontSize:20,
       backgroundColor:'#ffff'
    },
   homestyle:{
       marginTop:15,
       marginBottom:10,
       width:100,
       height:100,
       marginLeft:'40%'
   },
   textview:{
       marginTop:40,
       borderWidth:2,
       height:60,
       backgroundColor:'#ffff', 
   },
   switch:{
       textAlign:'left',
       margin:10
   },
   text:{
      fontSize:20,
      paddingLeft:30,
      padding:15,
      position:'absolute'
   },
  
})
export default Login;