import React from 'react'
import { useState } from 'react'

function Message(props) {
  const [message] = useState(props)
  return (
    <div className="modalcasing">
      {props.modalStatus ? null
        :
        <div className="modal">
          <div className="messages">
            <div className="message">
              {message.response.map(res => (
                <div className="message-card" key={res.id}>
                  <small>{res.owner.username}</small>
                  <p>{res.response}</p>
                </div>
              ))}
            </div>
            <div>
              <form className="messages-input">
                <textarea
                  name="response"
                  value={props.formData.response}
                  onChange={props.handleMessageChange}
                />
                <button onClick={props.sendMessage} value={props.id}>Submit</button>
              </form>
            </div>
          </div>
        </div>}
    </div >
  )
}

export default Message