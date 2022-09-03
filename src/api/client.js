import axios from "axios";

const client = axios.create({
	baseURL: "http://statsapi.mlb.com/api/v1/",
});
export default client;
