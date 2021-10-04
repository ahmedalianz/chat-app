import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from './infobar/infobar'
import './chat.css'
import Input from './input/input'
import Messages from './messages/messages'
import TextContainer from './textcontainer/aside'
let socket;
const END_POINT="https://chat-app4u.herokuapp.com/"
// const END_POINT="http://localhost:8000/"
export default function Chat({location}) {
     const[name,setName]=useState('')
     const[message,setMessage]=useState('')
     const[users,setUsers]=useState('')
     const[messages,setMessages]=useState([])
    const room='Chat_Room'
    useEffect(() =>{
        const {name}=queryString.parse(location.search)
        socket=io(END_POINT)
        setName(name)
        socket.emit('join',{name,room},(error)=>{
            if(error) {
                alert(error);
              }        
        })
    },[location.search])
    useEffect(() =>{
        socket.on('message',(newMessage)=>{
            setMessages([...messages,newMessage])
        })
        socket.on('roomData',({users})=>{
            setUsers(users)
        })
    },[messages])
    const sendMessage=(e)=>{
        e.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }
    return (
        <div className="outerContainer">
            <div className='people'>
               <TextContainer users={users}/>
               </div>
           <div className="containerz">
               <InfoBar
               room={room}
               />
               <Messages
               messages={messages}
               name={name}
               />
               <Input
               message={message}
               setMessage={setMessage}
               sendMessage={sendMessage}
               />
               </div>
        </div>
    )
}
