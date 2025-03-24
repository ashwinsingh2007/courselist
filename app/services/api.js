import axios from 'axios';
const API_URL = 'https://cartedo-mock-api-d9672364e747.herokuapp.com/api';

export const getCourses = () => axios.get(`${API_URL}/courses`);
export const addCourse = (data) => axios.post(`${API_URL}/courses`, data);
