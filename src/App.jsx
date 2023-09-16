import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./App.css";
import StartFrame from "./pages/startFrame/StartFrame";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Quests from "./pages/quests/Quests";
import QuestEazy from "./pages/questEazy/QuestEazy";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

const {auth} = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter basename="/quiz-chemistry">
        <Routes>
          <Route element={<StartFrame />} path="/" />
          <Route element={auth ? <Register /> : <Navigate to="/sobre"/>} path="/register" />
          <Route element={auth ? <Login /> : <Navigate to="/sobre"/>} path="/conta" />
          <Route element={<About />} path="/sobre" />
          <Route element={<Quests />} path="/outrasPerguntas" />
          <Route element={<QuestEazy />} path="/perguntaFacil" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
