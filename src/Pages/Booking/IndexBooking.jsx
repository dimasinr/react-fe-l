import React from 'react'
import { NavbarMin } from './../../Components/Navbar/NavbarMin'
import { Container } from 'react-bootstrap'
import { IndexTreatment } from '../../Components/indexTreatment/IndexTreatment'

function IndexBooking() {
  return (
    <div>
        <NavbarMin />
        <Container>
        <IndexTreatment />
        </Container>
    </div>
  )
}

export default IndexBooking