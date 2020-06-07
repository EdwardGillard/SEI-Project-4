import React from 'react'
import { useState } from 'react'

function Message(props) {
  const [message] = useState(props)

  console.log(message)
  return (
    <div>
      <div>
        <img src={message.second_user.profile_image} alt={message.second_user.username} height='100' width='100' />
        <p>{message.second_user.username}</p>
      </div>
      <div>
        {message.response.map(res => (
          <div key={res.id}>
            <p>{res.owner.username}</p>
            <p>{res.response}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Message