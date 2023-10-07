 
import Navbar from "../../components/Navbar/Navbar";
import './AboutUs.css'
import AboutUsCard,{AboutUsCard2} from "../../components/AboutUsCard/AboutUsCard";
const AboutUs =() => {
    return(
<>
<Navbar/>
<div className="aboutuscontainer">
<AboutUsCard/>
<AboutUsCard2/>
</div>
</>
    )

}
export default AboutUs;