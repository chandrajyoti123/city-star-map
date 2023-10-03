import React, { useState, useEffect } from "react";
import './Login.css';
function Login() {
    const [fullName, setFullName] = useState('')
    const [gender, setGender] = useState('male')
    const [city, setCity] = useState([]);

    useEffect(() => {
        console.log(city);
    }, [city]);

    const handlecheck = (e) => {
        if (e.target.checked) {
            setCity([...city, e.target.value]);

        }
        else {
            const indexToBeDeleted = city.indexOf(e.target.value);
            city.splice(indexToBeDeleted, 1);
            setCity([...city]);

        }
    }
    return (
        <>
            <div className="form-div-main">
                <h2 className="heading">Are You Ready to Go...</h2>
                <h2 className="heading">Login</h2>
                <div className="form-cont">
                    <form>
                        <h3>Enter your name</h3>
                        <input type="text"
                            placeholder="Enter full name"
                            onChange={(e) => {
                                setFullName(e.target.value)
                            }} />
                        <h3>Choose your Gender</h3>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={(e) => {
                                setGender(e.target.value)

                            }}
                            checked={gender === "male"}
                        />
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setGender(e.target.value)
                                }
                            }}
                            checked={gender === "female"}
                        /> Female
                        <h3>Enter your city</h3>
                        <input
                            type="checkbox"
                            value="pune"
                            onChange={handlecheck}
                        />Pune  <br />

                        <input
                            type="checkbox"
                            value="Mumbai"
                            onChange={handlecheck}
                        />Mumbai <br />

                        <input
                            type="checkbox"
                            value="Nagpur"
                            onChange={handlecheck}
                        />Nagpur <br />

                        <input
                            type="checkbox"
                            value="Ahamednagar"
                            onChange={handlecheck}
                        />Ahamednagar <br />


                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;