import React from 'react';
import "./FriendList.scss"
import Friend from '../Friend/Friend';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentChat } from '../../../../store/actions/chat';

const FriendList = () => {

    const dispatch = useDispatch()
    const chats = useSelector(state => state.chatReducer.chats)

    const openChat = (chat) => {
        dispatch(setCurrentChat(chat))
    }

    return(
        <div id='friends' className='shadow-light'>
            <div id='title'>
                <h3 className='m-0'>Fren list</h3>
                <button>ADD</button>
            </div>

            <hr/>
            <div id='friends-box'>
                {
                    chats?.length > 0 
                    ? chats.map(chat => {
                        return <Friend 
                                    chat={chat}
                                    key={chat.id}
                                    click={() => openChat(chat)}
                                />
                    })
                    : <p id='no-chat'>No friends added</p>
                }
            </div>
        </div>
    )
}

export default FriendList