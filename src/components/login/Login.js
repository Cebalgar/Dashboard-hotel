import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FormLogin,
  LogoContainer,
  H2,
  Label,
  Input,
  Button,
} from "../../styled/Login";
import logo from "../../images/logo.png";

export const Login = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [username, setUsername] = useState("celia");
  const [password, setPassword] = useState("12345");

  const users = [
    {
      username: "celia",
      password: "12345",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const account = users.find((user) => user.username === username);
    //console.log(account, username, password, users);

    if (account && account.password === password) {
      props.setAuth(true);

      let from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } else {
      props.setAuth(false);
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
        name="Username"
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
