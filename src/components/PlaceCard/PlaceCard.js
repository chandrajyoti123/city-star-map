import img from './agrafort1.png'
import './PlaceCard.css'
const PlaceCard=()=>{
    return(
        <div className="placecard">
           < img src={img} className='placecardimg'/>
           <div className='placecardbody' >

           </div>
        </div>
    )
}
export default PlaceCard;