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

function App() {
  const { auth } = useContext(AuthContext);
  console.log(auth);

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
            element={auth ? <MenuQuestionsThemes /> : <Navigate to="/" />}
            path="/menu/themes"
          />
          <Route
            element={auth ? <MenuQuestionsLevel /> : <Navigate to="/" />}
            path="/menu/level"
          />
          <Route element={<About />} path="/sobre" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
