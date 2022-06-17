// import * as ReactBootstrap from 'react-bootstrap'
import { Star, StarHalf, StarBorder } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

function RecBeauty() {

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
    dots: true,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
    <div className="mb-4 mt-2 d-flex">
      <h2 className='fw-bold'>Recomended Treatments</h2> <button className='ml-1 beauty-btn' style={{ fontWeight: '600' }}>See All Treatment</button>
    </div>

   <div className="row mb-4 col-md-12 ml-auto">                                                                                                                                                                                                                                                 

   <Slider {... settings}>

   <div className="col-sm-3 mb-4">
      <Link to='/treatment/booking/eyelash+extension' className='mse'>
      <div className="cards">
        <img className="card-img-top" style={{ height: '160px' }} src="https://static.wixstatic.com/media/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg" alt="" />
          <div className="card-body">
            <div className="mt-4">
              <span className='fw-bold'>Eyelash Extension</span>
            </div>
          <span className='text-secondary mb-1'>Kana Studio</span>
            <span className='star-desc'>
              <Star /> 
              <Star /> 
              <Star /> 
              <Star /> 
              <StarBorder /> 
              <div className="rate-star-beauty">
                4.0
              </div>
            </span>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
         </div>
      </div>
      </Link>
    </div>

    <div className="col-sm-3 mb-4">
      <div className="cards">
          <img className="card-img-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/1vZn9Mh3-pNP-iKmqxNX1w/348s.jpg" style={{ height: '160px' }} alt="" />
            <div className="card-body">
              <div className="mt-4">
                <span className='fw-bold'>Nails Extension</span>
              </div>
            <span className='text-secondary mb-1'>Tainted Nails</span>
              <span className='star-desc'>
                <Star /> 
                <Star /> 
                <Star /> 
                <Star /> 
                <StarHalf /> 
                <div className="rate-star-beauty">
                  4.5
                </div>
              </span>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
          </div>
        </div>
    </div>

    <div className="col-sm-3 mb-4">
      <div className="cards">
            <img className="card-img-top" src="https://img.my-best.id/press_component/images/8023c2ca8ad4e0ed9af6f5c318a7fc0d.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max" style={{ height: '160px' }} alt="" />
              <div className="card-body">
                <div className="mt-4">
                  <span className='fw-bold'>Eyebrow</span>
                </div>
              <span className='text-secondary mb-1'>Wylash Glaw</span>
                <span className='star-desc'>
                  <Star /> 
                  <Star /> 
                  <Star /> 
                  <StarHalf /> 
                  <StarBorder /> 
                  <div className="rate-star-beauty">
                    3.5
                  </div>
                </span>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            </div>
          </div>
    </div>

    <div className="col-sm-3 mb-4">
      <div className="cards">
            <img className="card-img-top" src="https://img.my-best.id/press_component/images/8023c2ca8ad4e0ed9af6f5c318a7fc0d.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max" style={{ height: '160px' }} alt="" />
              <div className="card-body">
                <div className="mt-4">
                  <span className='fw-bold'>Eyebrow</span>
                </div>
              <span className='text-secondary mb-1'>Wylash Glaw</span>
                <span className='star-desc'>
                  <Star /> 
                  <Star /> 
                  <Star /> 
                  <StarHalf /> 
                  <StarBorder /> 
                  <div className="rate-star-beauty">
                    3.5
                  </div>
                </span>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            </div>
          </div>
    </div>

    <div className="col-sm-3 mb-4">
      <div className="cards">
            <img className="card-img-top" src="https://img.my-best.id/press_component/images/8023c2ca8ad4e0ed9af6f5c318a7fc0d.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max" style={{ height: '160px' }} alt="" />
              <div className="card-body">
                <div className="mt-4">
                  <span className='fw-bold'>Eyebrow</span>
                </div>
              <span className='text-secondary mb-1'>Wylash Glaw</span>
                <span className='star-desc'>
                  <Star /> 
                  <Star /> 
                  <Star /> 
                  <StarHalf /> 
                  <StarBorder /> 
                  <div className="rate-star-beauty">
                    3.5
                  </div>
                </span>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
            </div>
          </div>
    </div>

    </Slider>

    </div>
</div>
  )
}

export default RecBeauty