//! add token to local storage.
export const setToken = token => {
  window.localStorage.setItem('token', token)
}

//! get token from local storage.
export const getToken = () => {
  return window.localStorage.getItem('token')
}

//! Take token and extract parts to confirm legitimacy.
const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(window.atob(parts[1]))
}

//! making sure that user is the owner
export const isOwner = id => {
  const userId = getPayload().sub
  return userId === id
}

//! get user
export const getUser = () => {
  return getPayload().sub
}

//! is the user authenticated?
export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

//! log out user
export const logout = () => {
  localStorage.removeItem('token')
}
