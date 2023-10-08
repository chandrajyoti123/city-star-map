import './FamousPlace.css'

import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import topsearchdata from './../../CityData/topplaces.json';
import TopSearchCard from '../../components/TopSearchCard/TopSearchCard'
import { useState, useEffect } from 'react';
import FamousPlaceData from '../../CityData/topplaces.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function FamousPlacess() {
    const { id } = useParams();

    const [famousPlaceData, setFamousPlaceData] = useState(FamousPlaceData.topsearch);
    const [famousDataOne, setFamousDataOne] = useState({});

    useEffect(() => {
        famousPlaceData.forEach((data) => {
            if (data.id == id) {
                setFamousDataOne(data);
            }
        });
    }, [id]);

    console.log(FamousPlaceData);
    // ------scroll----------
    const handleScroll = (event) => {
        const scroll = document.getElementById('famousplacescroll');
        scroll.scrollLeft += event.deltaY;
    }

    return (
        <>
            <Navbar />

            <div className="famousplace-main-container">
                {/* <div className='place-name'></div> */}
                <div className="headingseciotion">
           <div className="mainheading">{famousDataOne.placename}</div>
            
           </div>
                {/* <span><FontAwesomeIcon icon={faAngleLeft}/></span> */}

                <div className='imgcontainerfamouse'>
                         <div className='leftoffamousplace'>
                         <span><FontAwesomeIcon icon={faAngleLeft} className='famouspalceicon'
                          onClick={() => {
                            handleScroll({ deltaY: -500 });
    
                        }}
                         /></span>

                        </div>

                        <div className='overflow-topplaces' id='famousplacescroll'>
                            <div className='famousimggroup'>
                            {
                                  famousDataOne?.placeimg?.map((imgUrl, index) => (
                                    <img key={index} src={imgUrl} alt={`Image ${index}`} className='img-of-place'/>
                                ))
                            }
                            </div>
                        </div>
                        <div className='rightoffamousplace'>
                        <span><FontAwesomeIcon icon={faAngleRight} className='famouspalceicon'
                        onClick={() => {
                            handleScroll({ deltaY: 500 });
    
                        }} 
                        /></span>

                        </div>
                </div>

                {/* <div className='about-place'>Overview</div> */}
                <div className='descriptionhomecard'>
                {famousDataOne.placedescription}

            </div>
                {/* <div className='place-text'>{famousDataOne.placedescription}</div> */}
                {/* <h1 className='place-history'>History</h1> */}
                <div className='homecardsubheading'>
                Explore The history of  {famousDataOne.placename}
            </div>
                {/* <div className='place-text'>{famousDataOne.placehistory}</div> */}
                <div className='descriptionhomecard'>
                {famousDataOne.placehistory}
            </div>
            </div>
              

        </>

    );
};


