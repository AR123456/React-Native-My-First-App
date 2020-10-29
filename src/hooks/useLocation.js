
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
          // hey expo tell me when users postion changes 
          // video 234 start watching can be called more than one time could / would cause crash
          const sub = await watchPositionAsync(
            {
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10,
            },
            callback
          );

        setSubscriber(sub);
        } catch (e) {
          setErr(e);
        }
      };
          useEffect(() => {
        if(shouldTrack){
            startWatching()
        }else{
           subscriber.remove();
           setSubscriber(null);
        }
         return()=>{
          // clean up function 
          // run subscriber.remove() - it stops listening for updates to user location 
          if(subscriber){
            subscriber.remove()
          }
         }
         }, [shouldTrack,callback]);
    
      return [err];
    };
    