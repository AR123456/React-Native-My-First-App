
import {useState, useEffect} from "react";
import {
    Accuracy,
    requestPermissionsAsync,
    watchPositionAsync,
  } from "expo-location";
// determining if is in focus, calling shouldTrack
export default(shouldTrack,callback)=>{
    // moving stuff out of TrackCreateScreen
    const [err, setErr] = useState(null);
    // putting subscriber into state so we can use it in startWatching 
    const [subscriber, setSubscriber] = useState(null)

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error("Location permission not granted");
          }
          // on subscriber is a function remove to stop tracking 
          const sub = await watchPositionAsync(
            {
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10,
            },
            callback
          );
          // to stop watching the users location 
        //   subscriber.remove()
        // passing sub into setSubscriber- so in state subscriber exists 
        setSubscriber(sub);
        } catch (e) {
          setErr(e);
        }
      };
    
      useEffect(() => {
        if(shouldTrack){
            startWatching()
        }else{
            // now that subscriver is in state can call remove on it
           subscriber.remove();
           setSubscriber(null);
        }

        startWatching();
        // can put an element inside the array, tell react to run this function every time this hook is executed 
        // or when TrackCreaetScreen  re renders
      }, [shouldTrack]);
    
      return [err];
    };
    