import './review.css'
import { Star, StarBorder } from '@mui/icons-material'

export const Review = () => {
  return (
    <div className='mt-4 mb-4'>
      <div className='d-flex'>
        <img className="user-profile-review" src="https://cf.shopee.co.id/file/e8ee7f968a98771fd065d777638eab0f" alt="" />
       <div className="ml-2">
      <span className='rev-name'>Rachell</span>
        <p className='rev-date'>
        09/06/2022
        </p>
       </div>
       <div className='comment-user'>
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
            <p>
              Lolab adalah salah satu aplikasi yang bantu hoya mengembangkan sayapnya di industri kecantikan. Saya pribadi sbgai owner punya harapan besar hoya bisa besar namanya dgn lolab. Krna customer jg sangat2 merasa terbantu apalagi dgn voucer2 yang diberikan (Hoya Beauty Studio) // Aplikasinya bagus, mudah digunakan, Saya banyak dapat pelanggan dari Aplikasi Lolab, thank you Lolab
            </p>
          </span>
          <span>
            <img 
            height={'50px'}
            width={'50px'}
            style={{ marginLeft: '12px' }}
            src="https://static.wixstatic.com/media/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg" alt="" />
          </span>
        </div>
      </div>
      <hr />
      <div className='d-flex'>
        <img className="user-profile-review" src="https://cf.shopee.co.id/file/e8ee7f968a98771fd065d777638eab0f" alt="" />
       <div className="ml-2">
        <span className='rev-name'>Nama</span>
        <p className='rev-date'>
        09/06/2022
        </p>
       </div>
       <div className='comment-user'>
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
            <p>
              Uwaaaasss
            </p>
          </span>
          <span>
            <img 
            height={'50px'}
            width={'50px'}
            style={{ marginLeft: '12px' }}
            src="https://static.wixstatic.com/media/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg" alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}
