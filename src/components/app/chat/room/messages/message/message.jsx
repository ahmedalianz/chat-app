import React from 'react'
import ReactEmoji from 'react-emoji';
import './message.css'
export default function Message({message:{text,user,time},name}) {
    let isSentByCurrentUser = false;
    const trimmedName=name.trim().toLowerCase();
    if(user===trimmedName){
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser
          ? (<div className="message-block">
            <div className="messageContainer justifyEnd">
              <p className="sentText pr-10">You</p>
              <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
              </div>
            </div>
            </div>
            )
            : (<div className="message-block">
              <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                <p className="sentText">{user}</p>
                  <p className="messageText colorDark pl-10">{ReactEmoji.emojify(text)}</p>
                </div>
              </div>
              </div>
            )
      );
    }
