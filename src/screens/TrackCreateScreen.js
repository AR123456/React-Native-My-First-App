import "../_mockLocation.js"

import React, { useContext,useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import {Context as LocationContext} from "../context/LocationContext"
import useLocation from "../hooks/useLocation"
import TrackForm from "../components/TrackForm"

const TrackCreateScreen = ({ isFocused }) => {
  const { state,addLocation } = useContext(LocationContext);

  const callback= useCallback(
    (location)=>{
      // call addLocation and the state object that has recording on it (comming from LocationContext)
      addLocation(location,state.recording)
    }
    // list of variables to watch
    // rebuild callback when state.recording changes
  ,[state.recording])
 // add callback as second argument 
 const [err]=useLocation(isFocused,callback)

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
   <TrackForm></TrackForm>
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);

