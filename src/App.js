import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

import Bookings from "./pages/bookings/Bookings";
import BookingDetails from "./pages/bookings/BookingDetails";
import NewBooking from "./pages/bookings/NewBooking";

import Rooms from "./pages/rooms/Rooms";
import RoomDetails from "./pages/rooms/RoomDetails";
import NewRoom from "./pages/rooms/NewRoom";

import Users from "./pages/users/Users";
import UserDetails from "./pages/users/UserDetails";
import NewUser from "./pages/users/NewUser";

import Contacts from "./pages/contacts/Contacts";
import ContactDetails from "./pages/contacts/ContactDetails";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Login } from "./components/login/Login";

import { useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext"

import "./App.css";

function PrivateRoute({children}) {
  const {auth} = useContext(AuthContext);
  const location = useLocation();

  if (!auth)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
};

function App() {
  const {auth} = useContext(AuthContext);


  useEffect(() => {
    if (auth) {
      localStorage.setItem("AuthUsers", JSON.stringify(auth));
    }
    localStorage.removeItem("AuthUsers");
  }, [auth]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          element={
            <PrivateRoute>
              <Navbar auth={auth} />
            </PrivateRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute auth={auth}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <PrivateRoute auth={auth}>
              <Bookings />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookings/:id"
          element={
            <PrivateRoute auth={auth}>
              <BookingDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookings/new"
          element={
            <PrivateRoute auth={auth}>
              <NewBooking />
            </PrivateRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <PrivateRoute auth={auth}>
              <DndProvider backend={HTML5Backend}>
                <Rooms />
              </DndProvider>
            </PrivateRoute>
          }
        />
        <Route
          path="/rooms/:id"
          element={
            <PrivateRoute auth={auth}>
              <RoomDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/rooms/new"
          element={
            <PrivateRoute auth={auth}>
              <NewRoom />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute auth={auth}>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/id"
          element={
            <PrivateRoute auth={auth}>
              <UserDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="users/new"
          element={
            <PrivateRoute auth={auth}>
              <NewUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute auth={auth}>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts/:id"
          element={
            <PrivateRoute auth={auth}>
              <ContactDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
