import './TopSearchcard.css'

const TopSearchCard=({name,img1,img2,img3,description,history})=>{
    
    return(
        <div className="topsearchcard">
            <div className=' img-group'>
                <img src={img1} className='img'/>
                <img src={img2} className='img'/>
                <img src={img3} className='img'/>
            </div>
            <div className='name'>{name}</div>
            <h1 className='heading'>description</h1>
            <div className='description'>{description}</div>
            <h1 className='heading'>history</h1>
            <div className='description'>{history}</div>

        </div>
    )
}
export default TopSearchCard;