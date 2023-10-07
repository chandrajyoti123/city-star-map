import { useDebugValue, useState } from "react"

const LoginTwo=()=>{
    const [firstname,setFirstname]=useState()
    const [lastname,setLastname]=useState()
    return(
    
       <div className="logincontainer">
            <div className="loginform">
                <div className='loginheading'>Welcome</div>
                <form className='input-field-container'>
                    <div className='input-con'>
                        <label form='name' className='labeloflogin'>name:</label>
                        <input type='text' id='name' name='user_name' placeholder='first name' className='input-filed'
                            value={firstname}
                            onChange={(e) => {
                                setFirstname(e.target.value)

                            }}
                        />
                    
                    </div>
                    <div className='input-con'>
                        <label for='lastname' className='labeloflogin'>last name</label>
                        <input type='text' id='lastname'  placeholder='last name' className='input-filed'
                            value={lastname}
                            onChange={(e) => {
                               setLastname(e.target.value)

                            }}
                        />
                    
                    </div>
                  
                   
                    <div className='loginbutton'>
                        <span className='forget-password'>forget password?</span>
                        <button type='button' className='loginbtn'>Next</button>

                    </div>

                </form>



            </div>
        </div>
    
    )
}
export default LoginTwo;