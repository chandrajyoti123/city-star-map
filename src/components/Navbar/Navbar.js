import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar=()=>{
    return(
        <div className="navbar">
            <ul>
                <li><Link className="navlink" to={"/"}>home</Link></li>
                <li><Link className="navlink" to={"/visitorreviews"} >Review</Link></li>
                <li><Link className="navlink" to={"topserchplaces"}>top Searches</Link></li>
                <li><Link className="navlink" to={"/blogs"}>Blogs</Link></li>
                <li><Link className="navlink" to={"/aboutus"}>About us</Link></li>
                <li><Link className="navlink" to={"/login"}>login</Link></li>
            
            </ul>

        </div>
    )
}
export default Navbar;