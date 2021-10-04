import React,{useEffect,useState} from 'react'
import './aside.css'
import photo from './profile.png'
export default function TextContainer({users}) {
  const[currentusers,setCurrentUsers]=useState([])
  useEffect(() =>{
    setCurrentUsers(users)
  },[users])
    return (
        <div className="textContainer">
        {
          users
            ? (
              <div className='people-block'>
                <h4>People Online:</h4>
                <div className="activeContainer">
                  <h5>
                    {currentusers&& currentusers.map(({name}) => (
                      <div key={name} className="activeItem">
                        <img src={photo} className="img-profile" alt='profile'/>
                        {name}
                      </div>
                    ))}
                  </h5>
                </div>
              </div>
            )
            : null
        }
      </div>
    );
        
}
