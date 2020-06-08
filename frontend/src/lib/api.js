import axios from 'axios'

import { getToken } from './auth'


//! ------------- BASE URL -------------
const datingAppUrl = '/api'

//! ----------- SEND HEADERS -----------
const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}



//! ---------------- AXIOS REQUESTS ---------------

//! ----------- AUTHENTICATION REQUESTS -----------

//? LOGIN.
export const login = data => {
  console.log(data)
  return axios.post(`${datingAppUrl}/auth/login/`, data)
}

//? REGISTER.
export const register = data => {
  console.log(data)
  return axios.post(`${datingAppUrl}/auth/register/`, data)
}

//! ---------------- USER REQUESTS -----------------

//? GET CURRENT USER PROFILE.
export const getDashboard = () => {
  return axios.get(`${datingAppUrl}/auth/myprofile/`, withHeaders())
}

//? GET ALL USERS.
export const getAllUsers = () => {
  return axios.get(`${datingAppUrl}/auth/users/`, withHeaders())
}

//? GET A SINGLE USER.
export const getAUser = id => {
  return axios.get(`${datingAppUrl}/auth/profile${id}`, withHeaders())
}

//! --------------- LIKES/DISLIKES ----------------

//? ADD USER TO FAVOURITES.
export const addToFavourites = data => {
  return axios.post(`${datingAppUrl}/liked/`, data, withHeaders())
}

//? DELETE A USER FROM FAVOURITES.
export const deleteFromFavs = id => {
  return axios.delete(`${datingAppUrl}/liked/${id}`, withHeaders())
}

//? ADD USER TO DISLIKES.
export const addToDisliked = data => {
  return axios.post(`${datingAppUrl}/disliked/`, data, withHeaders())
}

//! ---------------- CHATS WITH USER ----------------

//? START A CHAT. 
export const beginChat = data => {
  return axios.post(`${datingAppUrl}/chats`, data, withHeaders())
}

//? REPLY TO CHAT.
export const sendReply = data => {
  return axios.post(`${datingAppUrl}/responses`, data, withHeaders())
}