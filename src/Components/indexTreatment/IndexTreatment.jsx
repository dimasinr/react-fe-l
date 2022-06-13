import { Star, StarBorder } from '@mui/icons-material'
import { Review } from './../Review/Review'
import Date from './../Date/Date'
import RecTreatment from './../RecTreatment/RecTreatment'
import './indextreatment.css'

export const IndexTreatment = () => {
const imgtreat = 'https://static.wixstatic.com/media/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg'
  return (
    <div>
    <div className="row mt-3">
      <div className='d-flex justify-content-between'>

      <div className="col-sm-2 col-lg-4 col-md-4 col-xs-12">
    <img className='card-img-top' height={'300px'} width={'300px'} src={imgtreat} alt="" />
  </div>

  <div className="col-sm-2 col-lg-4 col-md-4 col-xs-12">
    <div className="ml-2">
      <span className="fw-600">
        Eyelash Extension
      </span>
      <br />
      <span>
        Kana Studio
      </span>
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
          <img height={'60px'} width={'60px'} src={imgtreat} alt="" />          
        </span>
    </div>
  </div>

  <div className="col-sm-2 col-lg-4 col-md-4 col-xs-12">
    <span className='beautyBarTitle'>
    <p>
      Jam Booking Treatment
    </p>
    </span>
    <Date />
  </div>
      </div>
    </div>

{/* Reviews Beauty Bar */}

    <div className='mt-tre'>
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
