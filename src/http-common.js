import axios from "axios";

export default axios.create({
  baseURL: "https://smwstest.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
