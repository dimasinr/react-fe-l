import Navbar from '../../Components/Navbar/NavbarHome'
import Footer from './../../Components/Footer/Footer'
import Category from './../..//Components/Category/Category'
import { TopBeautyBar } from '../../Components/BeautyBar/TopBeautyBar'
import RecTreatment from '../../Components/RecTreatment/RecTreatment'
import * as ReactBootstrap from 'react-bootstrap'
import { Header } from '../../Components/Header/Header'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <ReactBootstrap.Container>
      <div className="mb-2 mt-4">
      <h2 className='fw-bold mt-4'>Categories Treatment</h2>
    </div>
      <Category />
      <hr />
      <TopBeautyBar />
      <hr />
      <RecTreatment />
      <hr />
      </ReactBootstrap.Container>
      <Footer />
    </div>
  )
}

export default Home