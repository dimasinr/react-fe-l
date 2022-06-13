import './beautyindex.css'
import { Categories } from './../Category/Categories'
import { StarBorder, Star, StarHalf } from '@mui/icons-material';
import { Review } from './../Review/Review'
import RecTreatment from './../RecTreatment/RecTreatment'

export const BeautyBarIndex = () => {
const imgbar = 'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2000396572820/Felize%2520Beauty%2520Bar%2520Kedoya-41df1a25-26a9-4f8c-99bd-9fae30b74ce0.jpeg?tr=q-60,c-at_max,w-720,h-1280&_src=imagekit'
  return (
    <div>
      <div className="row mt-3">
        <div className='d-flex justify-content-between'>

        <div className="col-sm-2 col-lg-4 col-md-4 col-xs-12">
      <img className='card-img-top' src={imgbar} alt="" />
    </div>

    <div className="col-sm-2 col-lg-4 col-md-4 col-xs-12">
      <div className="ml-2">
        <span className="fw-600">
          Arthesia
        </span>
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
        <span>
        <p className='text-secondary bBarDesc mt-2'>Mall Bale Kota Lt.GB No.25A, Jl. Jenderal Sudirman, RT.002/RW.012, Buaran Indah, Kec. Tangerang, Kota Tangerang, Banten 15119</p>
        </span>
        <span className='open-hour'>
          Open Hours : <span style={{ color: 'red', marginLeft: '5px' }}>08.00 - 19.00</span>
        </span>
        <span className='text-seen-beautybar'>
        Terakhir login : 9 Jam yang lalu
        </span>
        <hr />
        <span>
          <p className='gallery' style={{ fontWeight: '500' }}>Gallery</p>
          <img height={'60px'} width={'60px'} src={imgbar} alt="" />          
        </span>
      </div>
    </div>

    <div className="col-sm-2 col-lg-4 col-md-4 col-xs-12">
      <span className='beautyBarTitle'>
      <p>
        Category Treatment
      </p>
      </span>
      <Categories />
    </div>
        </div>
      </div>

{/* Reviews Beauty Bar */}

<div>
  <span className="fw-500 rvw-rspnsv">
  Rating & Ulasan
  </span>
  <Review />
  <hr />
  <RecTreatment />
</div>

    </div>
  )
}
