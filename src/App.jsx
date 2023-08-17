import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import StartFrame from "./pages/startFrame/StartFrame";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Quests from "./pages/quests/Quests";
import QuestEazy from "./pages/questEazy/QuestEazy";

function App() {
  return (
    <div>
      <BrowserRouter basename="/quiz-chemistry">
        <Routes>
          <Route element={<StartFrame />} path="/" />
          <Route element={<Login />} path="/conta" />
          <Route element={<About />} path="/sobre" />
          <Route element={<Quests />} path="/outrasPerguntas" />
          <Route element={<QuestEazy />} path="/perguntaFacil" />
          {/* <Route element={<Quest-medium />} path="/perguntaMedia" /> */}{" "}
          {/* não feito */}
          {/* <Route element={<Quest-hard />} path="/perguntaDificil" /> */}{" "}
          {/* não feito */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
