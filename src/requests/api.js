import axios from "axios";

const BASE_URL = axios.create({
  baseURL: 'https://dummyjson.com',
});
export default BASE_URL;