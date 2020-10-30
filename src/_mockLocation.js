import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -104.59266784 + increment * tenMetersWithDegrees,
      latitude: 39.40145848 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);























// import * as Location from 'expo-location';

// const tenMetersWithDegrees = 0.0001;

// const getLocation = increment => {
//  let  MY_LATITUDE = -104.59266784
//   let MY_LONGITUDE =  39.40145848
//   return {
//     timestamp: 10000000,
//     coords: {
//         speed: 0,
//         heading: 0,
//         accuracy: 5,
//         altitudeAccuracy: 5,
//         altidude: 5,
//         latitude: MY_LATITUDE + calcSpiral(increment, 8, 1, Math.cos) * tenMetersWithDegrees,
//         longitude: MY_LONGITUDE + calcSpiral(increment, 8, 1, Math.sin) * tenMetersWithDegrees
//     }
// };
// };

// const calcSpiral = (increment, pointsPerRevolution, scalar, trigFunc) => {
// const theta = (increment * 2 * Math.PI) / pointsPerRevolution;
// return scalar * theta * trigFunc(theta);
// };
 

// let counter = 0;
// setInterval(() => {
//   Location.EventEmitter.emit('Expo.locationChanged', {
//     watchId: Location._getCurrentWatchId(),
//     location: getLocation(counter)
//   });
//   counter++;
// }, 1000);
