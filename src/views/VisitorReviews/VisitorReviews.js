import React, { useState } from "react";
import './VisitorReviews.css'
import view from './../../CityData/reviews.json';
import Customer from "./../../components/Customer/Customer";

// import Customer from "../../componets/Cutomer/Customer";

function Reviews() {
    const [data, setData] = useState(view.customer);

    return (
        <>
            <div>
                {
                    data.map((customerdata) => {
                        return (
                            <>
                                <div>
                                    <Customer name={customerdata.name} description={customerdata.description} address={customerdata.address} img={customerdata.image} NoOfReview={customerdata.NoOfReview} />
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}


// function Reviews() {
//     const [data, setData] = useState(view.customer)
//     return (
//         <>
//             <div className="card-review">
//                 {
//                     data.map((customerdata,i) => {

//                         return (
//                             <>
//                                 <div style={{Color:view.thim.primeryColor}}>
//                                     <Customer img={customerdata.Reviewsimg} name={customerdata.Reviewname} wish={customerdata.content} />
//                                 </div>
//                             </>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default Reviews
