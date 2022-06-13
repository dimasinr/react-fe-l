import * as ReactBootstrap from 'react-bootstrap'
import { NavbarMin } from "../../Components/Navbar/NavbarMin"
import { BeautyBarIndex } from '../../Components/indexBeautyBar/BeautyBarIndex'
import { BreadCumbs } from '../../Components/BreadCumbs/BreadCumbs'
import Footer from './../../Components/Footer/Footer'


function BeautyBar() {
  return (
    <div>
      <NavbarMin />
      <ReactBootstrap.Container>
        <BreadCumbs />
        <BeautyBarIndex />
      </ReactBootstrap.Container>
      <Footer />
    </div>
  )
}

export default BeautyBar