

import './AboutUsCard.css'
import girlimg from './imgofgirl.webp'
import tara from './tara.jpg'

const AboutUsCard=() =>{
    return(
        <>
        <div className="aboutuscard">
            <div className='aboutusname'>Chandrajyoti Adil</div>
            <div className='aboutusinfocon'>
                <div className='aboutusimgcon'>
                    <img src={tara} className='aboutusimg'/>
                    <div className='aboutusfilm'></div>
                </div>
                <div className='aboutuslogen'>"Doing B.Tech from tusliramjiGaikwad patil college of engineering and technology"</div>

            </div>
            <div className='extrainfoabouus'>
                <div className='extraingochild'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repudiandae eos illum ducimus exercitationem explicabo, modi optio id unde. Saepe facere iste adipisci mollitia cum! Voluptas, velit asperiores! Totam molestias veritatis amet quam esse soluta accusantium, sed quis possimus recusandae tempore non labore, quia dignissimos ex doloremque.

                </div>

            </div>
            
        </div>
         </>

    )
}
export default AboutUsCard;


export function AboutUsCard2(){
    return(
        <>
          <div className="aboutuscard margin-letf">
            <div className='aboutusname text-move-left'>Chandrajyoti Adil</div>
            <div className='aboutusinfocon row-reverse-made'>
                <div className='aboutusimgcon'>
                    <img src={girlimg} className='aboutusimg'/>
                    <div className='aboutusfilm'></div>
                </div>
                <div className='aboutuslogen'>"Doing B.Tech from tusliramjiGaikwad patil college of engineering and technology"</div>

            </div>
            <div className='extrainfoabouus2'>
                <div className='extraingochild2'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repudiandae eos illum ducimus exercitationem explicabo, modi optio id unde. Saepe facere iste adipisci mollitia cum! Voluptas, velit asperiores! Totam molestias veritatis amet quam esse soluta accusantium, sed quis possimus recusandae tempore non labore, quia dignissimos ex doloremque.

                </div>

            </div>
            
        </div>
        </>
    )
} 
