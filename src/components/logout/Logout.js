
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { ButtonLogout } from "../../styled/Buttons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


export const LogOut = () => {

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "Logout"
    })
    navigate("/login", { replace: true });
  }

    return (
    <>
 
      <ButtonLogout
        onClick={handleLogout} >
        <FiLogOut className="icon" />
    
      </ButtonLogout>
    </>
  );

  
};

