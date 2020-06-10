import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getAUser } from '../../lib/api'


function ShowUser() {
  const params = useParams()
  const { data: user, loading, error } = useFetch(getAUser, params.username)
  console.log(params.username)


  if (error) {
    return <Redirect to="/notfound" />
  }

  return (
    <div className="main-page">
      {loading ? <h1>loading</h1> :
        <div className="main-page">
          <h1>{user.username}</h1>
          <div className="profile-top">
            <img className="user-dashboard" src={user.profile_image} alt={`${user.username}`} height='200' width='200' />
          </div>
          <div className="info">
            <div className="info-section">
              <label>Bio:</label>
              <p>{user.about_bio}</p>
            </div>
            <div className="info-section">
              <label>Interests:</label>
              <p>{user.other_interests}</p>
            </div>
            <div className="info-section">
              <label>Political views:</label>
              <p>{user.political_preferences}</p>
            </div>
            <div className="info-section">
              <label>Favourite music:</label>
              <p>{user.music_preferences}</p>
            </div>
            <div className="info-section">
              <label>Favourite books:</label>
              <p>{user.literature_preferences}</p>
            </div>
            <div className="info-section">
              <label>Favourite films:</label>
              <p>{user.film_preferences}</p>
            </div>
            <div className="info-section">
              <label>Favourite TV:</label>
              <p>{user.television_preferences}</p>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default ShowUser