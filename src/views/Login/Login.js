import React, { useState, useEffect } from "react";
import './Login.css';
function Login() {
    const [fullName, setFullName] = useState('')
    const [gender, setGender] = useState('male')
    const [condition, setCondition] = useState([]);
    const [ city, setCity] =useState ('pune');


    useEffect(() => {
        console.log(condition);
    }, [condition]);

    const handlecheck = (e) => {
        if (e.target.checked) {
            setCondition([...condition, e.target.value]);

        }
        else {
            const indexToBeDeleted = condition.indexOf(e.target.value);
            condition.splice(indexToBeDeleted, 1);
            setCondition([...condition]);

        }
    }
    return (
        <>
            <div className="form-div-main">
                <h2 className="heading">Are You Ready to Go...</h2>
                <h2 className="heading">Login</h2>
                <div className="form-cont">
                    <form>
                        <div className="d-flex">
                            <div className="common-width">
                                <h3>Enter your first name:-</h3>
                                <input type="text"
                                    placeholder="Enter full name"
                                    onChange={(e) => {
                                        setFullName(e.target.value)
                                    }} className="input-box" />
                            </div>

                            <div  className="common-width">
                                <h3>Enter your first name:-</h3>
                                <input type="text"
                                    placeholder="Enter full name"
                                    onChange={(e) => {
                                        setFullName(e.target.value)
                                    }} className="input-box" />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div  className="common-width">
                                <h3>Choose your Gender</h3>

                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    onChange={(e) => {
                                        setGender(e.target.value)

                                    }}
                                    checked={gender === "male"}
                                /> Male
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
                            </div>
                            <div  className="common-width">
                                <h3 className="text-start">Choose your city</h3>
                                    <select value={city}
                                    onChange={(e) => {
                                        setCity (e.target.value)
                                    }}>
                                        <option value="Hydrabad">Hydrabad</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Nagpur">Nagpur</option>
                                        <option value="Ahmednagar">Ahamednagar</option>
                                        </select>
                            </div>
                        </div>
                        <h3 className="condition-hea">Conditions</h3>
                        <input
                            type="checkbox"
                            value="condition 1"
                            onChange={handlecheck}
                        className="condition" />Agree with all Terms and Condition <br />

                       


                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;