import React from 'react'
import { Link } from 'react-router-dom'
import Message from './Message'

function Liked(props) {
  const [liked] = React.useState(props.liked_user)

  const findChat = () => {
    if (!props || !liked) return null
    return props.currentUser.chat_user_one.filter(chat => liked.id === chat.second_user.id)
  }


  if (!liked) return null
  return (
    <div>
      <div className="fav-user-card">
        <Link to={`profile/${liked.username}`}>
          <img className="liked-image" src={liked.profile_image} alt={liked.username} height='100' width='100' />
        </Link>
        <Link to={`profile/${liked.username}`}><p> {liked.username}</p></Link>
        <div className="profile-buttons">
          <button onClick={props.handleMessageStart && props.toggleModal} value={liked.id}>Message</button>
          <div className="chats">
          </div>
          <button value={props.id} onClick={props.handleDelete}>Remove</button>
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
        />
      </div>
    </div>

  )





}





export default Liked