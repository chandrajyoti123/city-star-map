import { useState } from 'react';
import './LoginOne.css'
import { Link } from 'react-router-dom';

import emailjs from '@emailjs/browser'
const LoginOne = () => {
  
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [checkbox, setCheckbox] = useState(false)
    console.log(checkbox)

  


    return (
        <div className="logincontainer">
            <div className="loginform">
                <div className='loginheading'>Welcome</div>
                <form className='input-field-container' >
                   
                    <div className='input-con'>
                        <label form='email' className='labeloflogin'>E-mail</label>
                        <input type='email' id='email' name='user_email' placeholder='@gmail.com' className='input-filed'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)

                            }}
                        />
                        {email}
                    </div>
                    <div className='input-con'>
                        <label form='password' className='labeloflogin'>Password</label>
                        <input type='password' id='password' placeholder='atleast 8 character' name='user_password' className='input-filed'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)

                            }}
                        />
                        {password}
                    </div>
                    <div className='checkboxcon'>
                        <input type='checkbox' id='checkbox' checked={checkbox} onChange={(e) => {
                            setCheckbox(e.target.checked)
                        }}
                            className='checkboxinput'

                        /> <label for="checkbox" >Remember me</label>

                    </div>
                    <div className='loginbutton'>
                        <span className='forget-password'>forget password?</span>
                        <Link to='/logintwo'><button type='button' className='loginbtn'>Next</button></Link>

                    </div>

                </form>


           
            </div>
        </div>
    )
}
export default LoginOne;