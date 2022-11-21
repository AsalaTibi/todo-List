import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskList from './components/TaskList';
import React,{useContext, useState} from 'react';
import CompletedTask from './components/CompletedTask';
import { NavigationContainer } from '@react-navigation/native';
import { TaskProvider } from './context/TaskContext';
import Login from './components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskContext } from './context/TaskContext';
import DrawerNavigator from './util/DrawerNaviagtor';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
     
      <Stack.Screen component={Login} name='Login' />
      <Stack.Screen component={TaskList} name='TaskList' />
      
    </Stack.Navigator>
  );
};
export  const MainNavigator = () => {
  const { isLoggedIn } = useContext(TaskContext);
  // return isLoggedIn ? <DrawerNavigator /> : <StackNavigator />;
  if(isLoggedIn){
    return (
    <DrawerNavigator />
    )
  }
  else  return <StackNavigator />
};
export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer >
        <MainNavigator />
      </NavigationContainer>
    </TaskProvider>
  );
}
