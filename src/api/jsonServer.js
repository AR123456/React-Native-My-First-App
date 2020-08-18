import axios from "axios";

export default axios.create({
  // this will change every 8 hours, it came from the tunnel terminal in the jsonserver

  baseURL: "http://b0146467caef.ngrok.io",
});
// making a pre congigured version on axios
