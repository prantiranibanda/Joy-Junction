import './App.css';
import Navbar from './components/Navbar';
import Greet from './components/Greet';
import Button from './components/Button';

function App() {
  return (
    <div className="text">
      <Navbar/>
      <Greet/>
      <div className="flex justify-center space-x-96">
        <div>
          <img></img>
          <Button button="Tic-Tac-Toe"/>
        </div>
        <div>
          <img></img>
          <Button button="Dice-Rolling"/>
        </div>
      </div>
    </div>
  );
}
export default App;
