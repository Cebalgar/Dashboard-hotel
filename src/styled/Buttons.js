import styled from "styled-components"

export const Button = styled.button`
width: 70%;
max-width:160px;
height: 48px;
border-radius: 12px;
background:white;
font-family:poppins;
background:#135846;
color:#FFFFFF;

`;
export const ButtonEdit = styled(Button)`
background:#EBF1EF;
color: #135846;
margin-top: 10px;
margin-bottom: 10px;
border: none;

`;
export const ButtonViewNotes=styled(Button)`
color: #212121;
background-color: #EEF9F2;
border: none;
z-index: 0;
    &:hover{
        background:#ffffff;
        border: 1px solid #799283;
        color:#799283;
    }

`;
export const ButtonStatusBooking=styled(Button)`
color: ${(props) =>
    props.status === "In Progress"
      ? "#B66B13"
      : "" || props.status === "Check In"
      ? "#5AD07A"
      : "" || props.status === "Check Out"
      ? "#E23428"
      : ""};
  background-color: ${(props) =>
    props.status === "In Progress"
      ? "#FFFF4E"
      : "" || props.status === "Check In"
      ? "#E8FFEE"
      : "" || props.status === "Check Out"
      ? "#FFEDEC"
      : ""};
  width: 70%;
  font-size: 16px;
  font-weight: 400;
  margin: 16PX;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }

`;
export const ButtonStatusRoom=styled(Button)`
  color: white;
  font-size: 0.9vw;
  text-align: center;
  background-color: ${(props) =>
    props.status === "Available" ? "green" : "red"};
`;


export const ButtonStatusUser=styled(Button)`
  color:${(props) =>
    props.status === "Active" ? "green" : "red"} ;
  text-align: center;
  background-color: transparent;
  border: none;
`;

export const ButtonMenu = styled.button`
  background: transparent;
  border-radius: 12px;
  border: none;
  color: #6E6E6E;
  font-size: 14px;
  margin: auto;
  margin-right: 20px;
  height: 55px;
  width: 120px;
 
  &:hover{
    color:#135846;
   
  }
 
`;












