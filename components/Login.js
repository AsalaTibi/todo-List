import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Alert} from 'react-native'
import React,{useEffect, useState,useContext} from 'react'
import {getAuth,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../firebase'; 
import { useNavigation } from '@react-navigation/native';
import { TaskContext } from '../context/TaskContext';
import{
  getFirestore,collection,getDocs
} from 'firebase/firestore'


const Login = () => {
  
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
   
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const navigation =useNavigation();
    const { setIsLoggedIn,setUser } = useContext(TaskContext);

  //   const db =getFirestore()

  //  //collection ref
  //   const colRef = collection(db,'users')

  //  //get collection data
  //   getDocs(colRef)
  //  .then((snapshot)=>{
  //    let users =[]
  //    snapshot.docs.forEach((doc) =>{
  //      users.push({...doc.data(),id:doc.id})
  //    })
  //    console.log(users)
  //  })
  
    const setData = async () =>{
      if(email.length == 0 || password.length == 0){
        console.log('Please write your data');
      }
      else{
        try {
          signInWithEmailAndPassword(auth,email,password)
          .then( userCredential => {
           console.log('Logged in')
           setIsLoggedIn(true)
           var user = {
              email:email,
              password:password
              }
            setUser(user);

        })
        .catch(error => {
          console.log(error)
          })
        }
         catch (error) {
          console.log(error)
        }
    }
   
     }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>LOGIN</Text>
        <Text>TO CONTINUE</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
         placeholder="Email"
         value={email}
         onChangeText={text => setEmail(text)}
         style={styles.input}
        />
        <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
        onPress={setData}
        style={styles.btn}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    header:{
      marginBottom:20,
      justifyContent:'center',
      alignItems:'center'
    },
    headerText:{
      color:'black',
      fontWeight:'700',
      fontSize:35
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
      width:'80%'
    },
    input:{
      backgroundColor:'white',
      paddingHorizontal:15,
      paddingVertical:10,
      borderRadius:10,
      marginTop:10
    },
    btnContainer:{
      width:'60%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:40,
    },
    btn:{
      backgroundColor:'#A9C8C6',
      width:'100%',
      padding:15,
      borderRadius:10,
      alignItems:'center'
    },
    btnText:{
        color:'black',
        fontWeight:'700',
        fontSize:16

    }
})