import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserDetails = (props) => {
  return (
    <View>
     {
        props.task.map((item)=>{
            if(item.completed){
             return(
               <Text>completed:{item.title}</Text>)     
            }
            else{
             return <Text>pending:{item.title}</Text>
            }
       })
     }
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({})