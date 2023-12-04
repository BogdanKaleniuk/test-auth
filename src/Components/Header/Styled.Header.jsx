import styled from "styled-components";

const buttonSharedStyles = `
  font-family: Merriweather;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.38;
`;

export const HeaderContainer = styled.div`
  background: var(--Text, #172234);
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  height: 80px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-top: 18px;
    margin-bottom: 18px;
    cursor: pointer;
    border-radius: 5px;
    padding: 11px 0px;
    width: 160px;
    &:first-child {
      z-index: 3;
      ${buttonSharedStyles}
      background-color: #172234;
      color: #b29f7e;
      border: 1px solid #b29f7e;
    }

    &:last-child {
      z-index: 3;
      ${buttonSharedStyles}
      margin-left: 10px;
      margin-right: 50px;

      background-color: #b29f7e;
      color: #ffffff;
      border: none;
    }
  }
`;
