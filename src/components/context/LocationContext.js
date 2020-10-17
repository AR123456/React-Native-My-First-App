import createDataContext from "./CreateDataContext"
// This provider will be in charge of taking location updates and doing something with them.
const locationReducer =(state,action)=>{
    switch (action.type) {
        case value:
           
    
        default:
         return state;
    }

}


// action functions 
// recording flag updates 
 const startRecording = dispatch =>()=>{};
 const stopRecording = dispatch =>()=>{};
 const addLocation = dispatch =>()=>{};
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