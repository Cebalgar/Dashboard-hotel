import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [page, setPage] = useState('Dashboard')

  return (
    <>

  <Link to={`/`} onClick={() => setPage("Dashboard")}> Dashboard</Link>
  <Link to={`/room`} onClick={() => setPage("Rooms")}> Rooms </Link>
  <Link to={`/booking`} onClick={() => setPage("Bookings")}>Bookings </Link> 
  <Link to={`/user`} onClick={() => setPage("Users")}>Users</Link>
  <Link to={`/contact`} onClick={() => setPage("Contact")}>Contact </Link>
</>
  )
}

export default Navbar