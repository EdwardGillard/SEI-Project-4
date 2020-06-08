import React from 'react'
import { Redirect } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getDashboard, deleteFromFavs, beginChat } from '../../lib/api'
import Message from './Message'
import Liked from './Liked'


function UserDashboard() {
  const { data: user, loading, error } = useFetch(getDashboard)

  const handleDelete = async (e) => {
    console.log(e.target.value)
    const res = await deleteFromFavs(e.target.value)
    window.location.reload()

    console.log(res)
  }

  const handleMessageStart = async e => {
    e.preventDefault()
    try {
      const res = await beginChat(e.target.value)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(user)

  if (error) {
    return <Redirect to="/notfound" />
  }

  return (
    <div className="main-page">
      {loading ? <h1>loading</h1> :
        <div>
          <div className="profile-top">
            <h1>My profile</h1>
            <img className="user-dashboard" src={user.profile_image} alt={`${user.username}`} height='200' width='200' />
            <h3>{user.username}</h3>
          </div>
          <div className="favourites">
            <h1>Favourites</h1>
            {user.liked_owner.map(liked => (
              <Liked
                key={liked.id}
                {...liked}
                handleDelete={handleDelete}
                handleMessageStart={handleMessageStart}
              />
            ))}
          </div>
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
    </div>
  )
}

export default UserDashboard