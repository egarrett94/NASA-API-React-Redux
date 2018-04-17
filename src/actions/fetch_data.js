import axios from 'axios'; 

export default function fetchData() {
	const API_KEY = 'AmXuO49rtcMqBYi4dmM3d8tRKshOs2GJ7bqz6TGR'
	const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='
	const request = axios.get(END_POINT + API_KEY);

	return {
		type: 'FETCH_DATA',
		payload: request
	}
}