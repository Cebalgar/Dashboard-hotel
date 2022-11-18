import { useNavigate } from "react-router-dom";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { ButtonLogout } from "../../styled/Buttons";




export const LogOut = (props) => {
  let navigate = useNavigate();


    return (
    <>
      <ButtonLogout
        onClick={() => {
          props.setAuth(false);
          navigate("/");
        }}
      >
        <FiLogOut className="icon" />
      </ButtonLogout>
    </>
  );

  
};

