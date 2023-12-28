import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="home" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
