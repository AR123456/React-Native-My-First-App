import axios from "axios";

export default axios.create({
  // this will change every 8 hours

  baseURL: "http://c8ce879937da.ngrok.io",
});
// making a pre congigured version on axios
