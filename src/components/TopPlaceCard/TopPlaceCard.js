// import images from './agrafort1.png'
import './TopPlaceCard.css'
const TopPlaceCard=({placecardimg,placecardname})=>{
    return(
        <div className="placecard">
        < img src={placecardimg} className='placecardimg'/>
         <div className='placecardbody' >
         <div className='placecardname'>{placecardname} </div>

          </div>
     </div>
    )
}
export default TopPlaceCard
