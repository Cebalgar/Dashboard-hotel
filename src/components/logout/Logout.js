import { useNavigate } from "react-router-dom";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import styled from "styled-components";

const ButtonOut = styled.button`
  border: none;
  font-size: 1.9rem;
  color: #135846;
  background: transparent;
`;

export const LogOut = (props) => {
  let navigate = useNavigate();


    return (
    <>
      <ButtonOut
        onClick={() => {
          props.setAuth(false);
          navigate("/");
        }}
      >
        <FiLogOut className="icon" />
      </ButtonOut>
    </>
  );

  
};

