import './HomeCard.css'
// import img1 from './manali31.webp'
// import img2 from './manali32.jpeg'
// import img3 from './manali33.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
const HomeCard = ({ name, img1, img2, img3, description, history }) => {

    // const handleScrollImg = (event) => {
    //     const homescrollimg = document.getElementById('homescrollimg');
    //     homescrollimg.scrollLeft += event.deltaY;
    // }
    return (
        <div className="homecard">
            <div className='img-section'>
                <div className='img-section-left'>
                    <span><FontAwesomeIcon icon={faAngleLeft} className="homeicon"
                    //  onClick={() => {
                    //     handleScrollImg({ deltaY: -1200 });

                    // }} 
                    /></span>

                </div>
                <div className='homecard-img-group' id='homescrollimg'>
                    <div className='homecardimgbody'>
                        {/* <img src={img3} className='homecardimg' /> */}
                    </div>
                    <div  className='homecardimgbody'>
                        {/* <img src={img1} className='homecardimg' /> */}
                    </div>
                    <div  className='homecardimgbody'>
                        {/* <img src={img2} className='homecardimg' /> */}
                    </div>

                </div>

                <div className='img-section-right'>
                    <span><FontAwesomeIcon icon={faAngleRight} className="homeicon"
                    //  onClick={() => {
                    //     handleScrollImg({ deltaY: 1200 });

                    // }} 
                    /></span>

                </div>
            </div>
            <div className='name'>{name}</div>
            <h1 className='heading'>description</h1>
            <div className='description'>{description}</div>
            <h1 className='heading'>history</h1>
            <div className='description'>{history}</div>

        </div>
    )
}
export default HomeCard;