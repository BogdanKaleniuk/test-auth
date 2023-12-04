import React from "react";
import { HeaderContainer } from "../Header/Styled.Header";
import {
  LoginContainer,
  LoginImage,
  LoginForms,
  Form,
  Input,
  Button,
  HeroLogin,
  Label,
  ForgotPassword,
  SignUpLink,
  SignUp,
  StyledLink,
} from "./Styled.LoginForm";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate(); // Ініціалізуємо useNavigate

  const handleClickBack = () => {
    console.log("Click handleClickLog");
    navigate("/");
  };
  const handleClickSingUp = (e) => {
    e.preventDefault();
    console.log("click on handleClickSingUp");
  };

  return (
    <>
      <HeaderContainer>
        <StyledLink onClick={handleClickBack}>Back</StyledLink>
      </HeaderContainer>
      <LoginContainer>
        <LoginImage />
        <LoginForms>
          <Form>
            <HeroLogin>Login</HeroLogin>
            <Label thmlFor="email">Email</Label>
            <Input type="text" id="email" placeholder="Email"></Input>
            <Label thmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password"></Input>
            <ForgotPassword>Forgot password?</ForgotPassword>
            <Button type="submit" onClick={handleClickSingUp}>
              Sing In
            </Button>
            <SignUpLink>
              Don’t have account? <SignUp>Sign Up</SignUp>
            </SignUpLink>
          </Form>
        </LoginForms>
      </LoginContainer>
    </>
  );
};

export default LoginForm;
