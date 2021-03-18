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

  class Nav {

    constructor() {
      this.long = -1;
      this.latt = -1;
      this.permStat = false;
    }

    
    getLong() {
      return this.long;
    }
    setLong(coord) {
      this.long = coord;
    }

    getLatt() {
      return this.latt;
    }
    setLatt(coord) {
      this.latt = coord;
    }


    getLocation() {
      let locArr = [];
        navigator.geolocation.getCurrentPosition(
            position => {
              this.setLong(position.coords.longitude);
              this.setLatt(position.coords.latitude);
              console.log("Latitude is :", this.getLatt());
              console.log("Longitude is :", this.getLong());
              console.log("Whole geolocation data:", position);
            });  
    }

    
    //navigator.permissions.query({name:'geolocation'}).then(function(result) {
    //Will return ['granted', 'prompt', 'denied']
    // console.log(result.state);
    //});
    
   //showLocs() {
   // console.log("New Latitude is :", this.getLatt());
   // console.log("New Longitude is :", this.getLong());
   //}

    //setPermStat() {
    //    this.permStat = true;
    //    console.log("Geolocation permission:", b);
    //}
  } 

  const str = new Nav();
  str.getLocation();                                                              //Location doesn't update until user clicks to allow location services button
  //setTimeout(str.showLocs(), 2000);


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
