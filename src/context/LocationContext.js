import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
      case "add_current_location":
      return{ ...state, currentLocation: action.payload}   
      // adding the case to start recording
      case "start_recording" :
      return{...state, recording:true}
      case"stop_recording":
      return{...state, recording:false}
      case"add_location":
      // add the location to the array without modifiying the original array
      // dont mutate state !!
      return{...state,locations:[...state.locations, action.payload] }
      case "change_name":
      return{...state, name: action.payload}  

    default:
      return state;
  }
};
// handleing the name of the track 
const changeName = dispatch =>(name)=>{
  
  dispatch({type:"change_name", payload:name})
}
const startRecording = dispatch => () => {
// when this gets called dispatch action to start recording- make recording boolean true - add this as a case in reducer
dispatch({type: "start_recording"})


};
const stopRecording = dispatch => () => {
  dispatch({type: "stop_recording"})
};
// pass in recording argument (which is coming from TrackCreateScreen )
const addLocation = dispatch => (location,recording) => {
 //  if we are recording, add location to locations array
dispatch({ type: "add_current_location", payload: location })
if(recording){
  // createding this dispatch to add a location to the locations array, make case above in the locationReducer
  dispatch({type:"add_location", payload:location})
}
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation,changeName },
  // when recording we are adding to the locations array 
  // keeping track of the name of the track here too - will be sending both to back end API from here so keeping them together
  { name: "", recording: false, locations: [], currentLocation: null }
);
