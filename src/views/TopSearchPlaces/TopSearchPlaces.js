import TopSearchCard from '../../components/TopSearchCard/TopSearchCard';
import tosearchdata from './../../CityData/topplaces.json'
import React, { useState,useEffect } from "react";
import img from './section5.jpg'
import './TopSearchPlaces.css'
import TopPlaceCard from '../../components/TopPlaceCard/FamousPlaceCard';
import Navbar from '../../components/Navbar/Navbar';
import FamousPlaceCard from '../../components/TopPlaceCard/FamousPlaceCard';

const TopSearchPlaces =() => {
    const [topsearch,setTopsearch]=useState(tosearchdata.topsearch);
    const [searchterm, setSearchterm] = useState("");

    useEffect(() => {
    const filtereddata=tosearchdata.topsearch.filter((topsearchplace)=>{
        const {placename}=topsearchplace;
        const lowerplacename=placename.toLowerCase()
        return (lowerplacename.includes(searchterm))
    })
    setTopsearch(filtereddata);
},[searchterm]);

    return(
        <>
        <Navbar/>
        <p className='main-heading'>Top Tourist Places Attraction In India</p>
        < input type='text'
          placeholder= ' Search'
          value={searchterm}
          onChange={(e) => { setSearchterm
            (e.target.value) }}
        />
    
        {/* {
            topsearch.map((elementofsearch,i)=>(
             <TopSearchCard name={elementofsearch.placename} img1={elementofsearch.placeimg[0]} img2={elementofsearch.placeimg[1]} img3={elementofsearch.placeimg[2]} description={elementofsearch.placedescription} history={elementofsearch.placehistory}/>

            ))
        } */}
        <div>
            
        </div>
        <FamousPlaceCard image={img} title={"India Gate, Delhi"} description={"Located on Rajpath in the heart of Delhi, this arch monument is a 42 meter high war memorial. It is also surrounded by vast well-manicured lawns and many government buildings.hghjjjkkkmmmmmmkkjhggfghjjmkk,,,,,,,,,,,,,,,,,,ghjjkkk,,,,"}/>
        </>
    );
}
export default TopSearchPlaces;