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
    function handleWin(str){
        //console.log(str);
        //row x
        if((str[1].data === str[2].data) && (str[2].data === str[3].data) && (str[3].data === "x")){
            setDisplayWin(<Winner win="Winner: playerX"/>);
        }
        else if((str[4].data === str[5].data) && (str[5].data === str[6].data) && (str[6].data === "x")){
            setDisplayWin(<Winner win="Winner: playerX"/>);
        }
        else if((str[7].data === str[8].data) && (str[8].data === str[9].data) && (str[9].data === "x")){
            setDisplayWin(<Winner win="Winner: playerX"/>);
        }
        //col x
        else if((str[1].data === str[4].data) && (str[4].data === str[7].data) && (str[7].data === "x")){
            setDisplayWin(<Winner win="Winner: playerX"/>);
        }

        else if((str[2].data === str[5].data) && (str[5].data === str[8].data) && (str[8].data === "x")){
            setDisplayWin(<Winner win="Winner: playerX"/>);
        }
        else if((str[3].data === str[6].data) && (str[6].data === str[9].data) && (str[9].data === "x")){
            setDisplayWin(<Winner win="Winner: playerX"/>);
        }
        //diagonal x
        else if((str[1].data === str[5].data) && (str[5].data === str[9].data) && (str[9].data === "x")){
            setDisplayWin(<Winner win="Winner: playerX"/>);
        }
        else if((str[3].data === str[5].data) && (str[5].data === str[7].data) && (str[7].data === "x")){
            setDisplayWin(<Winner win="Winner: playerX"/>);
        }

        //row o
        else if((str[1].data === str[2].data) && (str[2].data === str[3].data) && (str[3].data === "o")){
            setDisplayWin(<Winner win="Winner: playerO"/>);
        }
        else if((str[4].data === str[5].data) && (str[5].data === str[6].data) && (str[6].data === "o")){
            setDisplayWin(<Winner win="Winner: playerO"/>);
        }
        else if((str[7].data === str[8].data) && (str[8].data === str[9].data) && (str[9].data === "o")){
            setDisplayWin(<Winner win="Winner: playerO"/>);
        }
        //col o
        else if((str[1].data === str[4].data) && (str[4].data === str[7].data) && (str[7].data === "o")){
            setDisplayWin(<Winner win="Winner: playerO"/>);
        }

        else if((str[2].data === str[5].data) && (str[5].data === str[8].data) && (str[8].data === "o")){
            setDisplayWin(<Winner win="Winner: playerO"/>);
        }
        else if((str[3].data === str[6].data) && (str[6].data === str[9].data) && (str[9].data === "o")){
            setDisplayWin(<Winner win="Winner: playerO"/>);
        }
        //diagonal o
        else if((str[1].data === str[5].data) && (str[5].data === str[9].data) && (str[9].data === "o")){
            setDisplayWin(<Winner win="Winner: playerO"/>);
        }
        else if((str[3].data === str[5].data) && (str[5].data === str[7].data) && (str[7].data === "o")){
            setDisplayWin(<Winner win="Winner: playerO"/>);
        }
        else if(str[1].data!=="." && str[2].data!=="." && str[3].data!=="." && str[4].data!=="." && str[5].data!=="." && str[6].data!=="." && str[7].data!=="." && str[8].data!=="." && str[9].data!=="."){
            setDisplayWin(<Draw/>);
        }
    }
    function handleClick(no, str){
        if(str[no].done === false){
            setIsZero(!isZero);
            if(isZero){
                setStr(
                    (prev)=>{
                        let temp = prev.map((eachStr)=>
                            (eachStr.id === no)?{...eachStr, data: "x", done: true}:{...eachStr}
                        )
                        return temp;
                    }
                )
                //console.log(str);
            }
            else{
                setStr(
                    (prev)=>{
                        let temp = prev.map((eachStr)=>
                            (eachStr.id === no)?{...eachStr, data: "o", done: true}:{...eachStr}
                        )
                        return temp;
                    }
                )
                //console.log(str);
            }
        }
        handleWin(str);//setTimeout
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