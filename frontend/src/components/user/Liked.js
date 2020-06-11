import React from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'

function Liked(props) {
  const [match] = React.useState(props.match)

  //! FIND A CHAT THAT MATCHES THE MATCHED USER TO INBOX/OUTBOX USER
  const findChat = () => {
    if (!props || !match) return null
    const chats = props.currentUser.inbox.concat(props.currentUser.outbox)
    return chats.filter(chat => match.liked_user.id === chat.second_user.id)
  }

  console.log(findChat())


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
          <button onClick={props.toggleModal} value={match.liked_user.id}>Message</button>
          <div className="chats">
          </div>
          <button value={match.liked_user.id} onClick={props.handleDelete}>Remove</button>
        </div>
      </div>
      <div className="message-board">
        <Message
          modalStatus={props.modalStatus}
          toggleModal={props.toggleModal}
          formData={props.formData}
          handleMessageChange={props.handleMessageChange}
          sendMessage={props.sendMessage}
          {...findChat()[0]}
          errors={props.errors}
        />
      </div>
    </div>
  )





}





export default Liked