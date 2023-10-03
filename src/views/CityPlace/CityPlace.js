import HomeCard from "../../components/HomeCard/HomeCard"
import CityData from './../../CityData/City.json'
import { useState ,useEffect } from "react"
const CityPlace=({dataofcityplace})=>{
    
  console.log(dataofcityplace)
  
    const [storecity, setStorecity] = useState([])

    useEffect(() => {
        if (dataofcityplace == "mathura") {
            setStorecity(CityData.mathura)

        }
        else if (dataofcityplace == "manali") {
            setStorecity(CityData.manali)
        }
        else if (dataofcityplace == "banglore") {
            setStorecity(CityData.banglore)
        }
        else if (dataofcityplace == "chennai") {
            setStorecity(CityData.chennai)
        }
        else if (dataofcityplace == "jaipur") {
            setStorecity(CityData.jaipur)
        }
        else if (dataofcityplace == "amritsar") {
            setStorecity(CityData.amritsar)
        }
        else if (dataofcityplace == "southgoa") {
            setStorecity(CityData.southgoa)
        }
        else if (dataofcityplace == "pune") {
            setStorecity(CityData.pune)
        }
        else if (dataofcityplace == "delhi") {
            setStorecity(CityData.delhi)
        }
        else if (dataofcityplace == "mumbai") {
            setStorecity(CityData.mumbai)
        }
        else if (dataofcityplace == "nagpur") {
            setStorecity(CityData.nagpur)
        }
        else if (dataofcityplace == "agra") {
            setStorecity(CityData.agra)
        }
        else if (dataofcityplace == "kolkata") {
            setStorecity(CityData.Kolkata)
        }
        else if (dataofcityplace == "ahamednagar") {
            setStorecity(CityData.Ahamednagar)
        }
        else if (dataofcityplace == "hydrabad") {
            setStorecity(CityData.Hydrabad)
        }
        else {

        }

    }, [])

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