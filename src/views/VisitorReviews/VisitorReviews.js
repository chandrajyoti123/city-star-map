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
    const [id, setId] = useState("");
    const [isEdit, setIsEdit] = useState(false)

    function addReviewsCard() {
        const randomId = Math.floor(Math.random() * 100000);
        const obj = {
            id: randomId,
            address: title,
            description: description,
            name: name,
        }
        let oldData = data;
        setData([...oldData, obj])
        setName('')
        setDescription('')
        setTitle('')

    }

    function deleteCard(obj) {
        const index = data.indexOf(obj);
        const realArray = data;
        realArray.splice(index, 1)
        setData([...realArray])
    }

    //update start
    function editReview(id){
        let temp;
        data.forEach((datalist, i)=>{
            if(datalist.id === id){
                temp = datalist;
            }
            setName(temp?.name);
            setTitle(temp?.address);
            setDescription(temp?.description)
            setId(id)
        }) 
    }

    function updateAdded(){
        let indexof;
        data.forEach((datalist , i) =>{
            if(datalist.id == id){
                indexof = i;
            }})
            let editData = data ;
            editData[indexof] = {
                id:id,
                address:title,
                name:name,
                description:description,
            }
            setData([...editData]);
            setDescription('')
            setTitle('')
            setName('')
    }
    
    function addeditedreview() {
        let indexof;
        data.forEach((datalist, i) => {
            if (datalist.id == id) {
                indexof = i
            }
        })
        let temparrr = data;
        temparrr[indexof] = {
            id: id,
            address: title,
            description: description,
            name: name,
        }
        setData([...temparrr])
        setName('')
        setDescription('')
        setTitle('')
    }
    //update end

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
                                        editReview={editReview} id={customerdata.id}
                                        />
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

                        <input type="text" value={name} onChange={(e) => {
                            setName(e.target.value)

                        }} placeholder="Name" className="input-in-container" /><br /><br />

                        <input type="text" value={title} onChange={(e) => {
                            setTitle(e.target.value)

                        }} placeholder="Title" className="input-in-container" /><br /><br />

                        <input type="text" value={description} onChange={(e) => {
                            setDescription(e.target.value)

                        }} placeholder="Description" className="input-in-container" /><br /><br />

                        <div className="add-task-btn">
                              <button className="btn-add-update" onClick= {addReviewsCard}>Add</button>
                            <button className="btn-add-update" onClick={addeditedreview}>update</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews
