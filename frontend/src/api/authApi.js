import axios from 'axios';

export const signUp = body => axios.post('/users', body);
export const signIn = body => axios.post('/auth', body);