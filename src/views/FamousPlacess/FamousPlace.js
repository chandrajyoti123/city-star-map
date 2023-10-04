import './FamousPlace.css'
import { useParams } from 'react-router-dom';
import imgs1 from './tajmusium1.jpg'
import imgs2 from './tajmusium2.jpg'
import imgs3 from './tajmusium3.jpg'
import { useState ,useEffect } from 'react';

import FamousPlaceData from './../../CityData/topplaces.json'; // Corrected import statement (FamousPlaceData)

export default function FamousPlacess (){
    const { id } = useParams();
   
    const [famousPlaceData, setFamousPlaceData] = useState(FamousPlaceData.topsearch); // Corrected variable names
    const [famousDataOne, setFamousDataOne] = useState({});

    useEffect(() => {
        famousPlaceData.forEach((data) => {
            if (data.id ==id) { // Parse index as an integer
                setFamousDataOne(data);
            }
             });
    }, [id]);

    return (
       <div>
      
            
                <div className="topsearchcard">
                   
                <div className='img-group'>
                    <img src={imgs1} className='img' alt="Image 1" />
                    <img src={imgs2} className='img' alt="Image 2" />
                    <img src={imgs3} className='img' alt="Image 3" />
                </div>
                <div className='name'>{famousDataOne.placename}</div>
                <h1 className='heading'>Description</h1>
                <div className='description'>{famousDataOne.placedescription}</div>
                <h1 className='heading'>History</h1>
                <div className='description'>{famousDataOne.placehistory}</div>
            </div>
            

            
        
       </div>
    );
};


