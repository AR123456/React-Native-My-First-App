// request permissions any time user navigates to track create
// so this goes into use effect - running some code any time a component is displayed
//if user rejects request show error message - this is rendering component so makes use of state,so need use state
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync } from "expo-location";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  // function to track the user response to requesting permission which is coming
  // from the error message below.
  const [err, setErr] = useState(null);

  // helper function to kicking off the entire premissions process
  // call this when component is first displayed on the screen
  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      // user has denied request
      // send error message to send to user
      // this will go into state to also keep track that user has denied request
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2> Create a Track </Text>
      <Map></Map>
      {/* showing err with this terniary operator  */}
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
