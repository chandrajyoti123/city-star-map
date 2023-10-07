import { useState } from 'react';
import './LoginOne.css'
import { Link, json } from 'react-router-dom';

import emailjs from '@emailjs/browser'
import Navbar from '../../components/Navbar/Navbar';
const LoginOne = () => {
  
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [checkbox, setCheckbox] = useState(false)
    console.log(checkbox)


    function savetolocalstorage(obj){
       
      const emailpass=JSON.stringify(obj)
      localStorage.setItem("emailpas",emailpass)

    }


  
    function nextpage(){
        const obj={
            email:email,
            password:password,
            check:checkbox
        }
        savetolocalstorage(obj)
        
       


 }


    return (
        <>
       <Navbar/>
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
                      
                    </div>
                    <div className='input-con'>
                        <label form='password' className='labeloflogin'>Password</label>
                        <input type='password' id='password' placeholder='atleast 8 character' name='user_password' className='input-filed'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)

                            }}
                        />
                       
                    </div>
                    <div className='checkboxcon'>
                        <input type='checkbox' id='checkbox' checked={checkbox} onChange={(e) => {
                            setCheckbox(e.target.checked)
                        }}
                            className='checkboxinput'

                        /> <label for="checkbox" >Remember me</label>

                    </div>
                    <div className='loginbutton'>
                        <Link to='/forgetpassword'><span className='forget-password'>forget password?</span></Link>
                        
                        <Link to='/logintwo'><button type='button' className='loginbtn' onClick={nextpage}>Next</button></Link>

                    </div>

                </form>


           
            </div>
        </div>
        </>
        
    )
}
export default LoginOne;