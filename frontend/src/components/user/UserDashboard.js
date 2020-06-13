import React from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getDashboard, ToggleFavs, deleteProfile, beginChat } from '../../lib/api'
import Liked from './Liked'
import { logout } from '../../lib/auth'
import { toast } from '../../lib/notifications'


function UserDashboard() {
  const { data: user, loading, error, refetchData } = useFetch(getDashboard)
  const [infoModalOpen, setInfoModalOpen] = React.useState(true)
  const history = useHistory()
  if (!user) return null

  //! REMOVES FROM FAVS.
  const handleDelete = async (e) => {
    try {
      const id = e.target.value
      await ToggleFavs({ liked_user: id })
      toast('User Removed')
      refetchData()
    } catch (err) {
      toast('Could not remove user')
    }
  }

  //! Toggles modal for Information section uses infoModalOpen. 
  const toggleInfoModal = () => {
    setInfoModalOpen(!infoModalOpen)
  }

  //! DELETE CURRENT USER PROFILE using headers.
  const deleteUserProfile = async () => {
    try {
      await deleteProfile()
      await logout()
      history.push('/')
    } catch (err) {
      toast('something went wrong')
    }
  }
  if (error) {
    return <Redirect to="/notfound" />
  }
  if (!user) return null
  //! Perform matches checking if users like the same people that like them.
  const matched = user.users_liked.filter(match => user.liked_by.some(likedUser => match.liked_user.id === likedUser.owner))
  const createChat = async () => {
    try {
      matched.forEach(match => {
        //! check if outbox contains message chain matching current user and target user
        const outboxExists = user.outbox.some(chat => chat.owner === match.owner && chat.second_user.id === match.liked_user.id)
        //! check if inbox contains message chain matching current user and target user
        const inboxExists = user.inbox.some(chat => chat.second_user.id === match.owner && chat.owner === match.liked_user.id)
        //! If chat doesnt exist in inbox or out box create a new one and refresh page.
        if (!inboxExists && !outboxExists) {
          beginChat({ second_user: match.liked_user.id })
          refetchData()
        }
      })
    } catch (err) {
      console.log(err)
    }
  }
  createChat()

  return (
    <>
      {loading ?
        <div className="home-page">
          <div className="background-home">
          </div>
        </div>
        :
        <div className="main-page">
          <h1>My profile</h1>
          <div className="profile-top">
            <img className="user-dashboard" src={user.profile_image} alt={`${user.username}`} height='200' width='200' />
          </div>
          <div className="buttons">
            <Link to="/myprofile/edit"><button>Edit Profile</button></Link>
            <button onClick={deleteUserProfile}>Delete Profile</button>
          </div>
          <div className="favourites">
            <h1>Matches</h1>
            {matched.map(match => (
              <Liked
                key={match.id}
                match={match}
                handleDelete={handleDelete}
                refetchData={refetchData}
              />
            ))}
          </div>
          <div className="info" onClick={toggleInfoModal}>
            <h1>Your info</h1>
            <small>(Click to expand)</small>
            {infoModalOpen ? null
              :
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
              </div>}
          </div>
        </div>}
    </>
  )
}

export default UserDashboard