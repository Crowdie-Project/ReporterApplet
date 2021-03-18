//By the CrowdChain Team, 2021

//IMPORTS
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import Report from './Components/Report';

//ENVIRONMENT
import env from './config/env';
//console.log(env);
//console.log("__DEV__ ?",__DEV__);

//env contains env.SUPABASE_URL, env.SUPABASE_KEY

//MAIN

export default function App() {

  return (
    <View style={styles.container}>
        <View style={styles.reportWrapper}>
         
         <Text style={styles.header}>Reporter Applet</Text>
          
         <TextInput placeholder="Code" style={styles.input}></TextInput>
         <TextInput placeholder="Lat" style={styles.input}></TextInput>
         <TextInput placeholder="Lon" style={styles.input}></TextInput>
         <TextInput placeholder="Reporter" style={styles.input}></TextInput>
         <Button title="submit" style={styles.btn} color="#662EDD"></Button>
       </View> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1D1D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reportWrapper: {
    flex:1,
    padding: 50
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    marginBottom: 20,
    fontSize: 18,
    height: 30,
    paddingHorizontal: 5,
    borderWidth: 1,
  },
  btn: {
    
  }
});
