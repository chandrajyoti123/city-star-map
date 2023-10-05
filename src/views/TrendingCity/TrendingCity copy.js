// import { useState,useEffect } from 'react'
// import Trendingcitydata from '../../CityData/Trendingcity.json'
// import HomeCard from '../../components/HomeCard/HomeCard'
// import { Params, useParams } from 'react-router-dom'
// // import CityPlace from '../CityPlace/CityPlace'
// const TrendingCity=()=>{

//     const {id}=useParams()

//     const [samplearr,setSamplearr]=useState([])
//     useEffect(()=>{
//         if(id==1){
//             setSamplearr(Trendingcitydata.delhi[1])
//         }
//         else if(id==2){
//             setSamplearr(Trendingcitydata.banglore[1])
//         }
//         else if(id==3){
//             setSamplearr(Trendingcitydata.mumbai[1])
//         }
//         else if(id==4){
//             setSamplearr(Trendingcitydata.chennai[1])
            
//         }
//         else if(id==5){
//             setSamplearr(Trendingcitydata.jaipur[1])

//         }
//         else { }

//     },[])
//     // useEffect(()=>{

//     //     ((sweet)=>{
//     //         if(sweet.id==id){
//     //             setSweets(sweet)
//     //         }
//     //     })
//     // },[id])
   
   
    
//     const [ trendingcity,setTrendingcity]=useState(Trendingcitydata.banglore[1])


   

//     return(
//        <div>
//         {
//             samplearr.map((citydatastore)=>{
//                 return <HomeCard img1={citydatastore.placeimg[0]} img2={citydatastore.placeimg[1]} img3={citydatastore.placeimg[2]} name={citydatastore.placename} history={citydatastore.placehistory} description={citydatastore.placedescription}/>


//             })
           
            
//         }
//        </div>


//     )
// }
// export default TrendingCity;



import HomeCard from "../../components/HomeCard/HomeCard"
import CityData from './../../CityData/City.json'
import Navbar from "../../components/Navbar/Navbar"
import sun from './sun.png'
import './CityPlace.css'
import { useState ,useEffect } from "react"
import axios from "axios"
const TrendingCity=({})=>{
    
  
    const [getcity,setGetcity]=useState('')
    const [storecity, setStorecity] = useState([])
   

    useEffect(()=>{
        const readcity=localStorage.getItem("city")
       setGetcity(readcity)
    },[])

    useEffect(() => {
        if (getcity == "mathura") {
            setStorecity(CityData.mathura)

        }
        else if (getcity == "manali") {
            setStorecity(CityData.manali)
        }
        else if (getcity == "banglore") {
            setStorecity(CityData.banglore)
        }
        else if (getcity == "chennai") {
            setStorecity(CityData.chennai)
        }
        else if (getcity == "jaipur") {
            setStorecity(CityData.jaipur)
        }
        else if (getcity == "amritsar") {
            setStorecity(CityData.amritsar)
        }
        else if (getcity == "southgoa") {
            setStorecity(CityData.southgoa)
        }
        else if (getcity == "pune") {
            setStorecity(CityData.pune)
        }
        else if (getcity == "delhi") {
            setStorecity(CityData.delhi)
        }
        else if (getcity == "mumbai") {
            setStorecity(CityData.mumbai)
        }
        else if (getcity == "nagpur") {
            setStorecity(CityData.nagpur)
        }
        else if (getcity == "agra") {
            setStorecity(CityData.agra)
        }
        else if (getcity == "kolkata") {
            setStorecity(CityData.Kolkata)
        }
        else if (getcity == "ahamednagar") {
            setStorecity(CityData.Ahamednagar)
        }
        else if (getcity == "hydrabad") {
            setStorecity(CityData.Hydrabad)
        }
        else {

        }

    }, [getcity])

    // --------------weather app----------------
    const [storeweatherdata,setStoreweatherdata]=useState()
    

    async function weatherDatafun(){
  
       
       try{
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${getcity}&appid=f652964084c552e8c0492237a3fabd9c`)
        setStoreweatherdata(response.data)
       }
       catch(err){
        console.log(err)

       }
        
       
  } 
  useEffect(()=>{
   weatherDatafun()
  },[getcity])
//   console.log(weatherdata)

  


    return(
        <div>
            <Navbar/>

            <div className="weathersection">
                <div className="weathermaincon" ><div className="weathermain">It's {(storeweatherdata?.weather?storeweatherdata?.weather[0]?.main:'')} In {getcity} </div>
                 {/* <img src={sun} className="imgofsun"/>  */}
                 </div>
                <div className="weathertemp">{((storeweatherdata?.main?storeweatherdata?.main?.temp:'')-273).toFixed(0)}°C</div>
                <div className="weatherfeels">Feels like {((storeweatherdata?.main?storeweatherdata?.main?.feels_like:'')-273).toFixed(0)}°C </div>
           {/* <h1> temperatur:{((storeweatherdata?.main?storeweatherdata?.main?.temp:'')-273).toFixed(0)}°C</h1>
           <h1>feels like:{((storeweatherdata?.main?storeweatherdata?.main?.feels_like:'')-273).toFixed(0)}°C</h1>
           <h1>main:{(storeweatherdata?.weather?storeweatherdata?.weather[0]?.main:'')}</h1> */}

            </div>
        {
            storecity.map((citydata, i) => {
                const { placename, placeimg, placedescription, placehistory } = citydata
                return <HomeCard name={placename} key={i} img1={placeimg[0]} img2={placeimg[1]} img3={placeimg[2]} description={placedescription} history={placehistory} />


            })
            
            
        }
        </div>
    )
}
export default TrendingCity;

