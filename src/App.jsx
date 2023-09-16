import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./App.css";
import StartFrame from "./pages/startFrame/StartFrame";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import MenuQuestionsThemes from "./pages/menuQuestionsThemes/MenuQuestionsThemes";
import MenuQuestionsLevel from "./pages/menuQuestionsLevel/MenuQuestionLevel";
import Quiz from "./pages/quiz/Quiz";
import Congratulations from "./pages/congratulations/Congratulations";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter basename="/quiz-chemistry">
        <Routes>
          <Route element={<StartFrame />} path="/" />
          <Route
            element={!auth ? <Register /> : <Navigate to="/" />}
            path="/register"
          />
          <Route
            element={!auth ? <Login /> : <Navigate to="/" />}
            path="/login"
          />
          <Route
            element={auth ? <MenuQuestionsThemes /> : <Navigate to="/login" />}
            path="/menu/themes"
          />
          <Route
            element={auth ? <MenuQuestionsLevel /> : <Navigate to="/login" />}
            path="/menu/level"
          />
          <Route
            element={auth ? <Quiz /> : <Navigate to="/login" />}
            path="/quiz"
          />
          <Route
            element={auth ? <Congratulations /> : <Navigate to="/login" />}
            path="/congratulations"
          />
          <Route element={<About />} path="/sobre" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
