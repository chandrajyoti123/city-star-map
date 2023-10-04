// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// import Famouseplacedata from './../../CityData/topplaces.json'

// const FamousPlace=()=>{
//     const {index}=useParams()
//     const [famouseplacedata,setFamouseplacedata]=useState(Famouseplacedata.topsearch)
//     const [famousdataone,setFamousdataone]=useState({})
//  useEffect(()=>[
//     famouseplacedata.forEach((data)=>{
//         if(data.id==parseInt(index)){
//            setFamousdataone(data)
//         }
    
    
//        })
       
//  ],[index])
 

 
 
 

 
 

    
//     return(
    
       
        
            
//                 <div className="topsearchcard">
//             <div className=' img-group'>
//                 <img src={famousdataone.placeimg[0]} className='img'/>
//                 <img src={famousdataone.placeimg[1]} className='img'/>
//                 <img src={famousdataone.placeimg[2]} className='img'/>
//             </div>
//             <div className='name'>{famousdataone.placename}</div>
//             <h1 className='heading'>description</h1>
//             <div className='description'>{famousdataone.placedescription}</div>
//             <h1 className='heading'>history</h1>
//             <div className='description'>{famousdataone.placehistory}</div>

//         </div>

        
    
//     )
// }
// export default FamousPlace;





import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import FamousPlaceData from './../../CityData/topplaces.json'; // Corrected import statement (FamousPlaceData)

const FamousPlace = () => {
    // const { index } = useParams();
    // console.log(index)
    const [famousPlaceData, setFamousPlaceData] = useState(FamousPlaceData.topsearch); // Corrected variable names
    // const [famousDataOne, setFamousDataOne] = useState({});

    // useEffect(() => {
    //     famousPlaceData.forEach((data) => {
    //         if (data.id == parseInt(index)) { // Parse index as an integer
    //             setFamousDataOne(data);
    //         }
    //          });
    // }, [index]);

    return (
       <div>
        {
            famousPlaceData.map((famousDataOne)=>{
                <div className="topsearchcard">
                <div className='img-group'>
                    <img src={famousDataOne.placeimg[0]} className='img' alt="Image 1" />
                    <img src={famousDataOne.placeimg[1]} className='img' alt="Image 2" />
                    <img src={famousDataOne.placeimg[2]} className='img' alt="Image 3" />
                </div>
                <div className='name'>{famousDataOne.placename}</div>
                <h1 className='heading'>Description</h1>
                <div className='description'>{famousDataOne.placedescription}</div>
                <h1 className='heading'>History</h1>
                <div className='description'>{famousDataOne.placehistory}</div>
            </div>
            

            })
        }
       </div>
    );
};

export default FamousPlace;
