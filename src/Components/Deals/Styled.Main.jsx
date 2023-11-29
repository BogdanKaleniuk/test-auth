import styled from "styled-components";

export const DealsContainer = styled.div`
  width: 1280px;
  margin: 0 auto; /* Це центрує контейнер відносно батьківського елемента */
`;

export const HeroText = styled.div`
  margin-top: 50px;
  color: #b29f7e;
  font-family: Merriweather;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;
`;

export const DealsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

export const DealItem = styled.li`
  position: relative;
  width: calc(50% - 10px);
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const DealInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
`;

export const DealDescription = styled.ul`
  justify-content: space-between;

  display: flex;
  list-style: none;
  margin: 5px 0;
  padding: 0;
`;
export const DescriptionAbout = styled.li`
  align-self: ${(props) => (props.isLast ? "center" : "flex-end")};
  margin-bottom: ${(props) => (props.isLast ? "20px" : "0")};
`;

export const DescriptionAboutTextHero = styled.p`
  margin: 0;
  color: #ffffff;
  font-family: Merriweather;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;
`;

export const DescriptionAboutText = styled.p`
  color: #b29f7e;
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
`;
