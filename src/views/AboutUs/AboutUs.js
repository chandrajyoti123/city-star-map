
import Navbar from "../../components/Navbar/Navbar";

import './AboutUs.css'
import AboutUsCard, { AboutUsCard2 } from "../../components/AboutUsCard/AboutUsCard";
import aboutusdata from './../../CityData/AboutUs.json'
import { useState } from "react";

const AboutUs = () => {
    const [dataofabout, setDataofabout] = useState(aboutusdata)
    console.log(dataofabout)
    return (
        <>
            <Navbar />
            <div className="aboutuscontainer">
                {
                    dataofabout.map((dataset, i) => {
                        const { name, image, basicinfo, linkdin, github, insta, } = dataset
                        if (i % 2 == 0) {

                            return <AboutUsCard name={name} img={image} basicinfo={basicinfo} linkdin={linkdin} github={github} insta={insta} />
                        }
                        else {
                            return <AboutUsCard2 name2={name} img2={image} basicinfo2={basicinfo} linkdin2={linkdin} github2={github} insta2={insta} />
                        }
                    })
                }
            </div>
        </>
    )


}
export default AboutUs;