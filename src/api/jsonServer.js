import axios from "axios";

export default axios.create({
  // this will change every 8 hours

  baseURL: "http://40b88acf118a.ngrok.io",
});
// making a pre congigured version on axios
