import { StyleSheet, Text, View, TextInput } from 'react-native'
//import React from 'react'

const InputPrimary = (value, onChangeText) => {
  return (
    <TextInput value={value} onChangeText={onChangeText} style={styles.input} placeholder='Ingrese una tarea'/>
  )
}

export default InputPrimary

const styles = StyleSheet.create({
    input:{
    borderColor:'lightblue',
    borderWidth:1,
    padding:5,
    flex:2,
    margin:10,
    borderRadius:5
    },
})