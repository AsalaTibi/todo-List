import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/TaskList';
import React,{useState} from 'react';

export default function App() {
  //const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const handleAddTask = (task) => {
    //console.log('hi')
    setTaskItems([...taskItems,task])
    //console.log('old array',...taskItems)
  }
  const deleteTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy)
  }
  return (

    <View style={styles.container}>
      {/* <View style={styles.tasksWrapper}>
        <Text style={styles.title}> Tasks </Text>
        <View style={styles.items}>
           {
             taskItems.map((item,index) => {
              return <Task key={index} text={item}/>
             })
           }
        </View> */}
        <Task
        handleAdd={handleAddTask}
        handleDelete={deleteTask}
        tasks={taskItems}
        />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE9E8',
  },
  tasksWrapper:{
    paddingTop:20,
    paddingHorizontal:20,
    marginTop:20
  },
  title:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30
  },
  writeTask:{
    position:'absolute',
    bottom:60,
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
});
