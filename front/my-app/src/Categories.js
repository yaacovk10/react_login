import React from 'react'
import { getStudents } from './myData'
import {  Link, Outlet} from "react-router-dom"

const Categories = () => {
 
  return (
    <div>Categories
      <Link to={'/categories/1'}>Bakery</Link>
      <Link to={'/categories/3'}>Dairy</Link>

        {/* {getStudents().map(cat => <div><Link to={'/categories/products'}>{cat.name}</Link><br/></div>)} */}
        <hr></hr>
      <Outlet></Outlet>
    </div>
  )
}

export default Categories