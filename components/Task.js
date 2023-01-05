import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import React ,{useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TaskContext } from '../context/TaskContext';
import { addTodos, addUser,completeTask } from '../redux/reducer';
import { useSelector, useDispatch } from 'react-redux';
import{
  getFirestore,collection,getDocs,query,where, onSnapshot,addDoc, doc, setDoc, updateDoc
} from 'firebase/firestore';

const Task = (props) => {
  const user = useSelector((state)=> state.currentUser);
  const arrayUsers = useSelector((state)=> state.allUsers)
  const dispatch = useDispatch();
 
  const [taskState,setTaskState]=useState(
    {
      backgroundColor:'#fff',
      pressed:false
    }
   )
   const db =getFirestore();
   const Ref = doc(db,'users',user.id)
    
  return (
     <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity 
            onPress={()=>{
              props.handleComplete(props.task)
            }}
            style={{
              //backgroundColor:props.color,
              width:18,
              height:18,
              borderRadius:10,
              marginRight:15,
              borderColor:'#CB997E',
              borderWidth:2,}}
          >
          </TouchableOpacity>
          <Text style={styles.taskText}>{props.task}</Text>
        </View>
        <AntDesign name="delete" size={20} color="gray" key={props.position} 
         onPress={()=> props.handleDelete(props.position)}
         />
      </View>
  )
}
export default Task
const styles = StyleSheet.create({
  item:{
      backgroundColor:'#FFF',
      padding:15,
      borderRadius:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:20,
  },
  itemLeft:{
      flexDirection:'row',
      alignItems:'center',
      flexWrap:'wrap'
  },
  taskText:{
      maxWidth:'80%'
  }
})