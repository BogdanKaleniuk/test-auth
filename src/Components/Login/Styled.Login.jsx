import styled from "styled-components";
import YourImage from "../../images/login-1x.png";

export const LoginContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh; /* Налаштовує висоту на всю висоту екрану */
  display: flex;
  width: 100%;
`;

export const LoginImage = styled.div`
  width: 60%;
  height: 100vh; /* Якщо ви хочете, щоб фон був по всій висоті екрану */
  background-image: url(${YourImage});
  background-size: cover;
`;

export const HeroLogin = styled.h2`
  margin: 0;
  color: #172234;
  font-family: Merriweather;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.21; /* 121.429% */
`;

export const LoginForm = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center; /* Вирівняти по горизонталі */
  justify-content: center; /* Вирівняти по вертикалі */
  margin: auto; /* Це центрує LoginForm в батьківському елементі */
`;

export const Form = styled.form`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #000;

  font-family: Merriweather;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.43; /* 142.857% */
  margin-top: 20px;
`;

export const Input = styled.input`
  font-size: 16px;
  display: flex;
  width: 350px;
  padding: 14px 20px 12px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #e0e0e0;
  background: #e0e0e0;
  &::placeholder {
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;

  margin-top: 20px;
  padding: 8px;
  font-size: 16px;
  background-color: #b29f7e;
  color: white;
  border: none;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: Merriweather;
  font-weight: 700;
  line-height: 1.38;
  border-radius: 5px;
`;

export const commonTextStyle = `
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
`;

export const ForgotPassword = styled.a`
  margin-top: 10px;
  text-align: right;
  color: #b29f7e;
  cursor: pointer;
  ${commonTextStyle}
`;

export const SignUpLink = styled.span`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  ${commonTextStyle}
`;

export const SignUp = styled.a`
  color: #b29f7e;
  cursor: pointer;
  ${commonTextStyle}
`;
