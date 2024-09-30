import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import ButtonPrimary from './src/components/ButtonPrimary';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Proyecto Final!</Text>
      <StatusBar style="auto" />
      <View style={styles.containerInput}>
      <TextInput style={styles.input} placeholder='Ingrese una tarea'/>
      <ButtonPrimary/>
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
  },
  input:{
    borderColor:'lightblue',
    borderWidth:1,
    padding:5,
    flex:2,
    margin:10,
    borderRadius:5
  },
  
});
