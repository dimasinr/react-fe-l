import React from 'react'
import './treatmentpages.css'
import { Star, StarBorder } from '@mui/icons-material'
import { Review } from './../../Components/Review/Review'
import RecomendTreatment from './../../Components/RecomendTreatment/RecomendTreatment'
import TanggalBook from './../../Components/Pembookingan/TanggalBook/TanggalBook'
import { Container } from 'react-bootstrap'
import { NavbarAll } from './../../Components/Navbar/NavbarAll'
 
function TreatmentPages() {
    const imgtreat = 'https://static.wixstatic.com/media/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg'
  
return (
    <div>
      <NavbarAll />
        <Container>
          <div className="row mt-3">
          <div className='d-flex justify-content-between'>
    
          <div className="col-sm-2 col-lg-4 col-md-4 col-xs-12">
        <img className='card-img-top' height={'380px'} width={'300px'} src={imgtreat} alt="" />
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
            <span className='desc-price'>
            Rp 300,000
          </span> 
          <span className='text-seen-beautybar'>
            <p>Perkiraan Waktu Pengerjaan : 2 Jam</p>
          </span>     
          <span>
          <p className='text-secondary bBarDesc mt-2'>
          Buat kuku anda menjadi lebih cantik dengan
          nails treatment dari kami, kuku anda akan mak
          jrengg
          </p>
          </span>
    
            <hr />
            <span>
              <p className='gallery' style={{ fontWeight: '500' }}>Gallery</p>
              <img height={'60px'} width={'60px'} src={imgtreat} alt="" />          
            </span>
        </div>
      </div>
          <TanggalBook />
        </div>
        </div>
    
    {/* Reviews Beauty Bar */}
    
        <div className='mt-tre'>
        <span className="fw-500 rvw-rspnsv">
            Rating & Ulasan
        </span>
        <Review />
        <RecomendTreatment />
        </div>
          </Container>
    
    </div>
    )
}

export default TreatmentPages