import { StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Task from './Task';
const TaskList = () => {
  
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);
 
  const handleAddTask = (task) => {
    setTaskItems([...taskItems,task])
  }

  const deleteTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)
  }
  
  return (
    <View style={styles.tasksWrapper}>
        <Text style={styles.title}> Tasks </Text>
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
        marginTop:20,
        flex:1
      },
      title:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
      },
      items:{
        marginTop:30
      },
      writeTask:{
        position:'absolute',
        bottom:50,
        marginHorizontal:20,
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
        borderWidth:1,
        width:250
      },
      addWrapper:{
        width:60,
        height:60,
        backgroundColor:'#CB997E',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20
      },
      addText:{
        fontSize:18,
        color:'#fff'
      }
})