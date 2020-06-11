import React from 'react'
import { useHistory } from 'react-router-dom'
import { getDashboard, editProfile } from '../../lib/api'

function EditProfile() {
  const [formData, setFormData] = React.useState(null)
  const history = useHistory()

  //! RETRIEVE DATA TO SET STATE TO POPULATE CURRENT INFO IN INPUTS.
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getDashboard()
        setFormData(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  //! HANDLE CHANGES TO THE DATA.
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  //! PUT REQUEST TO SEND EDITED DATA.
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await editProfile(formData)
      history.push('/myprofile')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  if (!formData) return (
    <div className="home-page">
      <div className="background-home">
      </div>
    </div>)
  return (
    <div className="main-page">
      <h1>Edit your profile</h1>
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
              <option disabled value=""></option>
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
              <option disabled value=""></option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="B">Both</option>
            </select>
          </div>
          <div className="auth-textarea">
            <label>About you:</label>
            <textarea
              maxLength="400"
              rows="10"
              onChange={handleChange}
              name="about_bio"
              value={formData.about_bio}
            />
          </div>
          <div className="auth-textarea">
            <label>Interests:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="other_interests"
              value={formData.other_interests}
            />
          </div>
          <div className="auth-textarea">
            <label>Important political issues to you:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="political_preferences"
              value={formData.political_preferences}
            />
          </div>
          <div className="auth-textarea">
            <label>Some music you like:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="music_preferences"
              value={formData.music_preferences}
            />
          </div>
          <div className="auth-textarea">
            <label>Some of your favourite books:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="literature_preferences"
              value={formData.literature_preferences}
            />
          </div>
          <div className="auth-textarea">
            <label>Some of your favourite films:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="film_preferences"
              value={formData.film_preferences}
            />
          </div>
          <div className="auth-textarea">
            <label>Some of your favourite TV shows:</label>
            <textarea
              maxLength="300"
              rows="10"
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









export default EditProfile