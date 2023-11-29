import React from "react";
import { HeaderContainer } from "../Header/Styled.Header";
import {
  LoginContainer,
  LoginImage,
  LoginForm,
  Form,
  Input,
  Button,
  HeroLogin,
  Label,
  ForgotPassword,
  SignUpLink,
  SignUp,
} from "./Styled.Login";

const Login = () => {
  const handleClickSingUp = (e) => {
    e.preventDefault();
    console.log("click on handleClickSingUp");
  };

  return (
    <>
      <HeaderContainer />
      <LoginContainer>
        <LoginImage />
        <LoginForm>
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
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default Login;
