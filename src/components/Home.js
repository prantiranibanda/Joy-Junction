import Greet from "./Greet";
import Button from "./Button";
import { Outlet, Link } from "react-router-dom";
function Home(){
    return(
        <>
            <Greet/>
            <div className="flex justify-center space-x-96 pt-8">
                <div className="flex flex-col justify-between w-80">
                    <img src="/tic-tac-toe.webp" alt="tictactoe" className="w-80 h-72"/>
                    <Link to="/game1"><Button button="Tic-Tac-Toe"/></Link>
                </div>
                <div className="flex flex-col justify-between w-80">
                    <img src="/diceghema.png" alt="dice" className="w-80 h-62 my-auto"/>
                    <Link to="/game2"><Button button="Snake-Ladder"/></Link>
                </div>
                <Outlet/>
            </div>
        </>
    );
}
export default Home;