import React from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'
import { sendReply, getDashboard } from '../../lib/api'
import { toast } from '../../lib/notifications'
import useFetch from '../../utils/useFetch'
import { Redirect } from 'react-router-dom'

function Liked(props) {
  const [match] = React.useState(props.match)
  const { data: user, loading, error, refetchData } = useFetch(getDashboard)
  const [modalOpen, setModalOpen] = React.useState(true)
  const [formData, setFormData] = React.useState({
    reply: ''
  })
  const [errors, setErrors] = React.useState({})
  if (!user) return null

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
        await sendReply(e.target.value, formData)
        toast('Message sent!')
        setFormData({ reply: '' })
        refetchData()
      }
    } catch (err) {
      toast('Message could not be sent')
    }
  }

  //! Toggles modal for messages uses modalOpen state. Logic to create message chain if one doesnt exist.
  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  if (error) {
    return <Redirect to="/notfound" />
  }

  //! Concat inbox and out box to find the correct chat.
  const chats = user.inbox.concat(user.outbox)
  //! FIND A CHAT THAT MATCHES THE MATCHED USER TO INBOX/OUTBOX USER
  const findChat = () => {
    if (!props || !match) return null
    return chats.filter(chat => match.liked_user.id === chat.second_user.id || chat.owner === match.liked_user.id)
  }
  if (!match) return (
    <div className="home-page">
      <div className="background-home">
        <h1>You have no matches</h1>
        <Link>Find Love?</Link>
      </div>
    </div>)
  return (
    <>
      {loading ?
        <div className="home-page">
          < div className="background-home" >
          </div >
        </div >
        :
        <div>
          <div className="fav-user-card">
            <Link to={`profile/${match.liked_user.username}`}>
              <img className="liked-image" src={match.liked_user.profile_image} alt={match.liked_user.username} height='100' width='100' />
            </Link>
            <Link to={`profile/${match.liked_user.username}`}><p> {match.liked_user.username}</p></Link>
            <div className="profile-buttons">
              <button onClick={toggleModal} value={match.liked_user.id}>Message</button>
              <div className="chats">
              </div>
              <button value={match.liked_user.id} onClick={props.handleDelete}>Remove</button>
            </div>
          </div>
          <div className="message-board">
            {findChat().map(chat => (
              <Message
                key={chat.id}
                modalStatus={modalOpen}
                toggleModal={toggleModal}
                formData={formData}
                handleMessageChange={handleMessageChange}
                sendMessage={sendMessage}
                chat={chat}
                errors={errors}
              />))}
          </div>
        </div>}
    </>
  )
}





export default Liked