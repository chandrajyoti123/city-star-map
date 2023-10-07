import { useState } from 'react';
import './LoginOne.css'
import { Link, json } from 'react-router-dom';

import emailjs from '@emailjs/browser'
import Navbar from '../../components/Navbar/Navbar';
import showToast from 'crunchy-toast';

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
        setEmail("")
        setPassword('')
        
       


 }
 function emptyfield(){
    showToast('Please Fill All Field', 'alert', 1000);
    console.log("login ")

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
                        <input type='Email' id='email' name='user_email' placeholder='@gmail.com' className='input-filed'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)

                            }}
                            required
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
                            required

                        /> <label for="checkbox" >Remember me</label>

                    </div>
                    <div className='loginbutton'>
                        <Link to='/forgetpassword'><span className='forget-password'>forget password?</span></Link>
                        
                   {
                    (email && password)?<Link to='/logintwo'><button type='button' className='loginbtn' onClick={nextpage}>Next</button></Link>:<button type='button' className='loginbtn' onClick={emptyfield}>Next</button>
                   }
                   {/* <Link to='/logintwo'><button type='button' className='loginbtn' onClick={nextpage}>Next</button></Link> */}

                        

                    </div>

                </form>


           
            </div>
        </div>
        </>
        
    )
}
export default LoginOne;