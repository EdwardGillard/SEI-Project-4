import React from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import { getDashboard, deleteFromFavs, beginChat, sendReply, deleteProfile } from '../../lib/api'
import Liked from './Liked'
import { logout } from '../../lib/auth'


function UserDashboard() {
  const { data: user, loading, error, refetchData } = useFetch(getDashboard)
  const [modalOpen, setModalOpen] = React.useState(true)
  const [infoModalOpen, setInfoModalOpen] = React.useState(true)
  const [formData, setFormData] = React.useState({
    response: ''
  })
  const history = useHistory()

  const handleDelete = async (e) => {
    console.log(e.target.value)
    const res = await deleteFromFavs(e.target.value)
    refetchData()
    console.log(res)
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  const toggleInfoModal = () => {
    setInfoModalOpen(!infoModalOpen)
  }

  const handleMessageChange = e => {
    setFormData({ ...formData, response: e.target.value })
  }

  const sendMessage = async e => {
    e.preventDefault()
    try {
      const res = await sendReply(e.target.value, formData)
      setFormData({ response: '' })
      console.log(res)
      refetchData()
    } catch (err) {
      console.log(err)
    }
  }

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
            <h1>Favourites</h1>
            {user.liked_owner.map(liked => (
              <Liked
                key={liked.id}
                {...liked}
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