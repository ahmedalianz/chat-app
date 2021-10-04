import React from 'react'
import './input.css'

export default function Input({setMessage,sendMessage,message}) {
    return (
        <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button 
        className="sendButton" 
        onClick={e => sendMessage(e)}
        >
          <i className="fas fa-paper-plane plane"></i>
        </button>
      </form>
        )
}
