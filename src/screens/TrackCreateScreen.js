import "../_mockLocation.js"
// import React, { useEffect, useState, useContext } from "react";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
// import {
//   requestPermissionsAsync,
//   watchPositionAsync,
//   Accuracy,
// } from "expo-location";
import Map from "../components/Map";
import {Context as LocationContext} from "../context/LocationContext"
import useLocation from "../hooks/useLocation"

const TrackCreateScreen = () => {
  // addLocation is specific so not moving to the useLocation hook 
  const {addLocation }= useContext(LocationContext)
const [err] = useLocation( addLocation)
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2> Create a Track </Text>
      <Map></Map>

      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
