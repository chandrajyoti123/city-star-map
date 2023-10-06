import './HomeCard.css'
// import img1 from './manali31.webp'
// import img2 from './manali32.jpeg'
// import img3 from './manali33.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
const HomeCard = ({ name, img1, img2, img3, description, history }) => {

    const handleScrollImg = (event) => {
        const homescrollimg = document.getElementById('homescrollimg');
        homescrollimg.scrollLeft += event.deltaY;
    }
    return (
        <div className="homecard">
            <div className="headingseciotion">
           <div className="mainheading">{name}</div>
            
           </div>
            <div className='img-section'>
                <div className='img-section-left'>
                    <span><FontAwesomeIcon icon={faAngleLeft} className="homeicon"
                     onClick={() => {
                        handleScrollImg({ deltaY: -900 });

                    }} 
                    /></span>

                </div>
                <div className='overflow'  id='homescrollimg'>
                <div className='homecard-img-group'>
                    <div className='homecardimgbody'>
                        <img src={img3} className='homecardimg' />
                    </div>
                    <div  className='homecardimgbody'>
                        <img src={img1} className='homecardimg' />
                    </div>
                    <div  className='homecardimgbody'>
                        <img src={img2} className='homecardimg' />
                    </div>

                </div>
                </div>

                <div className='img-section-right'>
                    <span><FontAwesomeIcon icon={faAngleRight} className="homeicon"
                     onClick={() => {
                        handleScrollImg({ deltaY: 900 });

                    }} 
                    /></span>

                </div>
            </div>
            <div className='descriptionhomecard'>
                {description}

            </div>
            <div className='homecardsubheading'>
                Explore The history of {name}
            </div>
            <div className='descriptionhomecard'>
            {history}
            </div>



           
          
       
           

        </div>
      
    )
}
export default HomeCard;