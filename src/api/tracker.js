//create and configure an instance of axios
import axios from "axios";

export default axios.create({
  // ngrok URL needs to be refreshed with new base URL every 8 hours
  // open and start up the express API already built in another window
  baseURL: "https://8c0b6e7f008c.ngrok.io",
});
// open a new bash and run the ngrok command and include the port the API is running on
// ngrok http 3000
// note the URL for the tracker.js tile in the api working folder of the app
//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15708358#overview
