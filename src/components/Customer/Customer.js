import { useState } from 'react'
import './Customer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faMoon,faLocationDot,faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Customer({ name, description, address, img, NoOfReview, deleteCard, obj,editReview,id}) {
    const [count, setCount] = useState(0);
    function incre() {
        setCount(1 + count)
    }
    return (
        <>
            {/* <div className='main-container'> */}
            <div className='card-container'>

                <div className='container-customer'>
                    <div className='customer-container'>City Star Map </div>
                    <div className='cutomer-Address'> <span><FontAwesomeIcon icon={faLocationDot} className='location-icon'/></span>{address}</div>
                    <div className='cutomer-review'>{description}</div>
                    <div className='img-container'>
                        <div><img src={img} className='img' /></div>
                        <div className='font-size'>{name}</div>
                        <div className='font-size border'><p>+150</p></div>

                        <div className='font-size'>
                            <button onClick={()=>{editReview(id)}} className='btn cursor-pointer' type='button' >
                                Edit Review
                                </button></div>

                    </div>

                </div>
                <div className='container-like'>
                    <div className='text-center'>
                      <div className='text-center-child text-center-child1'>  <div className='' value={count} onClick={incre}><FontAwesomeIcon icon={faHeart} className='likebutton'/></div>
                        <div className='rating'>Your Ratting</div>
                        <div className='ratingpoint'>{count}</div>
                    </div>
                    </div>
                    <div className='text-center'>
                    <div className='text-center-child'> 
                        <div className='text-center-child'><FontAwesomeIcon icon={faMoon} className='likebutton'/></div>
                        <p className='rating'>Your Ratting</p>
                        <p className='ratingpoint'>0</p>
                        </div>
                    </div>
                </div>
                <div className='delete-reviews-container'>
                    <span className='delete-reviews-card' onClick={()=>{deleteCard (obj)}}><FontAwesomeIcon icon={faTrash} className='deleticon'/></span>
                </div>
                {/* <div className='delete-reviews-container'>
                    <span onClick={() => { deletcard(obj) }} className='delete-reviews-card'>🗑️</span>
                </div> */}


                {/* ✍️🗑️🎯📑📄📜📃📒📙🖋️🖊️✏️📝🖌️🍜 */}

            </div>

            {/* <div>
                    <div className='task-container'></div>
                </div>
            </div> */}
        </>
    )
}





// export default function Customer({ name, wish, img, secondaryColor }) {
// return (
//     <>
//         <div className='card-contener' style={{backgroundColor:(secondaryColor)}}>
//             <div className="container">
//                 <div>
//                     <img src={img} className='img' />
//                 </div>
//                 <div className='card-container'>
//                     <p className='name-paragrap'>{name}</p>
//                     <p>{wish}</p>
//                 </div>
//             </div>
//             {/* <h1>{secondaryColor}</h1>  */}
//         </div>
//     </>

// )
//}


