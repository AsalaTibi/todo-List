import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import React ,{useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TaskContext } from '../context/TaskContext';
const Task = (props) => {

  const {toDoList,setToDoList}=useContext(TaskContext);
  const [taskState,setTaskState]=useState(
    {
      backgroundColor:'#fff',
      pressed:false
    }
   )
  
  const ChangeColor = (task) =>{
    console.log('task',task)
    if(!taskState.pressed){
      setTaskState({backgroundColor:'green',
     pressed:true});
     var Task ={
      title:task,
      isCompleted:true
    }
    let newTasks = [];
    newTasks = [...toDoList,Task];
    setToDoList(newTasks)
     }
    else{
      setTaskState({backgroundColor:'white',
      pressed:false});
    }
   }  
  return (
     <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity 
            onPress={()=>{
              ChangeColor(props.task)
              props.handleDelete(props.position)
            }}
            style={{
              backgroundColor:taskState.backgroundColor,
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