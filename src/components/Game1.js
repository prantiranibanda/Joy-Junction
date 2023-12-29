import { useEffect, useState } from "react";
import Winner from "./Winner";
import MyButton from "./MyButton";

//let arr = [0,1,2,3,4,5,6,7,8,9];
let temp;
function Game1(){
    const [isZero, setIsZero] = useState(true);
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
    //const [winner, setWinner] = useState("");
    let strArray = [
        {
            id: 0,
            data: ".",
            done: false,
        },
        {
            id: 1,
            data: ".",
            done: false,
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
    const [str, setStr] = useState(strArray);
    function handleWin(s){
        console.log(s);
        //row x
        if((s[1].data === s[2].data) && (s[2].data === s[3].data) && (s[3].data === "x")){
            setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} player={player} setPlayer={setPlayer} win="Winner: playerX"/>);
        }
        // else if((s[4].data === s[5].data) && (s[5].data === s[6].data) && (s[6].data === "x")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerX"/>);
        // }
        // else if((s[7].data === s[8].data) && (s[8].data === s[9].data) && (s[9].data === "x")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerX"/>);
        // }
        // //col x
        // else if((s[1].data === s[4].data) && (s[4].data === s[7].data) && (s[7].data === "x")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerX"/>);
        // }

        // else if((s[2].data === s[5].data) && (s[5].data === s[8].data) && (s[8].data === "x")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerX"/>);
        // }
        // else if((s[3].data === s[6].data) && (s[6].data === s[9].data) && (s[9].data === "x")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerX"/>);
        // }
        // //diagonal x
        // else if((s[1].data === s[5].data) && (s[5].data === s[9].data) && (s[9].data === "x")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerX"/>);
        // }
        // else if((s[3].data === s[5].data) && (s[5].data === s[7].data) && (s[7].data === "x")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerX"/>);
        // }

        // //row o
        // else if((s[1].data === s[2].data) && (s[2].data === s[3].data) && (s[3].data === "o")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerO"/>);
        // }
        // else if((s[4].data === s[5].data) && (s[5].data === s[6].data) && (s[6].data === "o")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerO"/>);
        // }
        // else if((s[7].data === s[8].data) && (s[8].data === s[9].data) && (s[9].data === "o")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerO"/>);
        // }
        // //col o
        // else if((s[1].data === s[4].data) && (s[4].data === s[7].data) && (s[7].data === "o")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerO"/>);
        // }

        // else if((s[2].data === s[5].data) && (s[5].data === s[8].data) && (s[8].data === "o")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerO"/>);
        // }
        // else if((s[3].data === s[6].data) && (s[6].data === s[9].data) && (s[9].data === "o")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerO"/>);
        // }
        // //diagonal o
        // else if((s[1].data === s[5].data) && (s[5].data === s[9].data) && (s[9].data === "o")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerO"/>);
        // }
        // else if((s[3].data === s[5].data) && (s[5].data === s[7].data) && (s[7].data === "o")){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Winner: playerO"/>);
        // }
        // else if(s[1].data!=="." && s[2].data!=="." && s[3].data!=="." && s[4].data!=="." && s[5].data!=="." && s[6].data!=="." && s[7].data!=="." && s[8].data!=="." && s[9].data!=="."){
        //     setDisplayWin(<Winner setStr={setStr} setIsZero={setIsZero} setDisplayWin={setDisplayWin} win="Draw...!!"/>);
        // }
    }
    function handleClick(no, str){
        
        async function test(){
            if(str[no].done === false){
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
            else{
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