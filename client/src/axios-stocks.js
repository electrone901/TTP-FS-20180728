import axios from 'axios';

const instance = axios.create( {
	// server 
	baseURL: 'http://localhost:5000'
});

export default instance;