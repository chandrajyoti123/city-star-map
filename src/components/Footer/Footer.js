import React from 'react';
import { Link } from "react-router-dom"
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faHouse,faEnvelope,faPhone}  from '@fortawesome/free-solid-svg-icons';
import{faInstagram,faGithub,faFacebook,faLinkedin,}  from '@fortawesome/free-brands-svg-icons';

  const Footer= () =>
  {
    return(
      <>

 <footer class="text-center text-lg-start bg-blue text-light p-2 mt-5">
    {/* <section class="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
    
    
    
    </section> */}
   
  <section class="">
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <p class="text-uppercase fw-bold mb-4 fs-4">
            City star Map
          </p>
          <p class="fs-5">
          The "City Star Map" project is a modern web application designed to help users explore and learn more about cities around the world.
          </p>
        </div>
        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <p class="text-uppercase fw-bold mb-4 fs-4">
            Quick Links
          </p>
          <p class="fs-fs-5" >
            <Link class="text-reset" to={"/"}>Home </Link>
            {/* <a href="#!" class="text-reset">Review</a> */}
          </p>
          <p  class="fs-fs-5">
          <Link class="text-reset" to={"/visitorreviews"}>Review </Link>
            {/* <a href="#!" class="text-reset">Top Searches</a> */}
          </p>
          <p  class="fs-fs-5">
          <Link class="text-reset" to={"/topserchplaces"}>Top Searches </Link>
          </p>
          <p  class="fs-fs-5">
            {/* <a href="#!" class="text-reset">About Us</a> */}
            <Link class="text-reset" to={"/aboutus"}>About </Link>
          </p>
        </div>
      
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <p class="text-uppercase fw-bold mb-4 fs-4">
            Useful links
          </p>
          <p class="fs-fs-5">
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p class="fs-fs-5">
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p class="fs-fs-5">
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p class="fs-fs-5">
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
       

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <p class="text-uppercase fw-bold mb-4 fs-4">Contact</p>
          <p class="fs-fs-5"> <FontAwesomeIcon icon={faHouse} /> 403, Laxmi Heights, shevalevadi, pune - 412307
          </p>
          <p  class="fs-fs-5"><FontAwesomeIcon icon={faEnvelope}/> sonaliygadekar@gmail.com</p>
          <p class="fs-fs-5"><FontAwesomeIcon icon={faPhone}/> + 91 9767973193</p>
          <p  class="fs-5 ">
          <a href="https://github.com/sonaligadekar20" target="_blank" class="me-4 text-reset "> <FontAwesomeIcon icon={faGithub} /></a>
          <a href="" class="me-4 text-reset"> <FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/sonaliygadekar/"target="_blank" class="me-4 text-reset"> <FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com/in/sonali-gadekar/" target="_blank" class="me-4 text-reset">  <FontAwesomeIcon icon={faLinkedin} /></a>        
          </p>
        
        </div>
    
      </div>

    </div>
  </section>

  {/* <div class="text-center p-4">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">citystarmap.com</a>
  </div> */}
 
</footer>
</>
    )
}
export default Footer;

