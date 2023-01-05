import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useContext,useEffect,useState } from 'react'
import { TaskContext } from '../context/TaskContext'
import { useSelector, useDispatch } from 'react-redux'

export default function CompletedTask() {
  
  const arrayUsers = useSelector((state)=> state.allUsers)
  return (
    <View style={styles.tasksWrapper}>
    <Text style={styles.title}>Completed Task</Text>
    <View style={styles.items}>
    {
    arrayUsers.map((item,index) => {
      console.log('item',item)
     if(item.completed){
        // console.log('item',item)
       return(
        <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity 
            style={{
              width:18,
              height:18,
              borderRadius:10,
              marginRight:15,
              backgroundColor:'#90A955',
              borderWidth:1,}}
          >
          </TouchableOpacity>
          <Text style={styles.taskText}>{item.title}</Text>
        </View>
      </View>
        )}
     

        }
        
      ) 
    }
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  items:{
    marginTop:30
  },
  tasksWrapper:{
    paddingTop:20,
    paddingHorizontal:20,
    flex:1,
    backgroundColor:'#FFF',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#7F492F'
  },
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