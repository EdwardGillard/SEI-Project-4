import React from 'react'
import { useHistory } from 'react-router-dom'
import { getDashboard, editProfile } from '../../lib/api'
import { postImage } from '../../lib/ext-api'

function EditProfile() {
  const [formData, setFormData] = React.useState(null)
  const history = useHistory()
  const [errors, setErrors] = React.useState({})
  const [image, setImage] = React.useState('')
  const uploadPreset = process.env.REACT_APP_IMAGE_PRESET

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
    setErrors({ ...errors, [e.target.name]: '' })
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  //! HANDLE THE PROFILE IMAGE UPLOAD TO CLOUDINARY
  const handleInput = async e => {
    try {
      e.preventDefault()
      const data = new FormData()
      data.append('file', e.target.files[0])
      data.append('upload_preset', uploadPreset)
      const res = await postImage(data)
      setImage(res.data.url)
    } catch (err) {
      setErrors({ profile_image: 'Unable to upload, please try a different picture.' })
    }
  }

  //! PUT REQUEST TO SEND EDITED DATA.
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = ({ ...formData, profile_image: image })
      await editProfile(data)
      history.push('/myprofile')
    } catch (err) {
      setErrors(err.response.data)
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
              className={errors.email ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.email && <small className="help is-danger">{errors.email}</small>}
          </div>
          <div className="auth-input">
            <label>First name:</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className={errors.first_name ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.first_name && <small className="help is-danger">{errors.first_name}</small>}
          </div>
          <div className="auth-input">
            <label>Profile Image:</label>
            <input
              type="file"
              name="profile_image"
              onChange={handleInput}
              className={errors.profile_image ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.profile_image && <small className="help is-danger">{errors.profile_image}</small>}
          </div>
          <div className="auth-input">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.username && <small className="help is-danger">{errors.username}</small>}
          </div>
          <div className="auth-select">
            <label>Your gender:</label>
            <select
              name="gender"
              onChange={handleChange}
              value={formData.gender}
              className={errors.gender ? 'red' : ''}>
              <option disabled value=""></option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="errors-small">
            {errors.gender && <small className="help is-danger">{errors.gender}</small>}
          </div>
          <div className="auth-select">
            <label>Youre interested in...</label>
            <select
              name="gender_preference"
              onChange={handleChange}
              className={errors.gender_preference ? 'red' : ''}
              value={formData.gender_preference}>
              <option disabled value=""></option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="B">Both</option>
            </select>
          </div>
          <div className="errors-small">
            {errors.gender_preference && <small className="help is-danger">{errors.gender_preference}</small>}
          </div>
          <div className="auth-textarea">
            <label>About you:</label>
            <textarea
              maxLength="400"
              rows="10"
              onChange={handleChange}
              name="about_bio"
              value={formData.about_bio}
              className={errors.about_bio ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.about_bio && <small className="help is-danger">{errors.about_bio}</small>}
          </div>
          <div className="auth-textarea">
            <label>Interests:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="other_interests"
              value={formData.other_interests}
              className={errors.other_interests ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.other_interests && <small className="help is-danger">{errors.other_interests}</small>}
          </div>
          <div className="auth-textarea">
            <label>Important political issues to you:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="political_preferences"
              value={formData.political_preferences}
              className={errors.political_preferences ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.political_preferences && <small className="help is-danger">{errors.political_preferences}</small>}
          </div>
          <div className="auth-textarea">
            <label>Some music you like:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="music_preferences"
              value={formData.music_preferences}
              className={errors.music_preferences ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.music_preferences && <small className="help is-danger">{errors.music_preferences}</small>}
          </div>
          <div className="auth-textarea">
            <label>Some of your favourite books:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="literature_preferences"
              value={formData.literature_preferences}
              className={errors.literature_preferences ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.literature_preferences && <small className="help is-danger">{errors.literature_preferences}</small>}
          </div>
          <div className="auth-textarea">
            <label>Some of your favourite films:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="film_preferences"
              value={formData.film_preferences}
              className={errors.film_preferences ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.film_preferences && <small className="help is-danger">{errors.film_preferences}</small>}
          </div>
          <div className="auth-textarea">
            <label>Some of your favourite TV shows:</label>
            <textarea
              maxLength="300"
              rows="10"
              onChange={handleChange}
              name="television_preferences"
              value={formData.television_preferences}
              className={errors.television_preferences ? 'red' : ''}
            />
          </div>
          <div className="errors-small">
            {errors.television_preferences && <small className="help is-danger">{errors.television_preferences}</small>}
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