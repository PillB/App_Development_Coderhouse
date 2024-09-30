import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Proyecto Final!</Text>
      <StatusBar style="auto" />
      <TextInput placeholder='Ingrese una tarea'/>
      <Button title='Agregar Tarea'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%"
  },
  text:{
    color:"#fff"
  }
});
