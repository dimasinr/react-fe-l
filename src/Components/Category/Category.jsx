import { Link } from 'react-router-dom'
// import Button from '@mui/material/Button';
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

export default function Category() {

// const api = 'http://localhost:3004/'

// const [ category, setCategory ] = useState([])

//   useEffect(() => {
//     axios.get(api+'category')
//     .then(res => {
//       console.log(res)
//     })
//     .catch(err =>{
//       console.log(err)
//     })
//   })

  return (
  <div>
    <div className="d-flex mt-4">
        <div className="row mb-4 justify-content-center md-res">

          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <Link to="/categories/eyelash" className='mse'>
              <div className="cards">
                <img className='card-img-top' src={process.env.PUBLIC_URL + '/imgIcon/category/eyelash.jpg'} alt="" srcSet="" />
                <div className="card-body">
                  <div className="mt-4">
                    <span className='fw-bold'>Eyelash</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <Link to="/#" className='mse'>
              <div className="cards">
                <img className='card-img-top' src={process.env.PUBLIC_URL + '/imgIcon/category/eyebrow.jpg'} alt="" srcSet="" />
                <div className="card-body">
                  <div className="mt-4">
                    <span className='fw-bold'>Eyebrow</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <Link to="/#" className='mse'>
              <div className="cards">
                <img className='card-img-top' src={process.env.PUBLIC_URL + '/imgIcon/category/nails.jpg'} alt="" srcSet="" />
                <div className="card-body">
                  <div className="mt-4">
                    <span className='fw-bold'>Nails</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <Link to="/#" className='mse'>
              <div className="cards md-t-1">
                <img className='card-img-top' src={process.env.PUBLIC_URL + '/imgIcon/category/waxing.jpg'} alt="" srcSet="" />
                <div className="card-body">
                  <div className="mt-4">
                    <span className='fw-bold'>Waxing</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>


        </div>
      </div>
    </div>
  );
}
