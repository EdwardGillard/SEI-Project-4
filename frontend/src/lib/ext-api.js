import axios from 'axios'

//*! CLOUDINARY URL
const imgUploadUrl = process.env.REACT_APP_CLOUDINARY_URL

//! POST TO CLOUDINARY
export const postImage = data => {
  return axios.post(imgUploadUrl, data)
}

export const uploadPreset = process.env.REACT_APP_IMAGE_PRESET