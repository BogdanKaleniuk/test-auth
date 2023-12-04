import React from "react";
import {
  MainContainer,
  OverlayContent,
  HeroText,
  Text,
  Button,
} from "./Styled.Main";
import Header from "../Header/Header";
import Deals from "../Deals/Deals";

const Main = () => {
  const buttonMain = () => {
    console.log("Click on buttonMain");
  };

  return (
    <>
      <MainContainer>
        <Header />
        <OverlayContent>
          <div>
            <HeroText>The chemical negatively charged</HeroText>
            <Text>
              Numerous calculations predict, and experiments confirm, that the
              force field reflects the beam, while the mass defect is not
              formed. The chemical compound is negatively charged. Twhile the
              mass defect is
            </Text>
          </div>
          <Button onClick={buttonMain}>Get Started</Button>
        </OverlayContent>
      </MainContainer>
      <Deals />
    </>
  );
};

export default Main;
