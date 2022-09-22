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

import { Navigate, Route, Routes,useLocation } from "react-router-dom";
import {Login} from "./components/login/Login"

import { useEffect,useState } from "react";

import './App.css';


function PrivateRoute(props){
  const location = useLocation();

  if(!props.auth)
  return <Navigate to="/login" state={{ from: location }} replace/>;
  
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
            <Route path="login" element={<Login setAuth={setAuth} />} />
            <Route element={
              <PrivateRoute>
                <Navbar setAuth={setAuth} auth={auth}/>
              </PrivateRoute>
            }/> 
      
              <Route path="/" 
              element={
              <PrivateRoute auth={auth}>
                <Dashboard/>
              </PrivateRoute>}
             />
              <Route path="/bookings" 
              element={
              <PrivateRoute auth={auth}>
                <Bookings/>
              </PrivateRoute>
              }/>
              <Route path="/bookings/:id" 
              element={
              <PrivateRoute auth={auth}>
                <BookingDetails/>
              </PrivateRoute>}/>
              <Route path="/bookings/new" 
              element={
              <PrivateRoute auth={auth}>
                <NewBooking/>
              </PrivateRoute>}
              />
              <Route path="/rooms"
               element={
             <PrivateRoute auth={auth}>
               <Rooms/>
             </PrivateRoute>}
               />
              <Route path="/rooms/:id" 
              element={
              <PrivateRoute auth={auth}>
                <RoomDetails/>
              </PrivateRoute>}
              />
              <Route path="/rooms/new" 
              element={
              <PrivateRoute auth={auth}>
                <NewRoom/>
              </PrivateRoute>}
              />
              <Route path="/users" 
              element={
              <PrivateRoute auth={auth}>
                <Users/>
              </PrivateRoute>}
              />
              <Route path="/users/id" 
              element={
              <PrivateRoute auth={auth}>
                <UserDetails/>
              </PrivateRoute>}
              />
              <Route path="users/new" 
              element={
              <PrivateRoute auth={auth}>
                <NewUser/>
              </PrivateRoute>}
              />
              <Route path="/contacts" 
              element={
              <PrivateRoute auth={auth}>
                <Contacts/>
              </PrivateRoute>}
              />
              <Route path="/contacts/:id" 
              element={
              <PrivateRoute auth={auth}>
                <ContactDetails/>
              </PrivateRoute>}
              />
  
      </Routes>
 

    </div>
  );
}

export default App;
