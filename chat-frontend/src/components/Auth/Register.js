import React, {useState} from 'react';
import './Auth.scss';
import registerImage from '../../assets/images/register.svg';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {register} from '../../store/actions/auth';

const Register = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('male')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitForm =  async (e) => {
        e.preventDefault()
        try {
            dispatch(register({firstName, lastName, email, gender,password}))
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
                        <img src={registerImage} alt="login-page" />
                    </div>
                    <div id='form-section'>
                        <h2>Creata an account</h2>
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
                            <button>REGISTER</button>
                        </form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register 