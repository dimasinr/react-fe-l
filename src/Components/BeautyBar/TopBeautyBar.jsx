import './beauty.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Star } from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const TopBeautyBar = () => {

  const [topBeautyBar, setTopBeautyBar] = useState([]);

  const getTopBeautyBar = async () => {
    try{
      let response = await axios.get("https://analisdatacus.000webhostapp.com/topbeautybar.php")
      setTopBeautyBar(response.data)
      console.log(response.data);
    } catch(e){
      console.log(e.message);
    }
  }

  useEffect(() => {
    getTopBeautyBar();
  }, [])

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "rgb(195, 195, 195)", borderRadius: "60%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(195, 195, 195)",  borderRadius: "60%" }}
      onClick={onClick}
    />
  );
}

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

return (
<div>
    <div className="d-flex mb-4">
    <h2 className='fw-bold'>Top Beauty Bar</h2> <button className='ml-1 beauty-btn' style={{ fontWeight: '600' }}>See All Beauty Bar</button>

    </div>

   <div className="row mb-4 col-md-12 mr-3 dp-in-block">

    <Slider {... settings}>
{ 
  topBeautyBar.map((topbeautybar, index) => {

    return(
      <div key={index} className="col-sm-3 mb-4">
      <Link to={topbeautybar.url} className='mse'>
      <div className="cards">
           <img className='card-img-top' width={185} height={185} src={topbeautybar.img} alt=""/>
         <div className="card-body">
           <div className="mt-4">
               <span className='fw-bold'>{topbeautybar.name_bb}</span>
               <span className='star-desc'>
             <Star /> 
             <div className="rate-star-beauty">
               4.0
             </div>
             <span>&nbsp; (13 reviews)</span>
           </span>
           <span className='open-hour mt-1'>Open Hours :  <span style={{ color: 'red', marginLeft: '5px'  }}>{topbeautybar.open_hour} - {topbeautybar.end_hour}</span> </span>
         <span className='text-seen-beautybar'>
           Last seen : {topbeautybar.last_seen} yang lalu
         </span>
               <p className='beautyBarAddress'> 
               {topbeautybar.address.length > 60 ? 
                `${topbeautybar.address.substring(0, 60)} ...` : topbeautybar.address
               } 
               </p> 
           </div> 
         </div>
       </div>
      </Link>
     </div>
 
    )
  })
  
  }
  
    </Slider>

    </div>
  </div>
  )
}
