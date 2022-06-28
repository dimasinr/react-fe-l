import "./categories.css"
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
    
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
        centerMode: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
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
              infinite: true,
              centerPadding: '30px',
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      
      const [categories, setCategories] = useState([]);
          
          const getCategories = async () => {
            try{
              let response = await axios.get("https://analisdatacus.000webhostapp.com/category.php")
              setCategories(response.data)
              console.log(response.data);
            } catch(e){
              console.log(e.message);
            }
          }
      
          useEffect(() => {
            getCategories();
          }, [])
      
        return (
        <div>
          <div className="mt-4">
            <div className="row mb-4 justify-content-center md-res">
      <Slider {... settings}>
          {
              categories.map((category, index) => {
                return(
                    <div key={index} className="col-lg-2 col-md-2 col-sm-4 col-xs-12 gd-ca">
                      <Link to={category.url} className='mse'>
                        <div className="cards-category">
                          <img className='card-img-top' src={category.img} alt="" srcSet="" />
                          <div className="card-body">
                            <div className="mt-4">
                              <span className='fw-bold'>{category.title}</span>
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
        </div>
        );
}
