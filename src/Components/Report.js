//By the CrowdChain Team, 2021

//IMPORTS AND REQUIRES

//REACT IMPORTS
import React, { useRef, useState} from 'react';
import {View, Text,TextInput, Button, StyleSheet} from 'react-native';

//SUPABASE IMPORTS
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://kivuanxiochrllqnepvh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTEyNDUzNCwiZXhwIjoxOTMwNzAwNTM0fQ.ETthLWIqTxoJsihnOrAYgCeFL0kkMd5v9-sEFmJ_kNA'
const supabase = createClient(supabaseUrl, supabaseKey)

//////////////////
//MAIN
//////////////////

const Report = () => {

  const [reports, setReports] = useState([]);
  const codeRef = useRef();
  const latRef = useRef();
  const lonRef = useRef();
  const reporterRef = useRef();
  const [errorText, setError] = useState("");


  const fetchReports = async () => {
    let { data: reports, error } = await supabase
        .from("TestReports")
        .select("*")
        .order("id", { ascending: false });
    if (error) console.log("error", error);
    else setReports(reports);
};

  const addReport = async () => {
    let codeText = codeRef.current.value;
    let code = codeText.trim();
    let latText = latRef.current.value;
    let lat = latText.trim();
    let lonText = lonRef.current.value;
    let lon = lonText.trim();
   // let reporterText = reporterRef.current.value;
   // let reporter = reporterText.trim();
   
    const { data: report, error } = await supabase
    .from('TestReports')
    .insert([
      { CODE: code, LAT: lat, LON: lon},
    ])
    if (error) setError(error.message);
    else {
        setReports([report, ...reports]);
        setError(null);
        codeRef.current.value = "";
        latRef.current.value = "";
        lonRef.current.value = "";
    }
  };
  
  

    return (
       
            <View style={styles.reportWrapper}>
                
                <Text style={styles.header}>Reporter Applet</Text>
                
                <TextInput ref={codeRef} placeholder="Code" style={styles.input}></TextInput>
                <TextInput ref={latRef} placeholder="Lat" style={styles.input}></TextInput>
                <TextInput ref={lonRef} placeholder="Lon" style={styles.input}></TextInput>
                <TextInput  placeholder="Reporter" style={styles.input}></TextInput>
                
                <Button title="submit" onPress={addReport} style={styles.btn} color="#662EDD"></Button>
            </View>
    );
};

const styles = StyleSheet.create({
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