import './App.css';
import Navbar from './components/Navbar';
import Greet from './components/Greet';
import Button from './components/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>

        </Route>
          <Greet/>
          <div className="flex justify-center space-x-96 pt-8">
            <div className="flex flex-col justify-between w-80">
              <img src="/tic-tac-toe.webp" alt="tictactoe" className="w-80 h-72"/>
              <Button button="Tic-Tac-Toe"/>
            </div>
            <div className="flex flex-col justify-between w-80">
              <img src="/diceghema.png" alt="dice" className="w-80 h-62 my-auto"/>
              <Button button="Dice-Rolling"/>
            </div>
          </div>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
