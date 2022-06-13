import './beauty.css'
import { Link } from 'react-router-dom'
import { StarBorder, Star, StarHalf } from '@mui/icons-material';

export const BeautyBar = () => {
  const bb1 = 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000396572820/Felize%2520Beauty%2520Bar%2520Kedoya-41df1a25-26a9-4f8c-99bd-9fae30b74ce0.jpeg?tr=q-60,c-at_max,w-720,h-1280&_src=imagekit';

return (
    <div>
      <div>
    <div className="mb-4 d-flex">
    <h2>Top Beauty Bar</h2> <button className='ml-1 beauty-btn' style={{ fontWeight: '600' }}>See All Beauty Bar</button>

    </div>

   <div className="row mb-4 col-md-12 ml-auto md-res">

   <div className="col-sm-3 mb-4">
     <Link to="/beautybar/arthesia" style={{ textDecoration: 'none', color: 'black' }}>
     <div className="cards">
          <img className='card-img-top' src={bb1} alt="" srcset="" />
        <div className="card-body">
          <div className="mt-4">
              <span className='fw-bold'>Arthesia</span>
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
          <span className='open-hour mt-1'>Open Hours :  <span style={{ color: 'red', marginLeft: '5px'  }}>09.00 - 18.00</span> </span>
        <span className='text-seen-beautybar'>
          Terakhir login : 9 Jam yang lalu
        </span>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
          </div> 
        </div>
      </div>
     </Link>
    </div>

      </div>

</div>
    </div>
  )
}
