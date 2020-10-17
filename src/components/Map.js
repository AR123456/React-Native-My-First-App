import React,{useContext} from "react";
import { ActivityIndicator, StyleSheet} from "react-native";
import MapView, { Polyline,Circle } from "react-native-maps";
import {Context as LocationContext} from "../context/LocationContext"

const Map = () => {
const {state:{currentLocation}} = useContext(LocationContext)
// console.log("state from Map.js",state)
if (!currentLocation){
  return <ActivityIndicator size="large" style={{marginTop:200}}></ActivityIndicator>;
}
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 0.01,
      //   longitudeDelta: 0.01,
      // }}
    >
      <Circle
      center={currentLocation.coords}
      radius={50}
      strokeColor="rgba(158,158,255,1.0)"
      // forth value is opasity 
      fillColor="rgba(158,158,255,0.3)"
      
      ></Circle>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;