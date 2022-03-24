import React , {useState} from 'react';
import './Auth.scss';
import loginImage from '../../assets/images/login.svg';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'
import AuthService from '../../services/authServices'
import {useDispatch} from 'react-redux'
import {login} from '../../store/actions/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitForm =  async (e) => {
        e.preventDefault()
        try {
            dispatch(login({email, password}))
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={loginImage} alt="login-page" />
                    </div>
                    <div id='form-section'>
                        <h2>Welcome back, again</h2>
                        <form onSubmit={submitForm}>
                            <div className='input-field m-1'>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    type="email" 
                                    placeholder='Email'
                                    value={email}
                                    required='required'
                                />
                            </div>
                            <div className='input-field m-2'>
                                <input 
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    required='required'
                                />
                            </div>
                            <button>LOGIN</button>
                        </form>
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login