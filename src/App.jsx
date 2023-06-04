import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import StartPage from './pages/startPage/StartPage';
import About from './pages/about/About';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/quiz-chemistry'>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
