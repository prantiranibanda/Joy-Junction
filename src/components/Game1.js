import { useEffect, useState } from "react";
import Winner from "./Winner";
import MyButton from "./MyButton";
import win from '../audio/win.wav';
import click from '../audio/click.mp3';
import draw from '../audio/draw.wav';

let temp;
let wino = new Audio(win);
let drawo = new Audio(draw);

function Game1(){
//handles the toggling of x and o
    const [isZero, setIsZero] = useState(true);
//displaying winner and alternative player using displayWin and player state
    const [player, setPlayer] = useState("Gooooo.....PlayerX");
    const [displayWin, setDisplayWin] = useState(
        <div>
            <div className="font-mono font-bold text-center text-6xl text-cyan-200">{player}</div>
        </div>
    );
    useEffect(()=>{
        setDisplayWin(
            <div>
                <div className="font-mono font-bold text-center text-6xl text-cyan-200">{player}</div>
            </div>
        )
    },[player])
//handling the turn after winning using winner state
    const [winner, setWinner] = useState(false);
//Initial value of str is strArray
    let strArray = [
        {
            id: 0,
            data: ".",
            done: false, 
        },
        //upper portion or the 0th element of the array is only for convenience as the first cell is marked as 1
        {
            id: 1,
            data: ".",
            done: false, //after one cell is occupied with o or x it is used for preventing the changing of that cell
        },
        {
            id: 2,
            data: ".",
            done: false,
        },
        {
            id: 3,
            data: ".",
            done: false,
        },
        {
            id: 4,
            data: ".",
            done: false,
        },
        {
            id: 5,
            data: ".",
            done: false,
        },
        {
            id: 6,
            data: ".",
            done: false,
        },
        {
            id: 7,
            data: ".",
            done: false,
        },
        {
            id: 8,
            data: ".",
            done: false,
        },
        {
            id: 9,
            data: ".",
            done: false,
        },
    ];
//str is the string for displaying o or x in the tictactoe board
    const [str, setStr] = useState(strArray);

//Logic for finding the winner of the game or the main logic of the game  
    function winclick(){
        wino = new Audio(win);
        return wino.play()
    }
    function drawclick(){
        drawo = new Audio(draw);
        return drawo.play()
    }
    function handleWin(s){
        console.log(s);
        //row x
        if((s[1].data === s[2].data) && (s[2].data === s[3].data) && (s[3].data === "x")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerX"/>);
        }
        else if((s[4].data === s[5].data) && (s[5].data === s[6].data) && (s[6].data === "x")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerX"/>);
        }
        else if((s[7].data === s[8].data) && (s[8].data === s[9].data) && (s[9].data === "x")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerX"/>);
        }
        //col x
        else if((s[1].data === s[4].data) && (s[4].data === s[7].data) && (s[7].data === "x")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerX"/>);
        }

        else if((s[2].data === s[5].data) && (s[5].data === s[8].data) && (s[8].data === "x")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerX"/>);
        }
        else if((s[3].data === s[6].data) && (s[6].data === s[9].data) && (s[9].data === "x")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerX"/>);
        }
        //diagonal x
        else if((s[1].data === s[5].data) && (s[5].data === s[9].data) && (s[9].data === "x")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerX"/>);
        }
        else if((s[3].data === s[5].data) && (s[5].data === s[7].data) && (s[7].data === "x")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerX"/>);
        }

        //row o
        else if((s[1].data === s[2].data) && (s[2].data === s[3].data) && (s[3].data === "o")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerO"/>);
        }
        else if((s[4].data === s[5].data) && (s[5].data === s[6].data) && (s[6].data === "o")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerO"/>);
        }
        else if((s[7].data === s[8].data) && (s[8].data === s[9].data) && (s[9].data === "o")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerO"/>);
        }
        //col o
        else if((s[1].data === s[4].data) && (s[4].data === s[7].data) && (s[7].data === "o")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerO"/>);
        }

        else if((s[2].data === s[5].data) && (s[5].data === s[8].data) && (s[8].data === "o")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerO"/>);
        }
        else if((s[3].data === s[6].data) && (s[6].data === s[9].data) && (s[9].data === "o")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerO"/>);
        }
        //diagonal o
        else if((s[1].data === s[5].data) && (s[5].data === s[9].data) && (s[9].data === "o")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerO"/>);
        }
        else if((s[3].data === s[5].data) && (s[5].data === s[7].data) && (s[7].data === "o")){
            setWinner(true);
            winclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerO"/>);
        }
        else if(s[1].data!=="." && s[2].data!=="." && s[3].data!=="." && s[4].data!=="." && s[5].data!=="." && s[6].data!=="." && s[7].data!=="." && s[8].data!=="." && s[9].data!=="."){
            setWinner(true);
            drawclick();
            setDisplayWin(<Winner wino={wino} drawo={drawo} setWinner={setWinner} setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Draw...!!"/>);
        }
    }
//SoundEffect
    function playy(){
        return new Audio(click).play()
    }
    function handleClick(no, str){
        playy();
        async function test(){

            if(str[no].done === false && winner === false){
                setIsZero(!isZero);
                //X and O handle
                if(isZero){
                    setStr(
                        (prev)=>{
                            temp = prev.map((eachStr)=>
                                (eachStr.id === no)?{...eachStr, data: "x", done: true}:{...eachStr}
                            )
                            return temp;
                        }
                    )
                    setPlayer("PlayerO's turn");
                }
                else{
                    setStr(
                        (prev)=>{
                            temp = prev.map((eachStr)=>
                                (eachStr.id === no)?{...eachStr, data: "o", done: true}:{...eachStr}
                            )
                            return temp;
                        }
                    )
                    setPlayer("PlayerX's turn");
                }
            }
            else if(winner === true){;
                alert("Please restart the game, we have already got our winner..!!");
            }
        } 
        test().then(()=>{handleWin(temp)});//setTimeout
    }

    return(
        <div>
            <div className="flex justify-center items-center h-[58vh]">
                <div className="border-8 border-[#fa02e1]">
                <div className="border-4 border-red-600">
                <div className="grid grid-cols-3 gap-2 w-64 h-64 bg-orange-400 border-8 border-yellow-300">
                    <MyButton no={1} handleClick={handleClick} str={str}/>
                    <MyButton no={2} handleClick={handleClick} str={str}/>
                    <MyButton no={3} handleClick={handleClick} str={str}/>
                    <MyButton no={4} handleClick={handleClick} str={str}/>
                    <MyButton no={5} handleClick={handleClick} str={str}/>
                    <MyButton no={6} handleClick={handleClick} str={str}/>
                    <MyButton no={7} handleClick={handleClick} str={str}/>
                    <MyButton no={8} handleClick={handleClick} str={str}/>
                    <MyButton no={9} handleClick={handleClick} str={str}/>
                </div>
                </div>
                </div>
            </div>
            <div className="text-center">{displayWin}</div>
        </div>
    );
}
export default Game1;