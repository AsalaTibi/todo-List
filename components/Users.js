import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect, useState}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import{
  getFirestore,collection,getDocs,query,where, onSnapshot,addDoc
} from 'firebase/firestore'
import UserDetails from './UserDetails'
function Users () {

  //const arrayUsers = useSelector((state)=> state.allUsers)
  const[taskUser,setTaskUser] = useState([])

  useEffect(()=>{
  const db =getFirestore()
  const colRef = collection(db,'users')
  
  onSnapshot(colRef,(snapshot)=>{

    snapshot.docs.forEach((doc)=>{
     const allData =  doc.data();
     const email = allData.email;
     const AllTask = allData.todos;
     console.log("users",AllTask);
     setTaskUser([...taskUser,AllTask])
     console.log("task",[...taskUser]); 
    })
    }) 
 
  },[]);

  // return (
  //     // {
  //     //   taskUser.map((item,index) => {
  //     //      //console.log(item);
  //     //         return (
  //     //           <>
  //     //          <Text>{item.title}</Text>
  //     //          {/* <UserDetails  task={item.allTasks}/>  */}
  //     //          </> )  
  //     //   })
  //     // } 
  // )
}

export default Users

const styles = StyleSheet.create({})