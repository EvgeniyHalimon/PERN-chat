import React from 'react';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import './MessageBox.scss'

const MessageBox = ({chat}) => {

    const user = useSelector(state => state.authReducer.user)

    return (
        <div id='msg-box'>
            {
                chat?.Messages.map((message, index) => {
                    return (
                        <Message
                            user={user}
                            chat={chat}
                            key={message.id}
                            index={index}
                            message={message}
                        />
                    )
                })
            }
        </div>
    )
}

export default MessageBox