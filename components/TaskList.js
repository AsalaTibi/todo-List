import { StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const TaskList = (props) => {
  const [task,setTask] = useState();
  //const [completed,setCompleted] = useState(false);
   const [completeTask,setCompleteTask]=useState(
    {
      backgroundColor:'#fff',
      pressed:false
    }
   )
  const taskItems = props.tasks;
 const ChangeColor = () =>{
   if(!completeTask.pressed){
    setCompleteTask({backgroundColor:'red',
    pressed:true});//'red',true
    //setCompleteTask.backgroundColor('#fff');
   }
//    else {
//     setCompleteTask('#CB997E',false);
//    }
  }
  return (
    <View style={styles.tasksWrapper}>
        <Text style={styles.title}> Tasks </Text>
        <View style={styles.items}>
           { 
             taskItems.map((item,index) => {
                console.log(item);
                return(
                <View style={styles.item}>
                  <View style={styles.itemLeft}>
                   <TouchableOpacity 
                    // style={styles.square}
                    onPress={()=>ChangeColor()}
                    style={{
                        backgroundColor:completeTask.backgroundColor,
                        width:18,
                        height:18,
                        borderRadius:10,
                        marginRight:15,
                        borderColor:'#CB997E',
                        borderWidth:3,}}
                    >
                    </TouchableOpacity>
                    <Text style={styles.taskText}>{item}</Text>
                  </View>
                  <AntDesign name="delete" size={20} color="gray" key={index} onPress={()=> props.handleDelete(index)} />
                </View>)
             })
           }
        </View>
        <View>
        </View>
        <View style={styles.writeTask}>
        <TextInput 
         style={styles.input}
         placeholder={'New task'}
         onChangeText={text => setTask(text)}
         value={task}
        />
        <TouchableOpacity onPress={()=> {
                            props.handleAdd(task)
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
    circle:{
        width:18,
        height:18,
        borderRadius:10,
        marginRight:15,
        borderColor:'#CB997E',
        borderWidth:3,
    },
    completedCircle:{
        width:18,
        height:18,
        borderRadius:10,
        marginRight:15,
        backgroundColor:'#CB997E',
    },
    taskText:{
        maxWidth:'80%'
    },
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