import React from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getDashboard, ToggleFavs, beginChat, sendReply, deleteProfile } from '../../lib/api'
import Liked from './Liked'
import { logout } from '../../lib/auth'


function UserDashboard() {
  const { data: user, loading, error, refetchData } = useFetch(getDashboard)
  const [modalOpen, setModalOpen] = React.useState(true)
  const [infoModalOpen, setInfoModalOpen] = React.useState(true)
  const [formData, setFormData] = React.useState({
    reply: ''
  })
  const history = useHistory()

  //! REMOVES FROM FAVS.
  const handleDelete = async (e) => {
    const id = e.target.value
    const res = await ToggleFavs({ liked_user: id })
    refetchData()
    console.log(res)
  }

  //! Toggles modal for messages uses modalOpen state.
  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  //! Toggles modal for Information section uses infoModalOpen. 
  const toggleInfoModal = () => {
    setInfoModalOpen(!infoModalOpen)
  }

  //! Handles changes in the Message component text input adapts formData state. 
  const handleMessageChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  //! Send a message in messenger.
  const sendMessage = async e => {
    e.preventDefault()
    try {
      const res = await sendReply(e.target.value, formData)
      setFormData({ reply: '' })
      console.log(res)
      refetchData()
    } catch (err) {
      console.log(err)
    }
  }

  //! DELETE CURRENT USER PROFILE using headers.
  const deleteUserProfile = async () => {
    try {
      await deleteProfile()
      await logout()
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleMessageStart = async e => {
    try {
      const res = await beginChat(e.target.value)
      refetchData()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  if (error) {
    return <Redirect to="/notfound" />
  }
  if (!user) return null
  //! Function to perform matches checking if users like the same people that like them.
  const matched = user.users_liked.filter(match => {
    return user.liked_by.some(likedUser => match.liked_user.id === likedUser.liked_user.id)
  })
  return (
    <>
      {loading ? <h1>loading</h1> :
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
                handleMessageStart={handleMessageStart}
                modalStatus={modalOpen}
                toggleModal={toggleModal}
                currentUser={user}
                formData={formData}
                handleMessageChange={handleMessageChange}
                sendMessage={sendMessage}
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