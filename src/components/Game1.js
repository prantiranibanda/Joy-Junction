import { useState } from "react";
import Winner1 from "./Winner1";
import Winner2 from "./Winner2";

let arr = [0,1,2,3,4,5,6,7,8,9];
let flag = 0;

function Game1(){
    const [displayWin, setDisplayWin] = useState(<div>ss</div>);
    function handleWin(){
        console.log(arr);
        //row x
        if((arr[1] === arr[2]) && (arr[2] === arr[3]) && (arr[3] === "x")){
            setDisplayWin(<Winner1/>);
        }
        if((arr[4] === arr[5]) && (arr[5] === arr[6]) && (arr[6] === "x")){
            setDisplayWin(<Winner1/>);
        }
        if((arr[7] === arr[8]) && (arr[8] === arr[9]) && (arr[9] === "x")){
            setDisplayWin(<Winner1/>);
        }
        //col x
        if((arr[1] === arr[4]) && (arr[4] === arr[7]) && (arr[7] === "x")){
            setDisplayWin(<Winner1/>);
        }

        if((arr[2] === arr[5]) && (arr[5] === arr[8]) && (arr[8] === "x")){
            setDisplayWin(<Winner1/>);
        }
        if((arr[3] === arr[6]) && (arr[6] === arr[9]) && (arr[9] === "x")){
            setDisplayWin(<Winner1/>);
        }
        //diagonal x
        if((arr[1] === arr[5]) && (arr[5] === arr[9]) && (arr[9] === "x")){
            setDisplayWin(<Winner1/>);
        }
        if((arr[3] === arr[5]) && (arr[5] === arr[7]) && (arr[7] === "x")){
            setDisplayWin(<Winner1/>);
        }

        //row o
        if((arr[1] === arr[2]) && (arr[2] === arr[3]) && (arr[3] === "o")){
            setDisplayWin(<Winner2/>);
        }
        if((arr[4] === arr[5]) && (arr[5] === arr[6]) && (arr[6] === "o")){
            setDisplayWin(<Winner2/>);
        }
        if((arr[7] === arr[8]) && (arr[8] === arr[9]) && (arr[9] === "o")){
            setDisplayWin(<Winner2/>);
        }
        //col x
        if((arr[1] === arr[4]) && (arr[4] === arr[7]) && (arr[7] === "o")){
            setDisplayWin(<Winner2/>);
        }

        if((arr[2] === arr[5]) && (arr[5] === arr[8]) && (arr[8] === "o")){
            setDisplayWin(<Winner2/>);
        }
        if((arr[3] === arr[6]) && (arr[6] === arr[9]) && (arr[9] === "o")){
            setDisplayWin(<Winner2/>);
        }
        //diagonal x
        if((arr[1] === arr[5]) && (arr[5] === arr[9]) && (arr[9] === "o")){
            setDisplayWin(<Winner2/>);
        }
        if((arr[3] === arr[5]) && (arr[5] === arr[7]) && (arr[7] === "o")){
            setDisplayWin(<Winner2/>);
        }

    }
    return(
        <div className="flex justify-center items-center h-[86vh]">
            <div className="border-8 border-[#fa02e1]">
            <div className="border-4 border-red-600">
            <div className="grid grid-cols-3 gap-2 w-64 h-64 bg-orange-400 border-8 border-yellow-300">
                <MyButton no={1} handleWin={handleWin}/>
                <MyButton no={2} handleWin={handleWin}/>
                <MyButton no={3} handleWin={handleWin}/>
                <MyButton no={4} handleWin={handleWin}/>
                <MyButton no={5} handleWin={handleWin}/>
                <MyButton no={6} handleWin={handleWin}/>
                <MyButton no={7} handleWin={handleWin}/>
                <MyButton no={8} handleWin={handleWin}/>
                <MyButton no={9} handleWin={handleWin}/>
            </div>
            </div>
            </div>
            <div>{displayWin}</div>
        </div>
    );
}
function MyButton({no, handleWin}) {
    const [isZero, setIsZero] = useState(true);
    const [done, setDone] = useState(false)
    
    
    const [str, setStr] = useState(no);

    function handleClick(){
        setIsZero((isZero)?false:true);
        let s;
        if(flag === 0 && done === false){
            if(isZero){
                s = "x";
                setStr("x");
            }
            else{
                s = "o";
                setStr("o");
            }
            arr[no]=s;
            flag = 1;
            setDone(true);
        }
        else if(flag === 1 && done === false){
            if(isZero){
                s = "o";
                setStr("o");
            }
            else{
                s = "x";
                setStr("x");
            }
            arr[no]=s;
            flag = 0;
            setDone(true);
        }
        setTimeout(()=>{
            handleWin();
        },200)
        
    }
    let colo = "text-blue-500";
    if(str === "o"){
        colo = "text-white";
    }
    else if(str === "x"){
        colo = "text-[#2206c2]";
    }
    return (
        <div className={`bg-orange-500 flex justify-center items-baseline text-6xl font-medium ${colo}`} onClick={handleClick}>{str}</div>
    );
}
export default Game1;