import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

function pages404() {
    const emblem = require('./../../Components/img/emblem-hijau.png');

    return (
    <div>
        <div className='header-login'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 320"><path fill="#A6CFCA" fillOpacity="1" d="M0,160L40,138.7C80,117,160,75,240,80C320,85,400,139,480,181.3C560,224,640,256,720,266.7C800,277,880,267,960,256C1040,245,1120,235,1200,202.7C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </div>
        <div className="col-md-4">
            <div>
            <img className="emblem-error" src={emblem} alt="" />
            </div>                
        </div>
       <div className="d-flex justify-content-center">
        <div className="mt-pages-error">
        <div className="align-items-center">
        <h1 className='font-ep'>Error 404</h1>
        <br />
        <h3>Sorry, This Pages Can't be Access</h3> 
        <div>
        <hr />
        <Link to="/">
        <button className='login-btn'>
            Click Here!
        </button>
        </Link>
        </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default pages404