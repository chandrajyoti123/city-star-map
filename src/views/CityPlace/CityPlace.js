import HomeCard from "../../components/HomeCard/HomeCard"
import CityData from './../../CityData/City.json'
import { useState ,useEffect } from "react"
const CityPlace=({cityname})=>{
    console.log(cityname)
  
    const [storecity, setStorecity] = useState([])

    useEffect(() => {
        if (cityname == "mathura") {
            setStorecity(CityData.mathura)

        }
        else if (cityname == "manali") {
            setStorecity(CityData.manali)
        }
        else if (cityname == "banglore") {
            setStorecity(CityData.banglore)
        }
        else if (cityname == "chennai") {
            setStorecity(CityData.chennai)
        }
        else if (cityname == "jaipur") {
            setStorecity(CityData.jaipur)
        }
        else if (cityname == "amritsar") {
            setStorecity(CityData.amritsar)
        }
        else if (cityname == "southgoa") {
            setStorecity(CityData.southgoa)
        }
        else if (cityname == "pune") {
            setStorecity(CityData.pune)
        }
        else if (cityname == "delhi") {
            setStorecity(CityData.delhi)
        }
        else if (cityname == "mumbai") {
            setStorecity(CityData.mumbai)
        }
        else if (cityname == "nagpur") {
            setStorecity(CityData.nagpur)
        }
        else if (cityname == "agra") {
            setStorecity(CityData.agra)
        }
        else if (cityname == "kolkata") {
            setStorecity(CityData.Kolkata)
        }
        else if (cityname == "ahamednagar") {
            setStorecity(CityData.Ahamednagar)
        }
        else if (cityname == "hydrabad") {
            setStorecity(CityData.Hydrabad)
        }
        else {

        }

    }, [cityname])

    return(
        <div>
        {
            storecity.map((citydata, i) => {
                const { placename, placeimg, placedescription, placehistory } = citydata
                return <HomeCard name={placename} img1={placeimg[0]} img2={placeimg[1]} img3={placeimg[2]} description={placedescription} history={placehistory} />


            })
            
            
        }
        </div>
    )
}
export default CityPlace;