import axios from "axios";

const token = "10226729085122020";

export default axios.create({
  baseURL: `https://superheroapi.com/api/${token}`,
});
