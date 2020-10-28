import {useContext} from "react"
import {Context as TrackContext} from "../context/TrackContext"
import {Context as LocationContext } from "../context/LocationContext"
import {navigate} from "../navigationRef"


export default () => {
    const { createTrack } = useContext(TrackContext);
    const {
      state: { locations, name },
      reset
    } = useContext(LocationContext);
  // make this async await and after save is done clean up the form 
    const saveTrack = async () => {
        // making request here 
      await createTrack(name, locations);
      // to reset form need to nodify the state in LocationContext - need to add a new 
      // action function there and call it here reset. 
      reset();
      // after this go to the Track List Screen using navigate
      navigate("TrackList")

    };
  
    return [saveTrack];
  };