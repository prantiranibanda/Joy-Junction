import { useState } from "react";

function Game2(){
    const [randomDiceImg, setRandomDiceImg] = useState(null);

    function rollDice(){
        let randomNumber = ((Math.floor(Math.random() * 6))+1);
        setRandomDiceImg(<img src={`/images/ds${randomNumber}.jpg`} alt={`dice${randomNumber}`}></img>)
    }
    
    return(
        <div className="flex flex-col justify-center items-center h-[80vh]">
            <div className="w-56 h-56 rounded-lg text-white font-bold text-2xl">{randomDiceImg}</div>
            <button className="bg-yellow-300 text-pink-700 px-6 py-3 rounded mt-5" onClick={rollDice}>Click to roll</button> 
        </div>
        
    );
}
export default Game2;