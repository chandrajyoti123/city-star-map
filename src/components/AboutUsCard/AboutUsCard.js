import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import './AboutUsCard.css'

const AboutUsCard = ({ name, basicinfo, img, linkdin, insta, github }) => {
    return (
        <>
            <diV>
                <div className="aboutuscard">
                    <div className='aboutusname'>{name}</div>
                    <div className='aboutusinfocon'>
                        <div className='aboutusimgcon'>
                            <img src={img} className='aboutusimg' />
                            <div className='aboutusfilm'></div>
                        </div>
                        <div className='aboutuslogen'>"{basicinfo}"</div>

                    </div>
                    <div className='extrainfoabouus'>
                        <div className='extraingochild'>
                            This is {name}  A member of Project , A Frontend Web Deoloper {basicinfo} ,
                            <div className="icon-set-container">
                                <a href={linkdin}><span className="icons"><FontAwesomeIcon icon={faLinkedin} /></span></a>
                                <a href={github}><span className="icons"><FontAwesomeIcon icon={faSquareGithub} /></span></a>
                                <a href={insta}><span className="icons"><FontAwesomeIcon icon={faInstagram} /></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </diV>
        </>
    )
}
export default AboutUsCard;


export function AboutUsCard2({ name2, basicinfo2, img2, insta2, linkdin2, github2 }) {
    return (
        <>
            <div className="aboutuscard margin-letf">
                <div className='aboutusname text-move-left'>{name2}</div>
                <div className='aboutusinfocon row-reverse-made'>
                    <div className='aboutusimgcon'>
                        <img src={img2} className='aboutusimg' />
                        <div className='aboutusfilm'></div>
                    </div>
                    <div className='aboutuslogen'>"{basicinfo2}"</div>

                </div>
                <div className=' extrainfoabouus'>
                    <div className=' extraingochild'>
                        This is {name2}  A member of Project , A   Frontend Web Developer {basicinfo2} ,
                        <div className="icon-set-container">
                            <a href={linkdin2}><span className="icons"><FontAwesomeIcon icon={faLinkedin} /></span></a>
                            <a href={github2}><span className="icons"><FontAwesomeIcon icon={faSquareGithub} /></span></a>
                            <a href={insta2}><span className="icons"><FontAwesomeIcon icon={faInstagram} /></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 
