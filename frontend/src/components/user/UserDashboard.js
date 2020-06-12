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
  const [errors, setErrors] = React.useState({})
  const history = useHistory()
  if (!user) return null

  //! REMOVES FROM FAVS.
  const handleDelete = async (e) => {
    try {
      const id = e.target.value
      await ToggleFavs({ liked_user: id })
      refetchData()
    } catch (err) {
      console.log(err)
    }
  }

  console.log(user)
  //! Toggles modal for messages uses modalOpen state.
  const toggleModal = (e) => {
    const matched = user.users_liked.filter(match => user.liked_by.some(likedUser => match.liked_user.id === likedUser.owner))
    const outboxExists = user.outbox.some(chat => matched.some(match => chat.owner === match.owner && chat.second_user.id === match.liked_user.id))
    const inboxExists = user.inbox.some(chat => matched.some(match => chat.second_user.id === match.owner && chat.owner === match.liked_user.id))
    if (!inboxExists && !outboxExists) {
      beginChat({ second_user: e.target.value })
      refetchData()
      setModalOpen(!modalOpen)
      console.log('chat created', e.target.value)
    } else {
      setModalOpen(!modalOpen)
    }
  }

  //! Toggles modal for Information section uses infoModalOpen. 
  const toggleInfoModal = () => {
    setInfoModalOpen(!infoModalOpen)
  }

  //! Handles changes in the Message component text input adapts formData state. 
  const handleMessageChange = e => {
    setErrors('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  //! Send a message in messenger.
  const sendMessage = async e => {
    e.preventDefault()
    try {
      if (formData.reply === '') {
        setErrors({ reply: 'Cannot send empty reply' })
      } else {
        const res = await sendReply(e.target.value, formData)
        setFormData({ reply: '' })
        console.log(res)
        refetchData()
      }
    } catch (err) {
      console.log(err.response)
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
  if (error) {
    return <Redirect to="/notfound" />
  }
  if (!user) return null
  //! Function to perform matches checking if users like the same people that like them.
  const matched = user.users_liked.filter(match => user.liked_by.some(likedUser => match.liked_user.id === likedUser.owner))
  console.log(matched)
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
                modalStatus={modalOpen}
                toggleModal={toggleModal}
                currentUser={user}
                formData={formData}
                handleMessageChange={handleMessageChange}
                sendMessage={sendMessage}
                errors={errors}
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