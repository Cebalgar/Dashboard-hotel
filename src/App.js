import Dashboard  from "./components/Dashboard";
import Navbar from "./components/Navbar";

import Bookings from "./components/bookings/Bookings";
import BookingDetails from "./components/bookings/BookingDetails";
import NewBooking from "./components/bookings/NewBooking";

import Rooms from "./components/rooms/Rooms";
import RoomDetails from "./components/rooms/RoomDetails";
import NewRoom from "./components/rooms/NewRoom";

import Users from "./components/users/Users";
import UserDetails from "./components/users/UserDetails";
import NewUser from "./components/users/NewUser";

import Contacts from "./components/contacts/Contacts";
import ContactDetails from "./components/contacts/ContactDetails";

import { Navigate, Route, Routes } from "react-router-dom";
import {Login} from "./components/login/Login"

import { useEffect,useState } from "react";

import './App.css';


function PrivateRoute(props){
  if(!props.auth)
  return <Navigate to="/login" state={{ from: window.location }}replace/>
  
  return props.children;
}



function App() {

const [auth, setAuth]= useState(localStorage.getItem('auth') !== null);

useEffect(()=>{
  if(auth){
    localStorage.setItem('auth', '1');
  }
  localStorage.removeItem('auth')
},[auth]);

  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path="/rooms" element={(<PrivateRoute auth={auth}>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
      <Route path="/bookings/:id" element={<BookingDetails/>}/>
      <Route path="/bookings/new" element={<NewBooking/>}/>
      <Route path="/rooms" element={<Rooms/>}/>
      <Route path="/rooms/:id" element={<RoomDetails/>}/>
      <Route path="/rooms/new" element={<NewRoom/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/users/id" element={<UserDetails/>}/>
      <Route path="users/new" element={<NewUser/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/contacts/:id" element={<ContactDetails/>}/>
   
    </Routes>
    </PrivateRoute>
     )}/>
     <Route path="login" element={<Login setAuth={setAuth}/>}/>
     </Routes>
    </div>
  );
}

export default App;
