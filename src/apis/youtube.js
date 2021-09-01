import axios from 'axios'

const API_KEY = "AIzaSyApZm45MYxCvO_JKMbbh_-EL7SZ49KaWPc";


export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 7,
		key: API_KEY,
	},
});
