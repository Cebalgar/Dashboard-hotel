import styled from "styled-components";

export const Button = styled.button`
  padding-left: 20px;
  padding-right: 20px;
  max-width: 160px;
  height: 48px;
  border-radius: 12px;
  background: white;
  font-family: poppins;
  background: #135846;
  color: #ffffff;
`;
export const ButtonEdit = styled(Button)`
  background: #ebf1ef;
  color: #135846;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
`;
export const ButtonViewNotes = styled(Button)`
  color: #212121;
  background-color: #eef9f2;
  border: none;
  &:hover {
    background: #ffffff;
    border: 1px solid #799283;
    color: #799283;
  }
`;
export const ButtonStatusBooking = styled(Button)`
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
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
export const ButtonStatusRoom = styled(Button)`
  padding-left:10px;
  padding-right:10px;
  color: white;
  font-size: 14px;
  background-color: ${(props) =>
    props.status === "Available" ? "green" : "red"};
`;

export const ButtonStatusUser = styled(Button)`
  color: ${(props) => (props.status === "Active" ? "green" : "red")};
  background-color: transparent;
  border: none;
`;

export const ButtonMenu = styled.button`
  background: transparent;
  border-radius: 12px;
  border: none;
  color: #6e6e6e;
  font-size: 14px;
  margin: auto;
  margin-right: 20px;
  height: 55px;
  width: 120px;

  &:hover {
    color: #135846;
  }
`;
