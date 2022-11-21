import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import {
  FormLogin,
  LogoContainer,
  H2,
  Label,
  Input,
  Button,
} from "../../styled/Login";
import logo from "../../images/logo.png";




export const Login = () => {
  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const userData = [
  {
    username: 'celia@celia.es',
    password: '123456',
  },
  {
    username:'lidia@lidia.es',
    password:'789123'
  }

]

  const handleSubmit = (event) => {
    event.preventDefault();
    const account = userData.find((user) => user.username === username) && 
    userData.find((user) => user.password === password);
    
    if (account !== undefined) {
     dispatch(
      {
        type: 'Login', 
        payload:{
          username: account.username,
          password: account.password
        } 
      }
     );
    let from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
    } 
  };



  return (
    <FormLogin onSubmit={handleSubmit}>
      <LogoContainer>
        <img src={logo} alt="" />
      </LogoContainer>

      <H2>Login</H2>
      <Label>Username:</Label>
      <Input
        type="text"
        name="user"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        
      />
      <Label>Password:</Label>
      <Input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
      />
      <Button type="submit">Login</Button>
    </FormLogin>
  );
};
