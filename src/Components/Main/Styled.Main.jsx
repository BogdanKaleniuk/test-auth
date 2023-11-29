import styled from "styled-components";
import YourImage from "../../images/hero1x.png";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 1024px;
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${YourImage});
  background-size: cover;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.6;
    z-index: 1;
  }
`;

export const OverlayContent = styled.div`
  margin-top: 300px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const HeroText = styled.h1`
  margin-bottom: 0px;
  color: #ffffff;
  font-size: 64px;
  font-family: Merriweather;
  line-height: 1.25; /* 125% */
`;

export const Text = styled.p`
  margin-top: 10px;
  width: 752px;
  color: #ffffff;
  font-family: Lato;
  font-size: 24px;
  line-height: 1.33;
  margin: 0 auto;
  letter-spacing: -0.48px;
`;

export const Button = styled.button`
  border: 1px solid #fff;
  border-radius: 8px;
  color: #fff;
  padding: 10px 24px;
  background-color: inherit;
  margin-top: 30px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7; /* 170% */
  cursor: pointer;
`;
