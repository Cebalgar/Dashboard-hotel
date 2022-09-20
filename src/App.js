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
  let location = useLocation();

  if(!props.auth)
  return <Navigate to="/login" state={{ from: location }} replace/>
  
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
   
  

      <Routes>
              <Route path="login" element={<Login setAuth={setAuth} />} />

            
            <Route element={
              <PrivateRoute>
                <Navbar setAuth={setAuth}/>
              </PrivateRoute>
            }/>
      
              <Route path="/" 
              element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>}/>
              <Route path="/bookings" 
              element={
              <PrivateRoute>
                <Bookings/>
              </PrivateRoute>}/>
              <Route path="/bookings/:id" 
              element={
              <PrivateRoute>
                <BookingDetails/>
              </PrivateRoute>}/>
              <Route path="/bookings/new" 
              element={
              <PrivateRoute>
                <NewBooking/>
              </PrivateRoute>}
              />
              <Route path="/rooms"
               element={
              <PrivateRoute>
                <Rooms/>
              </PrivateRoute>}

              />
              <Route path="/rooms/:id" 
              element={
              <PrivateRoute>
                <RoomDetails/>
              </PrivateRoute>}

              />
              <Route path="/rooms/new" 
              element={
              <PrivateRoute>
                <NewRoom/>
              </PrivateRoute>}
              />
              <Route path="/users" 
              element={
              <PrivateRoute>
              <Users/>
              </PrivateRoute>}
              />
              <Route path="/users/id" 
              element={
              <PrivateRoute>
                <UserDetails/>
              </PrivateRoute>}
              />
              <Route path="users/new" 
              element={
              <PrivateRoute>
                <NewUser/>
              </PrivateRoute>}
              />
              <Route path="/contacts" 
              element={
              <PrivateRoute>
                <Contacts/>
              </PrivateRoute>}
              />
              <Route path="/contacts/:id" 
              element={
              <PrivateRoute>
                <ContactDetails/>
              </PrivateRoute>}
              />
  
      </Routes>
 

    </div>
  );
}

export default App;
