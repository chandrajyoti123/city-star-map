import showToast from 'crunchy-toast';
import './Login.css';
import React, { useState } from 'react';

function Login(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   function Submit(){
    const data = {
        name , email , password
    }
      localStorage.setItem('userdata', JSON.stringify(data))  ;
      
      setName('');
      setEmail('');
      setPassword('');
      showToast('successfull', 'success', 3000);
   }
  
    
return(
    <>
        <div className='login-container'>
           <div className='input-container'>
            <h1 className='heading'>Login</h1>
           <h1>{name} {email} {password}</h1>
           
            <input type='text'
             value={name} 
             onChange={(e)=>{setName(e.target.value)}} 
             id='name'
             placeholder=' Enter Your Name '
              className='input-box'
               required/>

            <input type='email'
             value={email} 
             onChange={(e)=>{setEmail(e.target.value)}}
             id='email'
              placeholder=' Enter Your Email '
               className='input-box'
                required />

            <input type='password'
             value={password} 
              onChange={(e)=>{setPassword(e.target.value)}} 
              id='password'
              placeholder=' Enter Your Password ' 
              className='input-box' 
              required />

            <p className='condition-container'>Agree with all Terms and Condition</p>
            <input type="checkbox" className='checkbox' />
            <br/>


            <button
            type="button"
            className='login-btn'
            onClick={Submit}
            >
                Login
            </button>
           </div>
        </div>
    </>
)
}
export default Login


