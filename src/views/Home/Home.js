import HomeCard from "../../components/HomeCard/HomeCard";
import CityData from './../../CityData/City.json'
// import manali from './../../CityData/manali.json'
// import mathura from './../../CityData/mathura.json'
import { useState,useEffect } from "react";
import './Home.css'

const Home =() => {
    const [cityname,setCityname]=useState("")
    const [storecity,setStorecity]=useState([])
    
    useEffect(()=>{
        if(cityname=="mathura"){
           setStorecity(CityData.mathura)

        }
        else if(cityname=="manali"){
            setStorecity(CityData.manali)
        }
        else if(cityname=="banglore"){
            setStorecity(CityData.banglore)
        }
        // else if(cityname=="chennai"){
        //     setStorecity(CityData.chennai)
        // }
        else{
            setStorecity(CityData.chennai)
        }

    },[cityname])
    

    return(
       <div>
      {cityname}
         <input  className="input" value={cityname} onChange={(e)=>{
            setCityname(e.target.value)
         }} />
         {
           storecity.map((citydata,i)=>{
                const {placename,placeimg,placedescription,placehistory}=citydata
                return <HomeCard name={placename} img1={placeimg[0]} img2={placeimg[1]} img3={placeimg[2]} description={placedescription} history={placehistory} />
                

            })
         }

        
       </div>

    )

}
export default Home;