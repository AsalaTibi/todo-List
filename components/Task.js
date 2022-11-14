import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'
import React ,{useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Task = (props) => {

  const [completeTask,setCompleteTask]=useState(
    {
      backgroundColor:'#fff',
      pressed:false
    }
   )
  
  const ChangeColor = () =>{
    if(!completeTask.pressed){
     setCompleteTask({backgroundColor:'yellow',
     pressed:true});
    }
     else {
      setCompleteTask({backgroundColor:'#fff',
      pressed:false});
     }
   }  
  return (
     <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity 
            onPress={()=>ChangeColor()}
            style={{
              backgroundColor:completeTask.backgroundColor,
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