import ChatServices from "../../services/chatServices";
import { FETCH_CHATS, SET_CURRENT_CHAT } from "../action-types";

export const fetchChats = () => dispatch =>{
    return ChatServices.fetchChats()
        .then(data => {
            console.log(data)
            data.forEach(chat => {
                chat.Users.forEach(user => {
                    user.status = 'offline'
                })
                chat.Messages.reverse()
            })

            dispatch({type: FETCH_CHATS, payload: data})
            return data
        })
        .catch(err => {
            throw err
        })
}

export const setCurrentChat = (chat) => dispatch => {
    dispatch({type: SET_CURRENT_CHAT, payload: chat})
}