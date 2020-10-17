import React,{useContext} from "react";
import { ActivityIndicator, StyleSheet  } from "react-native";
import MapView, { Polyline } from "react-native-maps";
// import the context object from the provider 
import {Context as LocationContext } from "../context/LocationContext"
const Map = () => {
  // destructure current location from state 
//  const {state} = useContext(LocationContext)
 const {state:{currentLocation}} = useContext(LocationContext)
//  console.log(state)
 if (!currentLocation) {
   return<ActivityIndicator size="large" style={{marginTop:200}}/>;
 }

  // remove fake points
  // let points = [];
  // for (let i = 0; i < 20; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: 37.33233 + i * 0.001,
  //       longitude: -122.03131 + i * 0.001,
  //     });
  //   } else {
  //     points.push({
  //       latitude: 37.33233 - i * 0.002,
  //       longitude: -122.03131 + i * 0.001,
  //     });
  //   }
  // }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
         ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {/* Polyline takes an array of lat long objects to draw the line */}
      {/* <Polyline coordinates={points}></Polyline> */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;
