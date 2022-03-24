import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.scss'

const Navbar = () => {

    const user = useSelector(state => state.authReducer.user)

    return(
        <div id='navbar' className='card-shadow'>
            <h2>Floppa chat</h2>
            <div id='profile-menu'>
                <img src={user.avatar} alt={`${user.firstName}-avatar`} />
                <p>Welcome back, {user.firstName}</p>
            </div>
        </div>
    )
}

export default Navbar