import './treatment.css'
import { NavbarMin } from '../../Components/Navbar/NavbarMin'
import { BeautyBarIndex } from '../../Components/indexBeautyBar/BeautyBarIndex'
import * as ReactBootstrap from 'react-bootstrap'

function Treatment() {
  return (
    <div>
        <NavbarMin />
        <ReactBootstrap.Container className='mt-4'>
        <BeautyBarIndex />
        </ReactBootstrap.Container>
    </div>
  )
}

export default Treatment
