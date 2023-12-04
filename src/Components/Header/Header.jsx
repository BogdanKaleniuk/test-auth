import React from "react";
import { Button, HeaderContainer } from "./Styled.Header";
import { useNavigate } from "react-router-dom"; // Імпортуємо useNavigate

const Header = () => {
  const navigate = useNavigate(); // Ініціалізуємо useNavigate

  const handleClickLog = () => {
    console.log("Click handleClickLog");
    navigate("/login");
  };

  const handleClickSign = () => {
    console.log("Click handleClickSign");
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Button>
        <button onClick={handleClickLog}>Log In</button>
        <button onClick={handleClickSign}>Sign Up</button>
      </Button>
    </HeaderContainer>
  );
};

export default Header;
