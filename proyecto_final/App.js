import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputPrimary from './src/components/InputPrimary';
import ButtonPrimary from './src/components/ButtonPrimary';
import {useEffect, useState} from 'react'

export default function App() {
  
  const [newTask, setNewTask] = useState("")

  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    console.log(tasks)
  },[tasks])

  const handleAddTask = () => {
    setTasks([...tasks, newTask])
    setNewTask("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Proyecto Final!</Text>
      <StatusBar style="auto" />
      <View style={styles.containerInput}>
        <InputPrimary value={newTask} onChangeText={(e) => setNewTask(e) }/>
        <ButtonPrimary onPress={handleAddTask} text="Agregar"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    width:"100%"
  },
  containerInput:{
    flexDirection:'row',
    padding:10
  },
  text:{
    color:"#fff"
  }
});
