import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Game1 from './components/Game1';
import Game2 from './components/Game2';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="/game1" element={<Game1/>}/>
          <Route path="/game2" element={<Game2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
