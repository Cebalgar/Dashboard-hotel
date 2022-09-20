import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <>


  <Link to="/">Dashboard</Link>
  <Link to="/rooms"> Rooms </Link>
  <Link to="/bookings"> Bookings </Link>
  <Link to="/users"> Users </Link>
  <Link to="/contacts"> Contacts </Link>

 </>
  )
}

export default Navbar