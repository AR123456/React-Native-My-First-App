import axios from "axios";

export default axios.create({
  // this will change every 8 hours

  baseURL: "http://b0146467caef.ngrok.io",
});
// making a pre congigured version on axios
