import { useState } from "react";

let flag = 0;
function Game1(){
    return(
        <div className="flex justify-center items-center h-[86vh]">
            <div className="border-8 border-[#fa02e1]">
            <div className="border-4 border-red-600">
            <div className="grid grid-cols-3 gap-2 w-64 h-64 bg-orange-400 border-8 border-yellow-300">
                <MyButton/>
                <MyButton/>
                <MyButton/>
                <MyButton/>
                <MyButton/>
                <MyButton/>
                <MyButton/>
                <MyButton/>
                <MyButton/>
            </div>
            </div>
            </div>
        </div>
    );
}
function MyButton() {
    const [isZero, setIsZero] = useState(true);
    let done = false;
    const [str, setStr] = useState(".");
    function handleClick(){
        setIsZero((isZero)?false:true);
        if(flag === 0 && done === false){
            setStr((isZero)?"x":"o");
            flag = 1;
            done = true;
        }
        else if(flag === 1 && done === false){
            setStr((isZero)?"o":"x");
            flag = 0;
            done = true;
        }
        
    }
    let colo = "text-orange-500";
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