import "../_mockLocation.js"
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';
import Map from "../components/Map";
// change state inside of context object - import useContect and the context object itself 
import {Context as LocationContext} from "../context/LocationContext";
const TrackCreateScreen = () => {
  // getting access to addLocation from LocationContext
  const {addLocation} = useContext(LocationContext)
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        // on second 
        timeInterval:1000,
        //10 meters
        distanceInterval:10,
          // callback location 
          // dispatch and action that will update current location property
          // that will need to flow to map componet
          //IE update state then get access to that inside of some component 
      }, 
      (location)=>{
        // call addLocation here with the location object 
        // go back to location provier and make sure to dispatch and action that is 
        // going to run through reducer and update current location piece of state
        addLocation(location)
        // console.log(location);
      })
 
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2> Create a Track </Text>
      <Map/>

      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default TrackCreateScreen;


