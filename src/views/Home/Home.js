import TopPlaceCard from "../../components/TopPlaceCard/TopPlaceCard";
import HomeCard from "../../components/HomeCard/HomeCard";
import { Link, json } from "react-router-dom";
import CityPlace from "../CityPlace/CityPlace";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CityData from './../../CityData/City.json'
import { useState, useEffect } from "react";
import logo from './logo.png'
import Navbar from "../../components/Navbar/Navbar";
import './Home.css'
import SectionOne from "../SectionOne/SectionOne";
import section1 from './section1.jpg'
import section2 from './section2.jpg'
import section3 from './section3.jpg'
import section4 from './section4.jpg'
import section5 from './section5.jpg'
import TrendingCity from "../TrendingCity/TrendingCity";
import TopSearchData from './../../CityData/topplaces.json'
import map from './map.png'
import Footer from "../../components/Footer/Footer";


const Home = () => {
    const [cityname, setCityname] = useState("")
    const [storecity, setStorecity] = useState([])
    const [cityplace, setCityplace] = useState("mathura")
    const [topsearcharr, setTopsearcharr] = useState(TopSearchData.topsearch)

    // console.log(cityplace)

    useEffect(() => {
        localStorage.setItem("city", cityplace)

    }, [cityplace])




    useEffect(() => {

        if (cityname == "mathura") {
            setStorecity(CityData.mathura)
            setCityplace("mathura")


        }
        else if (cityname == "manali") {
            setStorecity(CityData.manali)
            setCityplace("manali")
        }
        else if (cityname == "banglore") {
            setStorecity(CityData.banglore)
            setCityplace("banglore")
        }
        else if (cityname == "chennai") {
            setStorecity(CityData.chennai)
            setCityplace("chennai")
        }
        else if (cityname == "jaipur") {
            setStorecity(CityData.jaipur)
            setCityplace("jaipur")
        }
        else if (cityname == "amritsar") {
            setStorecity(CityData.amritsar)
            setCityplace("amritsar")

        }
        else if (cityname == "southgoa") {
            setStorecity(CityData.southgoa)
            setCityplace("southgoa")
        }
        else if (cityname == "pune") {
            setStorecity(CityData.pune)
            setCityplace("pune")
        }
        else if (cityname == "delhi") {
            setStorecity(CityData.delhi)
            setCityplace("delhi")
        }
        else if (cityname == "mumbai") {
            setStorecity(CityData.mumbai)
            setCityplace("mumbai")
        }
        else if (cityname == "nagpur") {
            setStorecity(CityData.nagpur)
            setCityplace("nagpur")
        }
        else if (cityname == "agra") {
            setStorecity(CityData.agra)
            setCityplace("agra")
        }
        else if (cityname == "kolkata") {
            setStorecity(CityData.Kolkata)
            setCityplace("kolkata")
        }
        else if (cityname == "ahamednagar") {
            setStorecity(CityData.Ahamednagar)
            setCityplace("ahamednagar")
        }
        else if (cityname == "hydrabad") {
            setStorecity(CityData.Hydrabad)
            setCityplace("hydrabad")
        }
        else {

        }

    }, [cityname])
    // -----------------------scroll-------------------------
    // const scroll =document.getElementById('flex-scroll')
    // scroll.addEventListener("weel",(eve)=>{
    //     eve.preventDefault()
    //     scroll.scrollLeft += eve.deltaY
    // })

    const handleScroll = (event) => {
        const scroll = document.getElementById('flex-scroll');
        scroll.scrollLeft += event.deltaY;
    }
    // -------------local-storage--------
    const [userlogindata,setUserlogindata]=useState('')
    useEffect(()=>{
        const logindata=JSON.parse(localStorage.getItem("userinfo"))
        if(logindata){
            setUserlogindata(logindata)
        }
  },[])
  function logOut(){
    localStorage.clear("userinfo")
}
   
   


    return (
        <div>

            <Navbar />


            {/* <SectionOne img1={section1} img2={section2} img3={section3} img4={section4} img5={section5}/> */}
            <div className="sectionone">
                <div className="searchsection">
                    <div className="searchsetionleft">
                        <div className="searchleftleft">
                            <img src={logo} className="logo" />
                        </div>
                        <div className="searchleftright">
                            <Link to='/cityplace'> <span ><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /></span></Link>
                            <input className="input" value={cityname} placeholder="search city here" onChange={(e) => {
                                setCityname(e.target.value)
                            }} />
                        </div>
                    </div>

                    <div className="searchsetionright">
                        <div className="login">{userlogindata.firstname} {userlogindata.lastname}</div>
                        
                        {userlogindata?<Link to='/'><div  onClick={logOut}  className="login">logout</div></Link>: <Link to={"/login"} className="login">login</Link>}
                       
                    </div>

                </div>
                <div className="sectiononebody">

                    <div className="sectiononeheading">City Star Map</div>
                    <div className="sectiononesubheading">  See Your Favourite Destination To Be An Explore</div>
                </div>
            </div>
            <div className="headingseciotion">
                <div className="mainheading">Trending destinations</div>

            </div>

            <div className="sectiontwo">

                <div className='row1'>
                    <Link className="linkrow1" to='/trendingcity/1'>
                        <div className='row1-child'>

                            <img src={section1} className='sectionimg' />
                            <div className="transparentfilm">
                                <div className="nameofcard">NewDelhi</div>
                            </div>

                        </div>
                    </Link>
                    <Link className="linkrow1" to='/trendingcity/2'>
                        <div className='row1-child'>
                            <img src={section2} className='sectionimg' />
                            <div className="transparentfilm">
                                <div className="nameofcard">Banglore</div>

                            </div>

                        </div>
                    </Link>

                </div>
                <div className='row2'>
                    <Link className="linkrow2" to='/trendingcity/3'>
                        <div className='row2-child'>
                            <img src={section3} className='sectionimg' />
                            <div className="transparentfilm">
                                <div className="nameofcard">Mumbai</div>
                            </div>

                        </div>
                    </Link>
                    <Link className="linkrow2" to='/trendingcity/4'>
                        <div className='row2-child'>
                            <img src={section4} className='sectionimg' />
                            <div className="transparentfilm">
                                <div className="nameofcard">Chennai</div>
                            </div>

                        </div>
                    </Link>
                    <Link className="linkrow2" to='/trendingcity/5'>
                        <div className='row2-child'>
                            <img src={section5} className='sectionimg' />
                            <div className="transparentfilm">
                                <div className="nameofcard">Jaipur</div>
                            </div>

                        </div>
                    </Link>

                </div>


            </div>
            <div className="headingseciotion">
                <div className="mainheading">Best of India </div>

            </div>
            <div className="topplaces">
                <div className="topplacecol1">
                    <span><FontAwesomeIcon icon={faAngleLeft} className="faangle" onClick={() => {
                        handleScroll({ deltaY: -500 });

                    }} /></span>
                </div>
                <div className=" flexrow" id="flex-scroll">
                    {
                        topsearcharr.map((topsearchele, i) => {
                            return(<Link to={`/topplaces/${i}`} ><TopPlaceCard placecardimg={topsearchele.placeimg[0]} placecardname={topsearchele.placename} /> </Link> )

                        })
    
                    }
                </div>
                <div className="topplacecol2">
                    <span><FontAwesomeIcon icon={faAngleRight} className="faangle" onClick={() => {
                        handleScroll({ deltaY: 500 });

                    }} /></span>
                </div>
            </div>
            <div>
                {/* <img src={ma}/> */}
            </div>








        <Footer/>


        </div>

    )

}
export default Home;