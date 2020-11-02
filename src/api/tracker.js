//create and configure an instance of axios
import axios from "axios";
import {AsyncStorage} from "react-native";


const instance= axios.create({
  // ngrok URL needs to be refreshed with new base URL every 8 hours
  // open and start up the express API already built in another window
  baseURL: "https://5a65d39e45b0.ngrok.io",
});
// open a new bash and run the ngrok command and include the port the API is running on
// ngrok http 3000
// note the URL for the tracker.js tile in the api working folder of the app
//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15708358#overview

instance.interceptors.request.use(
 async (config)=>{
    const token =await AsyncStorage.getItem("token")
    if(token){
      config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
},
(err)=>{
  return Promise.reject(err)
}


);



export default instance;