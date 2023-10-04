import React, { useState } from "react";
import './VisitorReviews.css'
import view from './../../CityData/reviews.json';
import Customer from "./../../components/Customer/Customer";

// import Customer from "../../componets/Cutomer/Customer";

function Reviews() {
    const [data, setData] = useState(view.customer);
    const [name, setName] = useState("");

    const nameOnChage=((e) =>{
        const changename = e.target.value;
        setName(changename);
    });
    
    return (
        <>
            <div className="reviews-section">
                <div className="reviews-section-left">
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

                <div className="reviews-section-right">
                    <div className="addtask-container">
                            <br></br>
                            <h1>Add Task</h1><br></br>
                            
                            <input type="text" value={name} onChange={nameOnChage} placeholder="Name" className="input-in-container"  /><br /><br />
                            
                            <input type="text" value={title} onChange={titleOnChage} placeholder="Title" className="input-in-container" /><br /><br />
                           
                            <input type="text" value={description} onChange={descriptionOnChange} placeholder="Description" className="input-in-container" /><br /><br />

                            <div className="add-task-btn">
                                <button>Add</button>
                                <button>update</button>
                            </div>
                        

                    </div>
                </div>
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
