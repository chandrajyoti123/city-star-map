import { useState,useEffect } from 'react'
import Trendingcitydata from '../../CityData/Trendingcity.json'
import HomeCard from '../../components/HomeCard/HomeCard'
import { Params, useParams } from 'react-router-dom'
// import CityPlace from '../CityPlace/CityPlace'
const TrendingCity=()=>{

    const {id}=useParams()

    const [samplearr,setSamplearr]=useState([])
    useEffect(()=>{
        if(id==1){
            setSamplearr(Trendingcitydata.delhi[1])
        }
        else if(id==2){
            setSamplearr(Trendingcitydata.banglore[1])
        }
        else if(id==3){
            setSamplearr(Trendingcitydata.mumbai[1])
        }
        else if(id==4){
            setSamplearr(Trendingcitydata.chennai[1])
            
        }
        else if(id==5){
            setSamplearr(Trendingcitydata.jaipur[1])

        }
        else { }

    },[])
    // useEffect(()=>{

    //     ((sweet)=>{
    //         if(sweet.id==id){
    //             setSweets(sweet)
    //         }
    //     })
    // },[id])
   
   
    
    const [ trendingcity,setTrendingcity]=useState(Trendingcitydata.banglore[1])


   

    return(
       <div>
        {
            samplearr.map((citydatastore)=>{
                return <HomeCard img1={citydatastore.placeimg[0]} img2={citydatastore.placeimg[1]} img3={citydatastore.placeimg[2]} name={citydatastore.placename} history={citydatastore.placehistory} description={citydatastore.placedescription}/>


            })
           
            
        }
       </div>


    )
}
export default TrendingCity;