import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout';
import "../assets/css/Home.css";
import NavbarHome from '../Components/NavbarHome';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div>
        <NavbarHome/>
    </div>
  
  <div className="MainContainer">
      <div className="Left">
        <div className="MainTitle">
           <h6>MOBILE SERVICE CENTER<br></br> Trust us to make your mobile like new again</h6>
        </div>
        <div className='SubContent'>
          <br>
            </br>
        <h4>"Seamless Solutions, Exceptional Service"
"Discover the Difference" </h4>
        </div>
        <div className='Start'>
          <button class="button-54" role="button"  onClick={()=>navigate("/Login")}>JOIN US</button>
        </div>
      </div>
      <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://shorturl.at/ciDJ8" width="800" height="500"></img>
      </div>
      
  </div>
  </>
  )
}

export default Home;