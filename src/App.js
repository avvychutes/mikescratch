import './App.css';
import GameInside from './components/gameInside/GameInside';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/mikescratch" element={<Home />} />
        <Route path="/:game" element={<GameInside />} />
      </Routes>
    </div>
  );
}

export default App;
