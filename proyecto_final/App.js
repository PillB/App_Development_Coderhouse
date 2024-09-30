import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputPrimary from './src/components/InputPrimary';
import ButtonPrimary from './src/components/ButtonPrimary';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Proyecto Final!</Text>
      <StatusBar style="auto" />
      <View style={styles.containerInput}>
        <InputPrimary/>
        <ButtonPrimary text="Agregar"/>
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
