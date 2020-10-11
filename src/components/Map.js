import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  // fake points
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.33233 + i * 0.001,
        longitude: -122.03131 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 37.33233 - i * 0.002,
        longitude: -122.03131 + i * 0.001,
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {/* Polyline takes an array of lat long objects to draw the line */}
      <Polyline coordinates={points}></Polyline>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;
