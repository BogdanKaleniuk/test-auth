import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import Main from "./Components/Main/Main";
import { Container } from "./Styled.App";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
