import JamBook from "./../JamBook/JamBook"
import Date from './../Date/Date'
import { useNavigate } from 'react-router-dom'

export default function TanggalBook() {

    const navigate = useNavigate()

    const handleBooking = () => {
      navigate('/booking/eyelash+extension')
    }

  return (
    <div>
        <div className="ml-4">
            <div className="col-sm-4 col-lg-4 col-md-4 col-xs-12">
                <div className="mt-4 d-flex">
                    <div className="card-body">
                        <span className='jamTitle'>
                        <p>
                        Pilih Tanggal & Jam Booking Treatment
                        </p>
                        </span>
                    <Date className="d-flex" style={{ zIndex: '-999' }} />
                    <JamBook style={{ zIndex: '9999' }} className="m-jam d-flex jusitfy-content-center" />
                    <div className='justify-content-end' style={{ display: 'flex' }}>
                        <button onClick={handleBooking} className='login-btn mt-4 fw-bold'>Book</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
