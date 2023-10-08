import { Link } from "react-router-dom"
import './Navbar.css'
import logo from './logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo2 from './logo2.png'
const Navbar = () => {

    const [sidebar,setSidebar]=useState("sidebarclosed")
    function sidebaropen(){
        setSidebar("sidebarcloseopen")
    }
    function sidebarclosed(){
        setSidebar("sidebarclosed")
    }
    return (
        <>
            <div className="navabarcontainer">
                <div className="navbar">
                    <div className="logocontainer"><img src={logo2} className="logoimgof"/></div>
                    <ul>
                        <li><Link className="navlink" to={"/"}>Home</Link></li>
                        <li><Link className="navlink" to={"/visitorreviews"} >Review</Link></li>
                        <li><Link className="navlink" to={"/topserchplaces"}>Top Searches</Link></li>
                        <li><Link className="navlink" to={"/blogs"}>Blogs</Link></li>
                        <li><Link className="navlink" to={"/aboutus"}>About Us</Link></li>
                        {/* <li><Link className="navlink" to={"/login"}>Login</Link></li> */}

                    </ul>

                </div>
            </div>
            <div className="navbar-phone">
                <div className="navbar-phone-child">
                    <div><img src={logo2} className="navbarlogoimg"/></div>
                    <span><FontAwesomeIcon icon={faBars} className="navbarphoneicon" onClick={sidebaropen}/></span>
                </div>

                <div className={ `sidebarphone ${sidebar}`}>
                    <div><FontAwesomeIcon icon={faXmark} className="navbarphoneicon cross"  onClick={sidebarclosed}/></div>
                     <div className="phone-navlink">
                        <ul>
                            <li><Link className="phone-link" to='/'>Home</Link></li>
                            <li><Link className="phone-link" to={"/visitorreviews"}>Review</Link></li>
                            <li><Link className="phone-link" to={"/topserchplaces"}>Topsearches</Link></li>
                            <li><Link className="phone-link" to={"/blogs"}>Blogs</Link></li>
                            <li><Link className="phone-link" to={"/aboutus"}>About us</Link></li>
                        </ul>
                     </div>         
                </div>

            </div>

        </>
    )
}
export default Navbar;