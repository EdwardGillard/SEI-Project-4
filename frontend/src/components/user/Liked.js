import React from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'
import { beginChat } from '../../lib/api'

function Liked(props) {
  const [match] = React.useState(props.match)
  const [user] = React.useState(props.currentUser)
  const [modalOpen, setModalOpen] = React.useState(true)

  //! Toggles modal for messages uses modalOpen state. Logic to create message chain if one doesnt exist.
  const toggleModal = (e) => {
    //! check if outbox contains message chain matching current user and target user
    const outboxExists = user.outbox.some(chat => chat.owner === match.owner && chat.second_user.id === match.liked_user.id)
    //! check if inbox contains message chain matching current user and target user
    const inboxExists = user.inbox.some(chat => chat.second_user.id === match.owner && chat.owner === match.liked_user.id)
    //! if inbox and outbox dont contain criteria start a new message chain and refetch data.
    if (!inboxExists && !outboxExists) {
      beginChat({ second_user: e.target.value })
      props.refetchData()
      setModalOpen(!modalOpen)
    } else {
      setModalOpen(!modalOpen)
    }
  }

  //! Concat inbox and out box to find the correct chat.
  const chats = props.currentUser.inbox.concat(props.currentUser.outbox)
  //! FIND A CHAT THAT MATCHES THE MATCHED USER TO INBOX/OUTBOX USER
  const findChat = () => {
    if (!props || !match) return null
    return chats.filter(chat => match.liked_user.id === chat.second_user.id || chat.owner === match.liked_user.id)
  }
  if (!match) return (
    <div className="home-page">
      <div className="background-home">
      </div>
    </div>)
  return (
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
            formData={props.formData}
            handleMessageChange={props.handleMessageChange}
            sendMessage={props.sendMessage}
            chat={chat}
            errors={props.errors}
          />))}
      </div>
    </div>
  )





}





export default Liked