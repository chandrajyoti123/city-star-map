import React, { useState,useEffect } from "react";
import placeimg from './section5.jpg'
import './VisitorReviews.css'
// import './review.css'
import view from './../../CityData/reviews.json';
import Customer from "./../../components/Customer/Customer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars, faL} from "@fortawesome/free-solid-svg-icons";
import chandani from './chandani.jpg'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


// import Customer from "../../componets/Cutomer/Customer";

function Reviews() {
    const [data, setData] = useState(view.customer);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");
    const [isEdit, setIsEdit] = useState(false)
    
    // ---------local-storage----------

    useEffect(() => {
        const readlocal = JSON.parse(localStorage.getItem("key"));
        if (readlocal && readlocal.length > 0) {
          setData(readlocal);
        }
      }, []);
      const settolocalstorage = (data) => {
        const reveiw = JSON.stringify(data);
        localStorage.setItem("key", reveiw);
      };

    function addReviewsCard() {
        if(name=="" && title=="" && description==""){
            return
        }
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
        settolocalstorage([...oldData, obj])

    }

    function deleteCard(obj) {
        const index = data.indexOf(obj);
        const realArray = data;
        realArray.splice(index, 1)
        setData([...realArray])
        settolocalstorage(realArray)
    }

    //update start
    function editReview(id){
        setMenuclass("sidebaropen")
        setIsmenu(false)
        setIsEdit(true)
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
        isEdit(false)
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
            settolocalstorage(editData)
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
        settolocalstorage(temparrr)
        setIsEdit(false)
    }
    //update end
    // -----------------menu bar----
    const [menuclass,setMenuclass]=useState("sidebarclosed")
    const [ismenu,setIsmenu]=useState(false)
    const [isedit,setIsedit]=useState(false)
    function setsidebar(){
       setMenuclass("sidebarclosed")
        setIsmenu(true)
    }
    function removesidebar(){
      setMenuclass("sidebaropen")
      setIsmenu(false)
    }

    return (
        <>
       
            <Navbar/>
            <div className="reviewcontainer">
                <div className="reviewconleft">
                {
                        data.map((customerdata) => {
                            return (
                                <>
                                    <div>
                                        <Customer name={customerdata.name} description={customerdata.description} address={customerdata.address} img={customerdata.image?customerdata.image:chandani} NoOfReview={customerdata.NoOfReview}
                                        deleteCard={deleteCard} obj={customerdata}
                                        editReview={editReview} id={customerdata.id}
                                        />
                                    </div>

                                </>
                            )
                        })
                    }


                </div>
                <div className={`reviewconright ${menuclass}`}>
                    <span><FontAwesomeIcon icon={faBars}  className="fabars " onClick={ismenu?removesidebar:setsidebar}/></span>

                    <div className="addtask-container">
                        <br></br>
                        <h1 className="headingreview">Right Your Review</h1><br></br>

                        <input type="text" value={name}
        
                        onChange={(e) => {
                            setName(e.target.value)

                        }} placeholder="Your Name" className="input-review" /><br /><br />

                        <input type="text" value={title} onChange={(e) => {
                            setTitle(e.target.value)

                        }} placeholder="Your Address" className="input-review"  /><br /><br />

                        {/* <textarea type="text" value={description} onChange={(e) => {
                            setDescription(e.target.value)

                        }} placeholder="Description" className="input-in-container" /> */}
                        <textarea 
                        className="text-review" 
                        rows="5" cols="33"
                        type="text" 
                        value={description} 
                        onChange={(e) => {
                            setDescription(e.target.value)

                        }} 
                        placeholder="Right Here Your opinion">
                        </textarea><br /><br />

                        <div className="add-task-btn">
                              <button className="button-review" onClick= {isEdit?addeditedreview:addReviewsCard}>{isEdit?"Edit your review":"Add your review"}</button>
                            {/* <button className="btn-add-update" onClick={addeditedreview}>update</button> */}
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Reviews
