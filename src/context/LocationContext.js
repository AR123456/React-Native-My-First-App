import createDataContext from "./createDataContext"
// This provider will be in charge of taking location updates and doing something with them.
const locationReducer =(state,action)=>{
    switch (action.type) {
        case "add_current_location":
            // return  all of state and the update we want to make 
            // IE currentLocation property that is in the payload
            // this then needs to flow to the map component (Map.js)
            return {...state,currentLocation: action.payload}
           
    
        default:
         return state;
    }

}


// action functions 
// recording flag updates 
 const startRecording = dispatch =>()=>{};
 const stopRecording = dispatch =>()=>{};
 // invoke this addLocation with location object so pass it in the parens 
 const addLocation = dispatch =>(location)=>{
     //give dispatch an action type and payload of the location object
     // this will show up in the reducer as second arg ,(need the type for the switch case in the locationReducer above)
     dispatch({type: "add_current_location", payload:location})
 };
// export the Context and Provider 
 export const {Context,Provider} = createDataContext(
     // first arg is reducer 
     locationReducer,
     // object with action functions 
     {startRecording,stopRecording,addLocation},
     // initial state object 
     {recording:false, locations:[], curentLocation:null}
 )

 // go to app.js and wire up provider 