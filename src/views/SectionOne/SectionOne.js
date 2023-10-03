// import './SectionOne.css'
const SectionOne=({img1,img2,img3,img4,img5})=>{
return(
    <div className="sectionone">
                <div className='row1'>
                    <div className='row1-child'>
                    <img src={img1} className='sectionimg'/>

                    </div>
                    <div className='row1-child'>
                    <img src={img2} className='sectionimg'/>

                    </div>

                </div>
                <div className='row2'>
                    <div className='row2-child'>
                    <img src={img3} className='sectionimg'/>
                        
                    </div>
                    <div className='row2-child'>
                    <img src={img4} className='sectionimg'/>

                    </div>
                    <div className='row2-child'>
                    <img src={img5} className='sectionimg'/>

                    </div>

                </div>

     </div>

)
}
export default SectionOne;