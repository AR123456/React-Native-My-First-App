import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  // MapView is like an image and by default has no height/ width displayed
  // by default android will show google maps - center on equator
  // and Iphones will show apple maps- center on the country you are in
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        // what should we show initally, need lat, long, lat delta long delta
        latitude: 37.33233,
        longitude: -122.03121,
        // delta is zoom value
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;
