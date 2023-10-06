import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar=()=>{
    return(
       <div className="navabarcontainer">
         <div className="navbar">
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
    )
}
export default Navbar;