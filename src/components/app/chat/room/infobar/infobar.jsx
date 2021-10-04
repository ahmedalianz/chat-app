import React from 'react'
import './infobar.css'
export default function InfoBar({room}) {
    return (
        <div className="infoBar">
        <div className="leftInnerContainer">
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/">X</a>
        </div>
      </div>
        )
}
