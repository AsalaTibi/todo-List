import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskList from './components/TaskList';
import React,{useState} from 'react';
import AddField from './components/addField';

export default function App() {

  return (
    <View style={styles.container}>
        <TaskList />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE9E8',
  }
});
