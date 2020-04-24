import axios from 'axios';

export const HTTP = axios.create({
	baseURL: 'https://api.covidtrack.tk/api/v1/stats/daily',
	headers: {
		Authorization: 'Bearer {token}'
	}
});