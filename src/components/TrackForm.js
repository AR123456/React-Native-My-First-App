import React, {useContext} from 'react'
import {Input, Button  } from 'react-native-elements'
import Spacer from "./Spacer"
import {Context as LocationContext} from "../context/LocationContext"
const TrackForm = () => {
    const {
         // state destructuring
        state:{name,recording,locations},
        startRecording,
        stopRecording,
        changeName} = useContext(LocationContext)
        // are we adding locations to this array ?
   console.log(locations.length)
    return (
        <>
     <Spacer>
     <Input value ={name}onChangeText={changeName}placeholder="Enter track name"/>
     </Spacer>
            <Spacer>
                {recording
                ? <Button title="Stop" onPress={stopRecording}/>
                :  <Button title="Start Recording" onPress={startRecording}></Button>
                 }
           
            </Spacer>
        </>
    )
}



export default TrackForm