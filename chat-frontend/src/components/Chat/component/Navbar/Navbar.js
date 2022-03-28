import React, {Fragment, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {logout, updateProfile} from '../../../../store/actions/auth'
import './Navbar.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Modal from '../../../Modal/Modal';

const Navbar = () => {
    const user = useSelector(state => state.authReducer.user)

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    const [gender, setGender] = useState(user.gender)
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('')

    const [profileOptions, setProfileOptions] = useState(false)
    const [profileModal, setProfileModal] = useState(false)
    const dispatch = useDispatch()


    const submitForm =  async (e) => {
        e.preventDefault()
        
        const form = {firstName, lastName, email, gender, avatar}
        
        if(password.length > 0) form.password = password

        const formData = new FormData()

        for(const key in form){
            console.log(key, form[key])
            formData.append(key, form[key])   
        }

        console.log(formData)
        dispatch(updateProfile(formData)).then(() => setProfileModal(false))
    }

    return(
        <div id='navbar' className='card-shadow'>
            <h2>Floppa chat</h2>
            <div 
                id='profile-menu'
                onClick={() => setProfileOptions(!profileOptions)}
            >
                <img width={40} height={40} src={user.avatar} alt={`${user.firstName}-avatar`} />
                <p>{user.firstName}</p>
                <FontAwesomeIcon 
                    icon='caret-down'
                    className='fa-icon'
                />
                {
                    profileOptions &&
                    <div id='profile-options'>
                        <p
                            onClick={() => setProfileModal(true)}
                        >
                            Update profile</p>
                        <p
                            onClick={() => dispatch(logout())}
                        >Logout</p>
                    </div>
                }

                {
                    profileModal &&
                    <Modal
                        click={() => setProfileModal()}
                    >
                        <Fragment key='header'>
                            <h3 className='m-0'>Modal Header</h3>
                        </Fragment>

                        <Fragment key='body'>
                            <form onSubmit={submitForm}>
                                <div className='input-field m-1'>
                                    <input
                                        onChange={e => setFirstName(e.target.value)}
                                        value={firstName}
                                        required='required' 
                                        type="text" 
                                        placeholder='First name'
                                    />
                                </div>
                                <div className='input-field m-2'>
                                    <input
                                        onChange={e => setLastName(e.target.value)}
                                        value={lastName}
                                        required='required' 
                                        type="text" 
                                        placeholder='Last name'
                                    />
                                </div>
                                <div className='input-field m-2'>
                                    <select
                                        onChange={e => setGender(e.target.value)}
                                        value={gender}
                                        required='required'
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className='input-field m-1'>
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        required='required' 
                                        type="email" 
                                        placeholder='Email'
                                    />
                                </div>
                                <div className='input-field m-2'>
                                    <input 
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                        required='required'
                                        type="password" 
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='input-field m-2'>
                                    <input 
                                        onChange={e => setAvatar(e.target.value)}
                                        type="file" 
                                    />
                                </div>
                            </form>
                        </Fragment>

                        <Fragment key='footer'>
                            <button
                                className='btn-success'
                                onClick={submitForm}
                            >
                                UPDATE
                            </button>
                        </Fragment>
                    </Modal>
                }
            </div>
        </div>
    )
}

export default Navbar