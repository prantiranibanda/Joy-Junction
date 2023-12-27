import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Greet from './components/Greet';

function App() {
  return (
    <div className="text">
      <Navbar/>
      <Greet/>
    </div>
  );
}
export default App;
