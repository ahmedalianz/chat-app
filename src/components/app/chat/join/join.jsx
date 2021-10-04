import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './join.css'
export default function Join() {
    const [name,setName]=useState('')
    return (
        <div className="join-block">
            <div className="form-signin bg-light">
            <form>
            <h4 className="h3 mb-3 fw-normal">Login</h4>
            <div className="form-floating">
                <input value={name} 
                onChange={(e)=>setName(e.target.value)} 
                type="text" name="name" 
                placeholder="Name . . ."
                className="form-control"/>
            <label htmlFor="name"><i className="fas fa-user user"></i>UserName</label>
            </div>
                <Link onClick={(e)=>name===''?e.preventDefault():null} to={`/chat?name=${name}`}>
                <button type="submit">Join</button>
                </Link>
            </form>
            </div>
        </div>
    )
}
