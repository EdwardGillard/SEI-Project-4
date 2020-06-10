import React from 'react'
import { register } from '../../lib/api'
import { useHistory } from 'react-router-dom'
import { setToken } from '../../lib/auth'

function Register() {
  const history = useHistory()
  const [formData, setFormData] = React.useState({
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
    first_name: '',
    postcode: '',
    gender: '',
    gender_preference: '',
    about_bio: '',
    other_interests: '',
    political_preferences: '',
    music_preferences: '',
    literature_preferences: '',
    film_preferences: '',
    television_preferences: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await register(formData)
      setToken(res.data.token)
      history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  if (!formData) return null
  return (
    <div className="main-page">
      <h1>Register Page</h1>
      <div className="auth-box">
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="auth-input">
            <label>First name:</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="auth-input">
            <label>Profile Image:</label>
            <input
              type="text"
              name="profile_image"
              value={formData.profile_image}
              onChange={handleChange}
            />
          </div>
          <div className="auth-input">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="auth-input">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="auth-input">
            <label>Confirm your password:</label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
            />
          </div>
          <div className="auth-input">
            <label>Postcode:</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
            />
          </div>
          <div className="auth-select">
            <label>Your gender:</label>
            <select
              name="gender"
              onChange={handleChange}
              value={formData.gender}>
              <option value=""></option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="auth-select">
            <label>Youre interested in...</label>
            <select
              name="gender_preference"
              onChange={handleChange}
              value={formData.gender_preference}>
              <option value=""></option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="B">Both</option>
            </select>
          </div>
          <div className="auth-textarea">
            <label>About you:</label>
            <textarea
              maxLength="400"
              onChange={handleChange}
              name="about_bio"
              value={formData.about_bio}
            />
          </div>
          <div className="auth-textarea">
            <label>Interests:</label>
            <textarea
              maxLength="300"
              onChange={handleChange}
              name="other_interests"
              value={formData.other_interests}
            />
          </div>
          <div className="auth-textarea">
            <label>Important political issues to you:</label>
            <textarea
              maxLength="300"
              onChange={handleChange}
              name="political_preferences"
              value={formData.political_preferences}
            />
          </div>
          <div className="auth-textarea">
            <label>Some music you like:</label>
            <textarea
              maxLength="300"
              onChange={handleChange}
              name="music_preferences"
              value={formData.music_preferences}
            />
          </div>
          <div className="auth-textarea">
            <label>Some of your favourite books:</label>
            <textarea
              maxLength="300"
              onChange={handleChange}
              name="literature_preferences"
              value={formData.literature_preferences}
            />
          </div>
          <div className="auth-textarea">
            <label>Some of your favourite films:</label>
            <textarea
              maxLength="300"
              onChange={handleChange}
              name="film_preferences"
              value={formData.film_preferences}
            />
          </div>
          <div className="auth-textarea">
            <label>Some of your favourite TV shows:</label>
            <textarea
              maxLength="300"
              onChange={handleChange}
              name="television_preferences"
              value={formData.television_preferences}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register