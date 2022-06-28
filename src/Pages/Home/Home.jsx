import * as ReactBootstrap from 'react-bootstrap'
import Navbar from '../../Components/Navbar/NavbarHome'
import { Header } from '../../Components/Header/Header'
import Categories from './../..//Components/Categories/Categories'
import { TopBeautyBar } from '../../Components/TopBeautyBar/TopBeautyBar'
import RecomendTreatment from '../../Components/RecomendTreatment/RecomendTreatment'
import Footer from './../../Components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <ReactBootstrap.Container>
      <div className="mb-4 mt-4">
      <h2 className='fw-bold mt-4'>Categories Treatment</h2>
    </div>
      <Categories />
      <hr />
      <TopBeautyBar />
      <hr />
      <RecomendTreatment />
      <hr />
      </ReactBootstrap.Container>
      <Footer />
    </div>
  )
}

export default Home