//By the CrowdChain Team, 2021

//IMPORTS AND REQUIRES

//REACT IMPORTS
import React from 'react';
import {View, Text,TextInput, StyleSheet} from 'react-native';

//SUPABASE IMPORTS
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);

//////////////////
//MAIN
//////////////////

const Report = () => {
    return (
       
            <View style={styles.reportWrapper}>
                
                <Text style={styles.header}>Reporter Applet</Text>
                
                <TextInput placeholder="Code" style={styles.input}></TextInput>
                <TextInput placeholder="Lat" style={styles.input}></TextInput>
                <TextInput placeholder="Lon" style={styles.input}></TextInput>
                <TextInput placeholder="Reporter" style={styles.input}></TextInput>
                
                <Button title="submit" style={styles.btn} color="#662EDD"></Button>
            </View>
    );
};

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

export default Report;