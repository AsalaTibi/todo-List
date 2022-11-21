import { View, Text } from 'react-native'
import React,{createContext,useState,useContext} from 'react'

export const TaskContext = React.createContext();

export const TaskProvider = ({children}) => {
  
  const [toDoList,setToDoList]=useState([])
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [user,setUser]=useState([])
   
    return (
    <TaskContext.Provider
    value={{toDoList,setToDoList,isLoggedIn,setIsLoggedIn,user,setUser}}>
      {children}
    </TaskContext.Provider>
  );
};
