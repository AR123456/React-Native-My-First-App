// custom reusable hook handleing location 

import {useState, useEffect} from "react";
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from "expo-location";

export default(callback)=>{
    // moving stuff out of TrackCreateScreen
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error("Location permission not granted");
          }
          await watchPositionAsync(
            {
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10,
            },
            callback
            // (location) => {
            //   addLocation(location);
            // }
          );
        } catch (e) {
          setErr(e);
        }
      };

      useEffect(() => {
        startWatching();
      }, []);
      // returning an array with err inside , TrackCreateScreen needs this return
      return[err]

}
