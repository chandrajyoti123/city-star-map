import { useDebugValue, useEffect, useState } from "react"
import './LoginTwo.css'
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import { faUnsorted } from "@fortawesome/free-solid-svg-icons"
import showToast from 'crunchy-toast';
import Footer from "../../components/Footer/Footer"

const LoginTwo = () => {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [gender,setGender]=useState("")
    console.log(gender)
    const [city, setCity] = useState("")
  
    console.log(city)

    function savetolocalstorageagain(obj){
       
        const emailpass=JSON.stringify(obj)
        localStorage.setItem("nameinfo",emailpass)
  
      }
  
  
    
      function logineduser(){

      
          const obj1={
              firstname:firstname,
            lastname:lastname,
            gender:gender,
            city:city

          }
          savetolocalstorageagain(obj1)
          setFirstname("")
          setLastname("")
          setCity("")
          setGender("")

  
  
      }
      

      function pleasefilled(){
        showToast('Please Fill All The Field', 'alert', 1000);

      }
    //   -------------rerender in forget page----------
const [dataoflogin,setDataoflogin]=useState()
useEffect(()=>{
    const objectofloginone=JSON.parse(localStorage.getItem("emailpas"))
   setDataoflogin (objectofloginone.check?objectofloginone.check:"") 
},[])
  
  

    return (


        <>
<Navbar/>
        <div className="logincontainer">
            <div className="loginform">
                <div className='loginheading'>Welcome</div>
                <form className='input-field-container'>

                    <div className="name-field-container">
                        <label className='labeloflogin'>Enter Your Name</label>
                        <div className="name-feild-child-con">
                            <input type="text" placeholder="First Name" className="  name-feild name-margin" value={firstname}
                                onChange={(e) => {
                                    setFirstname(e.target.value)

                                }}
                            />
                            <input type="text" placeholder="Last Name" className="  name-feild name-margin" value={lastname}
                                onChange={(e) => {
                                    setLastname(e.target.value)
                                }}
                            />
                        </div>

                    </div>

                    <div className="name-field-container">
                        <label className='labeloflogin'>Select Your Gender</label>
                        <div className="name-feild-child-con radio-container">
                            <div className="radio-field"><input type="radio" value={"male"}  id="male" className="radio"
                            onChange={(e)=>{
                                setGender(e.target.value)
                               }}  checked={gender=="male"}
                            />  <label className="radio-label" for="male">Male</label></div>
                            <div className="radio-field"><input type="radio" value={"female"} id="female" className="radio"
                            onChange={(e)=>{
                                setGender(e.target.value)
                               }}  checked={gender=="female"}
                            /><label className="radio-label" for="female">Female</label></div>
                            <div className="radio-field"><input type="radio" value={"other"} id="other" className="radio" 
                            onChange={(e)=>{
                                setGender(e.target.value)
                               }}  checked={gender=="other"}
                            /><label className="radio-label" for="other">other</label></div>
                        </div>

                    </div>
                    <div className="name-field-container">
                        <label className='labeloflogin'>Select Your City </label>
                        <div className="name-feild-child-con ">
                            <select className="select-container" value={city} onChange={(e) => {
                                setCity(e.target.value)
                            }}>
                                
                                <option  className="select-field"  value={'mumbai'}>Mumbai</option>
                                <option  className="select-field" value={'pune'}>Pune</option>
                                <option  className="select-field" value={'nagpur'}>Nagpur</option>
                                <option  className="select-field" value={'jaipur'}>Jaipur</option>
                                <option  className="select-field" value={'kolkata'}>Kolkata</option>
                                <option  className="select-field" value={'mathura'}>Mathura</option>
                            </select>
                        </div>

                    </div>







                     <div className=' loginbutton-next'>
                        
                    {
                        dataoflogin?<Link to='/login'> <button type='button' className='loginbtn margin-right'>previous</button></Link>:<Link to='/forgetpassword'> <button type='button' className='loginbtn margin-right'>previous</button></Link>
                    }
                       
                       {/* <Link to='/login'> <button type='button' className='loginbtn margin-right'>previous</button></Link> */}
                      
                         

                         {
                            (firstname && lastname && gender && city)?<Link to='/loginthree'><button type='button' className='loginbtn ' onClick={logineduser}>Login</button></Link>:<button type='button' className='loginbtn ' onClick={pleasefilled}>Login</button>
                         }

                    </div> 

                </form>



            </div>
        </div>
        <Footer/>
        </>

    )
}
export default LoginTwo;