// to test user location not part of the production build 
import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = increment=>{
// Updating location 
return{
    timestamp: 10000000,
    coords:{
        speed:0,
        heading:0,
        accuracy:5,
        altitudeAccuracy:5,
        altitude:5,
        logitude: -104.840730 + increment * tenMetersWithDegrees,
        latitude: 37.670670 + increment * tenMetersWithDegrees,
    }
}
}
let counter =0;

setInterval (()=>{
    Location.EventEmitter.emit("Expo.locationChanged",{
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;

},1000)