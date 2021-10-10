import axios from "axios";

const API_URL = 'http://localhost:3000/api';

export const request = async ({ url, method, data }) => {
    const response = await axios[method](url, data);
    return response.data; 
}