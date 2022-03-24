import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './component/Navbar/Navbar';
import './Chat.scss'

const Chat = () => {

    const user = useSelector(state => state.authReducer.user)

    return (
        <div id='chat-container'>
            <Navbar/>
            <div id='chat-wrapper'>
                Data
            </div>
        </div>
    )
}

export default Chat