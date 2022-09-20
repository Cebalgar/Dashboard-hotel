
import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import styled from "styled-components";



export const Login = (props) => {
const navigate = useNavigate();
const location = useLocation();

  
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

//const users =[{
    //username:"celia",
    //password: "12345"
//}]


    const handleSubmit = event =>{
        event.preventDefault();
        // const account = users.find((user)=> user.username === username);
       // console.log(account, username, password, users);
        
        if(username === "celia" && password === "12345"){
            props.setAuth(true);
            const from = location.state?.from?.pathname || "/";
            navigate(from, {replace:true}) ;  
          }else{
            props.setAuth(false);
          }
    }

    const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #f8f8f8;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    justify-content: center;
    text-align: center;
    `;
    const Subcontainer = styled.div`
    position: absolute;
    top: 45vh;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    box-shadow: 0px 16px 30px #00000014;
    `;
    const Form = styled.form`
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    `;
    const H2 = styled.h2`
    color: #e23428;
    line-height: 30px;
    cursor: default;
    `;
    const Label = styled.label`
    display: block;
    text-align: left;
    `;
    const Input = styled.input`
    font-size: 18px;
    padding: 5px;
    margin-bottom: 30px;
    border: none;
    outline: none;
    border-bottom: 2px solid #c5c5c5;
    `;
    const Button = styled.button`
    display: block;
    border: none;
    border-radius: 12px;
    font-family: "Poppins", sans-serif;
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
    const P = styled.p`
    font-size: 12px;
    `;

  return (
    <Container>
      <Subcontainer>
        <Form onSubmit={handleSubmit}>
          <img src="" alt="" />
          <H2>Login</H2>
          <Label>
            Username:
          </Label>
          <Input 
          type="text" 
          name="Username" 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          required
           />
          <Label>
            Password:
          </Label>
          <Input 
          type="password" 
          name="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
            />
          <Button type="submit">
            Login
          </Button>
          <P>click "Login"</P>
          </Form>
      </Subcontainer>
    </Container>
  );
};