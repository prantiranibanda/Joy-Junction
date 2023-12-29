import { useState } from "react";
import Winner from "./Winner";
import Draw from "./Draw";

//let arr = [0,1,2,3,4,5,6,7,8,9];
function Game1(){
    const [displayWin, setDisplayWin] = useState(
        <div>
            <div className="font-mono font-bold text-center text-6xl text-cyan-200">Goooooo....</div>
        </div>
    );
    const [isZero, setIsZero] = useState(true);
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
    // function handleWin(){
    //     //console.log(str);
    //     //row x
    //     if((str[1].data === str[2].data) && (str[2].data === str[3].data) && (str[3].data === "x")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerX"/>);
    //     }
    //     else if((arr[4] === arr[5]) && (arr[5] === arr[6]) && (arr[6] === "x")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerX"/>);
    //     }
    //     else if((arr[7] === arr[8]) && (arr[8] === arr[9]) && (arr[9] === "x")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerX"/>);
    //     }
    //     //col x
    //     else if((arr[1] === arr[4]) && (arr[4] === arr[7]) && (arr[7] === "x")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerX"/>);
    //     }

    //     else if((arr[2] === arr[5]) && (arr[5] === arr[8]) && (arr[8] === "x")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerX"/>);
    //     }
    //     else if((arr[3] === arr[6]) && (arr[6] === arr[9]) && (arr[9] === "x")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerX"/>);
    //     }
    //     //diagonal x
    //     else if((arr[1] === arr[5]) && (arr[5] === arr[9]) && (arr[9] === "x")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerX"/>);
    //     }
    //     else if((arr[3] === arr[5]) && (arr[5] === arr[7]) && (arr[7] === "x")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerX"/>);
    //     }

    //     //row o
    //     else if((arr[1] === arr[2]) && (arr[2] === arr[3]) && (arr[3] === "o")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerO"/>);
    //     }
    //     else if((arr[4] === arr[5]) && (arr[5] === arr[6]) && (arr[6] === "o")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerO"/>);
    //     }
    //     else if((arr[7] === arr[8]) && (arr[8] === arr[9]) && (arr[9] === "o")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerO"/>);
    //     }
    //     //col o
    //     else if((arr[1] === arr[4]) && (arr[4] === arr[7]) && (arr[7] === "o")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerO"/>);
    //     }

    //     else if((arr[2] === arr[5]) && (arr[5] === arr[8]) && (arr[8] === "o")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerO"/>);
    //     }
    //     else if((arr[3] === arr[6]) && (arr[6] === arr[9]) && (arr[9] === "o")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerO"/>);
    //     }
    //     //diagonal o
    //     else if((arr[1] === arr[5]) && (arr[5] === arr[9]) && (arr[9] === "o")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerO"/>);
    //     }
    //     else if((arr[3] === arr[5]) && (arr[5] === arr[7]) && (arr[7] === "o")){
    //         setDisplayWin(<Winner arr={arr} win="Winner: playerO"/>);
    //     }
    //     else if(arr[1]!==1 && arr[2]!==2 && arr[3]!==3 && arr[4]!==4 && arr[5]!==5 && arr[6]!==6 && arr[7]!==7 && arr[8]!==8 && arr[9]!==9){
    //         setDisplayWin(<Draw/>);
    //     }
    // }
    function handleClick(no, str){
        if(str[no].done === false){
            setIsZero(!isZero);
            if(isZero){
                setStr(
                    str.map((eachStr, index)=>
                        (eachStr.id === no)?{...eachStr, data: "x", done: true}:{...eachStr}
                    )
                )
            }
            else{
                setStr(
                    str.map((eachStr, index)=>
                        (eachStr.id === no)?{...eachStr, data: "o", done: true}:{...eachStr}
                    )
                )
            }
        }
        //handleWin();//setTimeout
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

function MyButton({no, handleClick, str}){

    function handleHandleClick(){
        handleClick(no, str);
    }
    let cl = `bg-orange-500 flex justify-center items-baseline text-6xl font-medium ${(str[no].data === "o")?"text-white":((str[no].data === "x")?"text-[#2206c2]":"text-orange-500")}`
    return (
        <div className={`${cl}`} onClick={handleHandleClick}>{str[no].data}</div>
    );
}
export default Game1;