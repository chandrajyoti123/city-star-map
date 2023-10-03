import HomeCard from "../../components/HomeCard/HomeCard"
import CityData from './../../CityData/City.json'
import { useState ,useEffect } from "react"
const CityPlace=({})=>{
    
  
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

    return(
        <div>
        {
            storecity.map((citydata, i) => {
                const { placename, placeimg, placedescription, placehistory } = citydata
                return <HomeCard name={placename} key={i} img1={placeimg[0]} img2={placeimg[1]} img3={placeimg[2]} description={placedescription} history={placehistory} />


            })
            
            
        }
        </div>
    )
}
export default CityPlace;