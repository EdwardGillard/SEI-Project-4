import axios from 'axios'

import { getToken } from './auth'
const datingAppUrl = '/api'

//! SEND HEADERS.
const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}



//! AXIOS REQUESTS

//! AUTHENTICATION REQUESTS

//? LOGIN. localhost:8000/api/auth/login/
export const login = data => {
  console.log(data)
  return axios.post(`${datingAppUrl}/auth/login/`, data)
}

//? REGISTER.
export const register = data => {
  console.log(data)
  return axios.post(`${datingAppUrl}/auth/register/`, data)
}

//? GET CURRENT USER PROFILE.
export const getDashboard = () => {
  return axios.get(`${datingAppUrl}/auth/myprofile/`, withHeaders())
}