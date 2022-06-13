import React from 'react'
import './footer.css'

const Footer = () => {
  const logoImage = require('./../img/logoputih.png');

    return (
        <div className='footer'>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className='justify-content-center'>
                <img className='logo' src={logoImage} alt="lolab" />
                <p>© 2020 - 2022 Lolab All Rights Reserved Powered By PT Nawastra Teknologi Nimpuna</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <ul className='noes'>
                  <li>Help Center</li>
                  <li>Contact Us</li>
                  <li>Terms & Conditition</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <p className="text-white">
                    Download
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Footer