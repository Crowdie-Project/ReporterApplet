import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



module.exports = class Nav {

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


    getLocation = () => {
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
    
   showLocs() {
    console.log("Latitude is :", this.getLatt());
    console.log("Longitude is :", this.getLong());
   }

    setPermStat() {
        this.permStat = true;
        console.log("Geolocation permission:", b);
    }
} 