import React from 'react'
import { Star, StarBorder } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { NavbarAll } from '../../Components/Navbar/NavbarAll' 

function CategoryPages() {
  return (
    <div>
        <NavbarAll />
        <Container>
        <div className="mt-4 mb-1">
            <span>
                <h4>Eyelash</h4>
            </span>
        </div>

        <div className="row">

            <div className="col-md-4 col-lg-4 col-xs-12 mt-3">
                <Link to="/treatment/eyelash+extension" className='mse'>
                <div className="cards">
                <img className="card-img-top" src="https://static.wixstatic.com/media/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg" alt="" />
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
                    3.5
                    </div>
                    </span>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                    </div>
                </div>
                </Link>
            </div>

            <div className="col-md-4 col-lg-4 col-xs-12 mt-3">
                <div className="cards">
                <img className="card-img-top" src="https://static.wixstatic.com/media/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg" alt="" />
                    <div className="card-body">
                    <div className="mt-4">
                    <span className='fw-bold'>Eyelash Extension</span>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                    </div> 
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-lg-4 col-xs-12 mt-3">
                <div className="cards">
                <img className="card-img-top" src="https://static.wixstatic.com/media/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg" alt="" />
                    <div className="card-body">
                    <div className="mt-4">
                    <span className='fw-bold'>Eyelash Extension</span>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                    </div> 
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-lg-4 col-xs-12 mt-3">
                <div className="cards">
                <img className="card-img-top" src="https://static.wixstatic.com/media/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_2d8875e275244e04b3b79405f036a778~mv2.jpg" alt="" />
                    <div className="card-body">
                    <div className="mt-4">
                    <span className='fw-bold'>Eyelash Extension</span>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
                    </div> 
                    </div>
                </div>
            </div>

        </div>
        </Container>
    </div>
  )
}

export default CategoryPages