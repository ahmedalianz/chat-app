import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Chat from './chat/room/chat'
import Join from './chat/join/join'
export default function App() {
    return (<div className="main-container">
    <Switch>
        <Route path='/' exact component={Join}/>
        <Route path='/chat' component={Chat}/>
    </Switch>
        </div>)
}
