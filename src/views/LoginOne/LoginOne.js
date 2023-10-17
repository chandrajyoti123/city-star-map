import { useEffect, useState } from 'react';
import './LoginOne.css'
import { Link, json } from 'react-router-dom';


import Navbar from '../../components/Navbar/Navbar';
import showToast from 'crunchy-toast';
import Footer from '../../components/Footer/Footer';

const LoginOne = () => {
  
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [eight,setEight]=useState('')
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    
   
//    
//    console.log(eight)
    const [checkbox, setCheckbox] = useState(false)
    console.log(checkbox)


    function savetolocalstorage(obj){
       
      const emailpass=JSON.stringify(obj)
      localStorage.setItem("emailpas",emailpass)

    }
    useEffect(()=>{
        setEight(password?password.length:"")
      
    },[password])


  
    function nextpage(){

        
        
        const obj={
            email:email,
            password:password,
            check:checkbox
        }
        savetolocalstorage(obj)
     
        
       


 }

//  useEffect(()=>{
//     // setEmail("")
//     // setPassword("")

//  },[])
 
 function emptyfield(){
    
    
    showToast('Please Fill All Field', 'alert', 1000);
    console.log("login ")

}
function eightdigit(){
    showToast('password should be 8 digit', 'alert', 1000);

}

function enterValidEmail() {
    showToast('please enter valid email', 'alert', 1000);
    
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
                        {/* <Link to='/logintwo' > */}
                        <input type='Email' id='email' name='user_email' placeholder='@gmail.com' className='input-filed'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)

                            }}
                            required
                        />
                          {/* </Link> */}
                      
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

                        /> 
                     
                       <label for="checkbox" >Remember me</label>

                    </div>
                    <div className='loginbutton'>
                        <Link to='/forgetpassword'><span className='forget-password'>forget password?</span></Link>
                        
                   

                   {
                    (email && password && checkbox)?(regEx.test(email))?eight>=8?<Link to='/logintwo'><button type='button' className='loginbtn' onClick={nextpage}>Next</button></Link>:<button type='button' className='loginbtn' onClick={eightdigit}>Next</button>:<button type='button' className='loginbtn' onClick={enterValidEmail}>Next</button>:<button type='button' className='loginbtn' onClick={emptyfield}>Next</button>
                   }
               

                        

                    </div>

                </form>


           
            </div>
        </div>
        <Footer/>
        </>
        
    )
}
export default LoginOne;