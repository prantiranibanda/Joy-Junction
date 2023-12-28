import { useState } from "react";

let flag = 0;
function Game1(){
    
    return(
        <div className="flex justify-center items-center h-[86vh]">
            <div className="grid grid-cols-3 gap-1 w-60 h-60 bg-orange-400">
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
    );
}
function MyButton() {
    const [isZero, setIsZero] = useState(true);
    let done = false;
    const [str, setStr] = useState("");
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
    
    return (
        <div className="bg-orange-500" onClick={handleClick}>{str}</div>
    );
}
export default Game1;