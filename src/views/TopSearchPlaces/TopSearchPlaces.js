import TopSearchCard from '../../components/TopSearchCard/TopSearchCard';
import tosearchdata from './../../CityData/topplaces.json'
import React, { useState,useEffect } from "react";
import './TopSearchPlaces.css'

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
        <h1>Top Search Places</h1>
        <input type='text'
          placeholder= ' Search'
          value={searchterm}
          onChange={(e) => { setSearchterm
            (e.target.value) }}
        />
        {
            topsearch.map((elementofsearch,i)=>(
             <TopSearchCard name={elementofsearch.placename} img1={elementofsearch.placeimg[0]} img2={elementofsearch.placeimg[1]} img3={elementofsearch.placeimg[2]} description={elementofsearch.placedescription} history={elementofsearch.placehistory}/>

            ))
        }
        </>
    );
}
export default TopSearchPlaces;