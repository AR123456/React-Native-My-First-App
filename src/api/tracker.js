//create and configure an instance of axios
import axios from "axios";

export default axios.create({
  // ngrok URL needs to be refreshed with new base URL every 8 hours
  // open and start up the express API already built in another window
  baseURL: "http://dcf54fe4823d.ngrok.io",
});
// open a new bash and run the ngrok command and include the port the API is running on
// ngrok http 3000
