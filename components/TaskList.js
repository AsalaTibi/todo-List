import { StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React,{useState,useContext} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Task from './Task';
import { TaskContext } from '../context/TaskContext';
const TaskList = () => {
  
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);
  const {toDoList,setToDoList} = useContext(TaskContext);
 
  const handleAddTask = (task) => {
    setTaskItems([...taskItems,task])
    
    var Task ={
      title:task,
      isCompleted:false
    }
    let newTasks = [];
    newTasks = [...toDoList,Task];
    setToDoList(newTasks)
  }

  const deleteTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)
  }
  
  return (
    <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Todos </Text>
        <View style={styles.items}>
           { 
             taskItems.map((item,index) => {
                console.log(item);
                return(
                  <Task 
                  handleDelete={deleteTask}
                  task={item}
                  position={index}/>
                )
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