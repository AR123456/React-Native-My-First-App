
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

        // this could be no arg, empty array or array with stuff in it. 
        //any time something changes in here useEffect gets called 
        //stuff in array could be array, an object or a function 
        // if you do this react dosent look inside the function or object it just 
        // checks to see if it is the same function or object 
        
      }, [shouldTrack]);
    
      return [err];
    };
    