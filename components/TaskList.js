import { StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React,{useState,useContext, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Task from './Task';
import { TaskContext } from '../context/TaskContext';
import { connect } from "react-redux";
import { addTodos,clearTodos,completeTask ,deleteT,initiateArr} from "../redux/reducer";
import { useSelector, useDispatch } from 'react-redux'
import{
  getFirestore,collection,getDocs,query,where, onSnapshot,addDoc, doc, setDoc, updateDoc
} from 'firebase/firestore'
import firestore from '@react-native-firebase/firestore';

const TaskList = () => {

  const arrayUsers = useSelector((state)=> state.allUsers)
  const user = useSelector((state)=> state.currentUser)
  const dispatch = useDispatch();
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);
  const [taskColor,setTaskColor]=useState('white');
  const [load,setLoad] = useState(false);

  const db =getFirestore()
  const colRef = collection(db,'users')
  const Ref = doc(db,'users',user.id)

  useEffect(()=>{
     console.log("hi")
    const  q = query(colRef,where("email","==",user.email))
    onSnapshot(q,(snapshot)=>{
       
      snapshot.docs.forEach((doc)=>{
        
        const dataI = doc.data();
        const TaskArray = dataI.todos;
        const size = Object.keys(arrayUsers).length;

        if(load === false){
          //  TaskArray.map((item,index) => {
          //  //dispatch(addTodos(item))
          //  })
          setLoad(true);
          dispatch(initiateArr(TaskArray))
          console.log("array",TaskArray)
          setTaskItems(TaskArray);
        }
    })
  })
  },[]);
  
  const handleAddTask = (task) => {
    var Task ={
      title:task,
      completed:false,
    }
    dispatch(addTodos(Task))
    const updateList = [...taskItems,Task]
    console.log("add",taskItems)
    updateDoc(Ref,{"todos":updateList})
    setTaskItems(updateList)   
   }

  const deleteTask = (index) =>{
    dispatch(deleteT(index))
    const updateList = [...taskItems];
    updateList.splice(index,1);
    updateDoc(Ref,{"todos":updateList})
    setTaskItems(updateList)
  }
  const ChangeColor = (task) =>{
     //dispatch(completeTask(task))
    //  objIndex = taskItems.findIndex((obj => obj.title === task))
    //  setTaskItems[objIndex].completed(true);
    //  console.log("c:",taskItems)
    //  const updateList = [...taskItems];
    // updateDoc(Ref,{"todos":taskItems})
    const newState = taskItems.map(obj => {
      if(obj.title === task){
        return{...obj,completed:true}
      }
      return obj;
    })
    const updateList = [...newState]
    updateDoc(Ref,{"todos":updateList})
    setTaskItems(newState);
    initiateArr(newState)
   }  

  return (
    <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Todos </Text>
        <View style={styles.items}>
           { 
             taskItems.map((item,index) => {
              if(!item.completed){
                return(
                  <Task 
                  handleDelete={deleteTask}
                  handleComplete={ChangeColor}
                  task={item.title}
                  position={index}
                  color={taskColor}
                  key={index}
                  />
                )}
             })
            
           }
        </View>
      <View style={styles.writeTask}>
        <TextInput 
          style={styles.input}
          placeholder={'New task'}
          onChangeText={text => setTask(text)}
          value={task}
        />
        <TouchableOpacity 
          onPress={()=> {
          handleAddTask(task)
          setTask(null); 
          }}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
     </View>
    </View>
  )
}
export default TaskList

const styles = StyleSheet.create({
    tasksWrapper:{
        paddingTop:20,
        paddingHorizontal:20,
        // marginTop:15,
        flex:1,
        backgroundColor:'#FFF'
      },
      title:{
        fontSize:26,
        fontWeight:'bold',
        color:'#7F492F'
      },
      items:{
        marginTop:30
      },
      writeTask:{
        position:'absolute',
        bottom:15,
        marginHorizontal:25,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      input:{
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:'#fff',
        borderRadius:60,
        borderColor:'#EDE9E8',
        borderWidth:2,
        width:250,
      },
      addWrapper:{
        width:60,
        height:60,
        backgroundColor:'#893F04',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:15
      },
      addText:{
        fontSize:18,
        color:'#fff'
      }
})