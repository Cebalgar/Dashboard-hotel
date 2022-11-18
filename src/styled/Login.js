import styled from "styled-components";

export const FormLogin= styled.form`
  margin-top: 40px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height:800px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

`
export const LogoContainer= styled.div`
margin-top: 100px;
width: 200px;
height: 200px;

`
export const H2 = styled.h2`
color: #e23428;
font-size: 40px;
line-height: 40px;
`;
export const Label = styled.label`
display: block;
text-align: left;
margin-top: 30px;
`;
export const Input = styled.input`
font-size: 18px;
padding: 5px;
margin-bottom: 30px;
border: none;
outline: none;
border-bottom: 2px solid #c5c5c5;
`;
export const Button = styled.button`
display: block;
border: none;
border-radius: 12px;
font-size: 18px;
padding: 10px 40px;
color: #135846;
background: #ebf1ef 0% 0% no-repeat padding-box;
margin: 0 auto;
&:hover {
  color: #ebf1ef;
  background-color: #135846;
}
`;