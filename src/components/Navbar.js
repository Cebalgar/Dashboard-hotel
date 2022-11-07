import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaExchangeAlt } from "@react-icons/all-files/fa/FaExchangeAlt";
import { AiOutlineKey } from "@react-icons/all-files/ai/AiOutlineKey";
import { AiOutlineCalendar } from "@react-icons/all-files/ai/AiOutlineCalendar";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { BiMessageCheck } from "@react-icons/all-files/bi/BiMessageCheck";
import { RiDashboardLine } from "@react-icons/all-files/ri/RiDashboardLine";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaRegBell } from "@react-icons/all-files/fa/FaRegBell";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import {LogOut} from "./logout/Logout"
import icon from "../images/icon.png";
import img from "../images/img.png"


import {
  SideBar,
  SideBarNav,
  Logo,
  H2,
  UserContainer,
  ImgContainer,
  H3,
  H4,
  H5,
} from "../styled/SideBar";
import { NavbTop, NavbarIcons, IconArrows, H6 } from "../styled/NavbTop";
import { ButtonEdit } from "../styled/Buttons";


const Navbar = ({setAuth}) => {
  const [sidebar, setSidebar] = useState(true);
  const [page, setPage] = useState("");

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <>
      <SideBar sidebar={sidebar}>
        <Logo>
          <img src={icon} alt="logo" />
          <H2>
            travl<span>Hotel Admin Dashboard</span>
          </H2>
        </Logo>

        <SideBarNav>
          <li>
            <Link to="/" onClick={() => setPage("Dashboard")}>
              <RiDashboardLine className="icon" />
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/rooms" onClick={() => setPage("Rooms")}>
              <AiOutlineKey className="icon" />
              Rooms{" "}
            </Link>
          </li>

          <li>
            <Link to="/bookings" onClick={() => setPage("Bookings")}>
              <AiOutlineCalendar className="icon" />
              Bookings{" "}
            </Link>
          </li>

          <li>
            <Link to="/users" onClick={() => setPage("Users")}>
              <FiUser className="icon" />
              Users
            </Link>
          </li>
         
          <li>
            <Link to="/contacts" onClick={() => setPage("Contact")}>
              <BiMessageCheck className="icon" /> Contact{" "}
            </Link>
          </li>

          <li>
            <UserContainer>
              <ImgContainer>
              <img src={img} alt=""/>
              </ImgContainer>
               
              <H3>Celia García</H3>
              <span>cebalgar@gmail.net</span>

              <ButtonEdit>Edit</ButtonEdit>
            </UserContainer>
          </li>
          <li>
            <H4>
              Travl Hotel Admin Dashboard
              <span>&copy; 2022 All Rights Reserved</span>
            </H4>
          </li>

          <li>
            <H5>
              Made with <FaHeart></FaHeart> by Cebalgar
            </H5>
          </li>
        </SideBarNav>
      </SideBar>

      <NavbTop sidebar={sidebar}>
        <NavbarIcons>
          <IconArrows>
            <FaExchangeAlt onClick={showSiderbar} />
          </IconArrows>
          <H6>{page}</H6>
        </NavbarIcons>
        <NavbarIcons>
          <Link to="/contacts" onClick={() => setPage("Contact")}>
            <FaRegEnvelope className="icon" />
          </Link>

          <Link to="/bookings" onClick={() => setPage("Bookings")}>
            <FaRegBell className="icon" />
          </Link>
          
          <LogOut setAuth={setAuth} />
      
        </NavbarIcons>
      </NavbTop>
    </>
  );
};

export default Navbar;
