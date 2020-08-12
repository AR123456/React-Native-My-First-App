import axios from "axios";

export default axios.create({
  // this will change every 8 hours
  baseURL: "http://4909f199ba7a.ngrok.io",
});
// making a pre congigured version on axios
