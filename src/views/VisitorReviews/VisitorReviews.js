import React, { useState } from "react";
import placeimg from './section5.jpg'
import './VisitorReviews.css'
import view from './../../CityData/reviews.json';
import Customer from "./../../components/Customer/Customer";

// import Customer from "../../componets/Cutomer/Customer";

function Reviews() {
    const [data, setData] = useState(view.customer);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function addReviewsCard(){
        const randomId = Math.floor(Math.random()*100);
        const obj ={
            id :randomId ,
            address:title,
            description : description,
            name: name ,
        }
        let oldData = data;
        setData([...oldData,obj])
        setName('')
        setDescription('')
        setTitle('')
        
    }

    
function deleteCard(obj){
    const index = data.indexOf(obj);
    const realArray = data ;

    realArray.splice(index , 1)
    setData([...realArray])
}

    
    // function addReviewCard(){
    //     const ranid=Math.floor(Math.random()*100)
    //     const obj={
    //         id:ranid,
    //         name:name,
    //         description:description,
    //         address:title,
    //         image:placeimg,

    //      }
    //     let virtual=data;
    //     setData([...virtual,obj])
    //     setName('')
    //     setTitle('')
    //     setDescription('')

    // }
    // function deletReviewCard(obj){
    //    const index =data.indexOf(obj)
     
    //   const virtualarr=data
    //   virtualarr.splice(index,1);
    //   setData([...virtualarr])


    // }
   

 

    

  

    
    return (
        <>
            <div className="reviews-section">
                <div className="reviews-section-left">
                    {
                        data.map((customerdata) => {
                            return (
                                <>

                                    <div>
                                        <Customer name={customerdata.name} description={customerdata.description} address={customerdata.address} img={customerdata.image} NoOfReview={customerdata.NoOfReview} 
                                       deleteCard={deleteCard} obj={customerdata}
                                        />
                                      {/* deletcard={deletReviewCard} obj={customerdata}  */}
                                    </div>

                                </>
                            )
                        })
                    }
                </div>

                <div className="reviews-section-right">
                    <div className="addtask-container">
                            <br></br>
                            <h1 className="heading-section-right">Add Task</h1><br></br>
                        
                            <input type="text" value={name} onChange={(e)=>{
                                setName(e.target.value)

                            }} placeholder="Name" className="input-in-container"  /><br /><br />
                          
                            <input type="text" value={title} onChange={(e)=>{
                                setTitle(e.target.value)

                            }} placeholder="Title" className="input-in-container" /><br /><br />
                         
                            <input type="text" value={description} onChange={(e)=>{
                                setDescription(e.target.value)

                            }} placeholder="Description" className="input-in-container" /><br /><br />

                            <div className="add-task-btn">
                                <button className="btn-add-update" onClick={addReviewsCard}> 
                                {/* onClick={addReviewCard} */}
                                    Add</button>
                                <button className="btn-add-update">update</button>
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
