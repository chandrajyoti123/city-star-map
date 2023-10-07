import TopSearchCard from '../../components/TopSearchCard/TopSearchCard';
import tosearchdata from './../../CityData/topplaces.json'
import React, { useState, useEffect } from "react"; 
import './TopSearchPlaces.css'
import Navbar from '../../components/Navbar/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import{faMagnifyingGlass}  from '@fortawesome/free-solid-svg-icons';
import FamousPlaceCard from '../../components/FamousPlaceCard/FamousPlaceCard';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const TopSearchPlaces = () => {
    const [topsearch, setTopsearch] = useState(tosearchdata.topsearch);
    const [searchterm, setSearchterm] = useState("");
    const [place, setPlace] =useState(tosearchdata.topsearch)
    useEffect(() => {
        const filtereddata = tosearchdata.topsearch.filter((topsearchplace) => {
            const { placename } = topsearchplace;
            const lowerplacename = placename.toLowerCase()
            return (lowerplacename.includes(searchterm))
        })
    setPlace(filtereddata);
    }, [searchterm]);

    

    return (
        <>
            <Navbar />
         <div className='tosearch-main-container'>
            <div className='searchbox'>
            < input type='text'
            className='input'
                placeholder=' Search Place Here...'
                value={searchterm}
                onChange={(e) => {
                    setSearchterm
                        (e.target.value)
                }}
            />
            </div>
         
             <p className='main-heading'>Top 15 Tourist Places Attraction In India</p>

         </div>
         
             {/* <div className='main-title'>Best Places In India</div> */}
             <div className="headingseciotion">
           <div className="mainheading">Best Places In India</div>
            
           </div>
            <div className="topsearch-container">
               
                {
                    place.map((placecitydata,i) => {
                        // const {placename ,placeimg,  placedescription } = placecitydata;
                        return (<Link to={`/topplaces/${i}`} className='link'><FamousPlaceCard image={placecitydata.placeimg[0]}  title={placecitydata.placename} description={placecitydata.placedescription} no={i+1} /></Link>)
                    })
                }
            </div>

            <Footer/>
        </>
    );
}
export default TopSearchPlaces;