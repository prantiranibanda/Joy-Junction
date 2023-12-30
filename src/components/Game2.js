import { useState } from "react";

function Game2(){
    const [randomNumber, setRandomNumber] = useState(null);
    function rollDice(){
        setRandomNumber((Math.floor(Math.random() * 6))+1);
    }
    
    return(
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <div className="bg-green-700 w-56 h-56 rounded-lg text-white font-bold text-2xl">{randomNumber}</div>
            <button className="bg-yellow-300 text-pink-700 px-6 py-3 rounded" onClick={rollDice}>Click to roll</button> 
        </div>
        
    );
}
export default Game2;