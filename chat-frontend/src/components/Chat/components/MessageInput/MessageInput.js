import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';
import './MessageInput.scss';

const MessageInput = ({chat}) => {

    const user = useSelector(state => state.authReducer.user)

    const [message, setMessage] = useState('')
    const [image, setImage] = useState('')

    const handleMessage = (e) => {
        const msg = e.target.value
        setMessage(msg)
    }

    const handleKeyDown = (e, imageUpload) => {
        if(e.key === 'Enter') return sendMessage(imageUpload)
    }

    const sendMessage = (imageUpload) => {
        if(message.length < 1 && !imageUpload) return
        const msg = {
            type: imageUpload ? 'image' : 'text',
            fromUserId: user.id,
            toUserId: chat.Users.map(user => user.id),
            chatId: chat.id,
            message: imageUpload ? image : message
        }

        setImage('')
        setMessage('')
    }

    return (
        <div id='input-container'>
            <div id='message-input'>
                <input 
                    type="text"
                    placeholder='type a message'
                    onChange={e => handleMessage(e)}
                    onKeyDown={e => handleKeyDown(e, false)}
                />
                <FontAwesomeIcon
                    icon={['far', 'smile']}
                    className='fa-icon'
                />
            </div>
        </div>
    )
}

export default MessageInput