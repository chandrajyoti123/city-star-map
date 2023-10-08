import { useState,useEffect } from 'react'
import Trendingcitydata from '../../CityData/Trendingcity.json'
import HomeCard from '../../components/HomeCard/HomeCard'
import { Params, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer";
// import CityPlace from '../CityPlace/CityPlace'
const TrendingCity=()=>{

    const {id}=useParams()

    const [samplearr,setSamplearr]=useState([])
    const [cityname,setCityname]=useState("mathura")
    useEffect(()=>{
        if(id==1){
            setSamplearr(Trendingcitydata.delhi[1])
            setCityname("delhi")
        }
        else if(id==2){
            setSamplearr(Trendingcitydata.banglore[1])
            setCityname("banglore")
        }
        else if(id==3){
            setSamplearr(Trendingcitydata.mumbai[1])
            setCityname("mumbai")
        }
        else if(id==4){
            setSamplearr(Trendingcitydata.chennai[1])
            setCityname("chennai")
            
        }
        else if(id==5){
            setSamplearr(Trendingcitydata.jaipur[1])
            setCityname("jaipur")

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

    const [storeweatherdata,setStoreweatherdata]=useState()
    

    async function weatherDatafun(){
  
       
       try{
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f652964084c552e8c0492237a3fabd9c`)
        setStoreweatherdata(response.data)
       }
       catch(err){
        console.log(err)

       }
        
       
  } 
  useEffect(()=>{
   weatherDatafun()
  },[id])


   

    return(
       <div>
        <Navbar/>
        <div className="weathersection">
                <div className="weathermaincon" ><div className="weathermain">It's {(storeweatherdata?.weather?storeweatherdata?.weather[0]?.main:'')} In {cityname} </div>
                 {/* <img src={sun} className="imgofsun"/>  */}
                 </div>
                <div className="weathertemp">{((storeweatherdata?.main?storeweatherdata?.main?.temp:'')-273).toFixed(0)}°C</div>
                <div className="weatherfeels">Feels like {((storeweatherdata?.main?storeweatherdata?.main?.feels_like:'')-273).toFixed(0)}°C </div>


            </div>
        {
            samplearr.map((citydatastore,i)=>{
                return <HomeCard img1={citydatastore.placeimg[0]} img2={citydatastore.placeimg[1]} img3={citydatastore.placeimg[2]} name={citydatastore.placename} history={citydatastore.placehistory} description={citydatastore.placedescription} i={i}/>


            })
           
            
        }
        <Footer/>
       </div>


    )
}
export default TrendingCity;