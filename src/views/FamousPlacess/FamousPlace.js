import './FamousPlace.css'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import topsearchdata from './../../CityData/topplaces.json';
import TopSearchCard from '../../components/TopSearchCard/TopSearchCard';
import imgs1 from './tajmusium1.jpg'
import imgs2 from './tajmusium2.jpg'
import imgs3 from './tajmusium3.jpg'
import { useState ,useEffect } from 'react';
import FamousPlaceData from '../../CityData/topplaces.json'; 

export default function FamousPlacess (){
    const { id } = useParams();
   
    const [famousPlaceData, setFamousPlaceData] = useState(FamousPlaceData.topsearch);
    const [famousDataOne, setFamousDataOne] = useState({});

    useEffect(() => {
        famousPlaceData.forEach((data) => {
            if (data.id ==id) { 
                setFamousDataOne(data);
            }
             });
    }, [id]);

    return (
          <>
          <Navbar/>
          <div>        
                <div className="famousplace-main-container">
                <div className='place-name'>{famousDataOne.placename}</div>
                   
                <div className='img-group'>
                    <img src={imgs1} className='place-img' alt="Image 1" />
                    <img src={imgs2} className='place-img' alt="Image 2" />
                    <img src={imgs3} className='place-img' alt="Image 3" />
                </div>

                <div className='about-place'>Overview</div>
                <div className='place-text'>{famousDataOne.placedescription}</div>
                <h1 className='about-place'>History</h1>
                <div className='place-text'>{famousDataOne.placehistory}</div>
            </div>
             
       </div>
          </>
       
    );
};


