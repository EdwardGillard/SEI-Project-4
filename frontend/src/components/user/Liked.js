import React from 'react'
import { useState } from 'react'

function Liked(props) {
  const [liked] = useState(props)

  console.log(liked)

  if (!liked) return null

  return (
    <div className="fav-user-card">
      <img className="liked-image"src={liked.liked_user.profile_image} alt={liked.liked_user.username} height='100' width='100' />
      <p> {liked.liked_user.username}</p>
      <div className="profile-buttons">
        <button value={liked.liked_user.id} onClick={props.handleMessageStart}>Message</button>
        <button value={liked.id} onClick={props.handleDelete}>Remove</button>
      </div>


    </div>
  )





}





export default Liked