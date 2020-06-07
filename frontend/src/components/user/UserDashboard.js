import React from 'react'
import { Redirect } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getDashboard } from '../../lib/api'
import Message from './Message'


function UserDashboard() {
  const { data: user, loading, error } = useFetch(getDashboard)

  console.log(user)

  if (error) {
    return <Redirect to="/notfound" />
  }

  return (
    <>
      {loading ? <h1>loading</h1> :
        <div className="main-page">
          <h1>My profile</h1>
          <img src={user.profile_image} alt={`${user.username}'s image`} />
          <h3>{user.username}</h3>
          <div className="chats">
            {user.chat_user_one.map(chat => (
              <Message
                key={chat.id}
                {...chat}
              />
            ))}
          </div>
          <div className="info">
            <div className="info-section">
              <label>Your Bio:</label>
              <p>{user.about_bio}</p>
            </div>
            <div className="info-section">
              <label>Your Interests:</label>
              <p>{user.other_interests}</p>
            </div>
            <div className="info-section">
              <label>Your Political Views:</label>
              <p>{user.political_preferences}</p>
            </div>
            <div className="info-section">
              <label>Your Favourite Music:</label>
              <p>{user.music_preferences}</p>
            </div>
            <div className="info-section">
              <label>Your Favourite Books:</label>
              <p>{user.literature_preferences}</p>
            </div>
            <div className="info-section">
              <label>Your Favourite Films:</label>
              <p>{user.film_preferences}</p>
            </div>
            <div className="info-section">
              <label>Your Favourite TV</label>
              <p>{user.television_preferences}</p>
            </div>
          </div>
        </div>}
    </>
  )
}

export default UserDashboard