import { StyleSheet, Text, View, TextInput } from 'react-native'
//import React from 'react'

const InputPrimary = () => {
  return (
    <TextInput style={styles.input} placeholder='Ingrese una tarea'/>
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