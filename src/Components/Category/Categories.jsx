import './category.css'
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <div>
    <div className="d-flex mt-4">
        <div className="row mb-4 justify-content-center md-res" style={{ gap: '100px', display: 'flex' }}>

          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <Link to="/categories/eyelash" className='mse'>
              <div className="cards" style={{width: '120px'}}>
                <img className='card-img-top' src={process.env.PUBLIC_URL + '/imgIcon/category/eyelash.jpg'} alt="" srcset="" />
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
              <div className="cards" style={{width: '120px'}}>
                <img className='card-img-top' src={process.env.PUBLIC_URL + '/imgIcon/category/eyebrow.jpg'} alt="" srcset="" />
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
              <div className="cards" style={{width: '120px'}}>
                <img className='card-img-top' src={process.env.PUBLIC_URL + '/imgIcon/category/nails.jpg'} alt="" srcset="" />
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
              <div className="cards md-t-1" style={{width: '120px'}}>
                <img className='card-img-top' src={process.env.PUBLIC_URL + '/imgIcon/category/waxing.jpg'} alt="" srcset="" />
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

  )
}
