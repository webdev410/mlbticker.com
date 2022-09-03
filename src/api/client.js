import axios from "axios";

const client = axios.create({
	baseURL: "https://statsapi.mlb.com/api/v1/",
});
export default client;
