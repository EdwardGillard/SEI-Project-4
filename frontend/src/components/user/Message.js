import React from 'react'
import { useState } from 'react'

function Message(props) {
  const [message] = useState(props.chat)
  return (
    <div className="modalcasing">
      {props.modalStatus ? null
        :
        <div className="modal">
          <div className="messages">
            <div className="message">
              {message.reply.map(res => (
                <div className="message-card" key={res.id}>
                  <small>{res.owner.username}</small>
                  <p>{res.reply}</p>
                </div>
              ))}
            </div>
            <div>
              <form className="messages-input">
                <textarea
                  name="reply"
                  rows="5"
                  value={props.formData.reply}
                  onChange={props.handleMessageChange}
                />
                <div className="errors-small">
                  {props.errors.reply && <small className="help is-danger">{props.errors.reply}</small>}
                </div>
                <button onClick={props.sendMessage} value={message.id}>Submit</button>
              </form>
            </div>
          </div>
        </div>}
    </div >
  )
}

export default Message