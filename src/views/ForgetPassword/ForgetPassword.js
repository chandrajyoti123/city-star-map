import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './ForgetPassword.css'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import showToast from 'crunchy-toast';
export default function ForgetPassword() {
    const [passwordone, setPasswordone] = useState("")
    const [passwordtwo, setPasswordtow] = useState("")
    const [eight,setEight]=useState()
   useEffect(()=>{
    setEight(passwordone?passwordone.length:"")
    console.log(eight);
   },[passwordone])
    

    const [email,setEmail]=useState("")

    function settolocalstorage(obj){
        const passworddata=JSON.stringify(obj)
        localStorage.setItem("emailpas",passworddata)
 }


    function setfiledempty(){
        const obj={
            password:passwordone,
            passwordtwo:passwordtwo,
            email:email
        }
        settolocalstorage(obj)

    
    setPasswordone("")
    setPasswordtow("")
    setEmail("")
}
function pleasefilled(){
    
    showToast('Please Fill All Field', 'alert', 1000);

}

function setsamepassword(){
    showToast('Passwords should same in both the field', 'alert', 1000);

}
function eightfield(){
    showToast('password atlest 8 character', 'alert', 1000);

}


    return (
        <>
            <Navbar />
            <div className="logincontainer">
                <div className="loginform">
                    <div className='loginheading'>Welcome</div>
                    <form className='input-field-container' >\
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
                            <label for='password1' className='labeloflogin'>Create A Password</label>
                            <input type='password'
                                id='password1' placeholder='atleast 8 character'
                                className='input-filed'
                                value={passwordone}
                                onChange={(e) => {
                                    setPasswordone(e.target.value)

                                }}
                            />

                        </div>
                        <div className='input-con'>
                            <label for='password2' className='labeloflogin'>Confirm Your Password</label>
                            <input type='password'
                                id='password2'
                                placeholder='Confirme'
                                name='user_password'
                                className='input-filed'
                                value={passwordtwo}
                                onChange={(e)=>{
                                    setPasswordtow(e.target.value)

                                }}
                                
                                />
                                

                        </div>

                        <div className='loginbutton loginbutton-next margin-top'>
                            {/* <Link to='/logintwo'><button type='button' className='loginbtn' >Next</button></Link> */}
                        {
                            (passwordone&& passwordtwo && email)?(passwordone!=passwordtwo)?<button type='button' className='loginbtn' onClick={setsamepassword} >Next</button>:(eight<8)? <button type='button' className='loginbtn' onClick={eightfield} >Next</button>:<Link to='/logintwo'><button type='button'   onClick={setfiledempty} className='loginbtn' >Next</button></Link> :<button type='button' className='loginbtn' onClick={pleasefilled} >Next</button>
                        }

                        </div>

                    </form>



                </div>
            </div>
        </>
    )
}
