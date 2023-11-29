import React from "react";
import { Button, HeaderContainer } from "./Styled.Header";

const Header = () => {
  const handleClickLog = () => {
    console.log("Click handleClickLog");
  };

  const handleClickSign = () => {
    console.log("Click handleClickSign");
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
