
import {useState, useEffect} from "react";
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
  } from "expo-location";

export default(callback)=>{
    // moving stuff out of TrackCreateScreen
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error("Location permission not granted");
          }
          // on subscriber is a function remove to stop tracking 
          const subscriber = await watchPositionAsync(
            {
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10,
            },
            callback
          );
        } catch (e) {
          setErr(e);
        }
      };
    
      useEffect(() => {
        startWatching();
      }, []);
    
      return [err];
    };
    