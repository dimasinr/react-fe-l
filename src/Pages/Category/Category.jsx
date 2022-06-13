import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { NavbarMin } from '../../Components/Navbar/NavbarMin'
import { BreadCumbs } from '../../Components/BreadCumbs/BreadCumbs'
import { IndexCategory } from '../../Components/indexCategory/IndexCategory'

function Category() {
  return (
    <div>
        <NavbarMin />
        <ReactBootstrap.Container>
        <BreadCumbs />
        <IndexCategory />
        </ReactBootstrap.Container>
    </div>
  )
}

export default Category