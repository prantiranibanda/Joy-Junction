import { useEffect, useState } from "react";
import win from '../audio/win.wav';
import click from '../audio/click.mp3';

let f = false;
let wino = new Audio(win);
function Game2(){
    const [randomDiceImg, setRandomDiceImg] = useState(<img src="/dice.png" alt="dice" ></img>);
    const [sum, setSum] = useState(0);
    const [randomNumber, setRandomNumber] = useState(1);
    const [flag, setFlag] = useState(false);
    const [isWin, setIsWIn] = useState(false);

    //array creation
    let arr = new Array();
    let k=111;
    for(let i=0; i<10; i++){
        if((i%2) !== 0){
            k = k-9;
        }
        else{
            k = k-11;
        }
        for(let j=0; j<10; j++){
            if((i%2) === 0){
                arr.push({
                    id: k,
                    data: "",
                    isEqualToSum: false,
                });
                k--;
            }
            else{
                arr.push({
                    id: k,
                    data: "",
                    isEqualToSum: false,
                });
                k++;
            }
        }
    }
    const [buttonArray1, setButtonArray1] = useState(arr);
    let temp;


    //Sound effects.......................
    function winclick(){
        wino = new Audio(win);
        return wino.play()
    }
    function playy(){
        return new Audio(click).play()
    }
    //.....................................

    useEffect(()=>{
        setButtonArray1(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum)?{...eachbutton, data: "rounded-full bg-green-700", isEqualToSum: true}:{...eachbutton}
                )
                // console.log(temp);
                return temp;
            }    
        )
    },[randomNumber,sum])
    
    function handleWin(s){
        if(s === 100){
            setIsWIn(true);
            //console.log("Win");
            winclick();
        }
    }

    function rollDice(){
        playy();
        setFlag(true);
        console.log("f",f);
        if(f === false){
            setButtonArray1(
                (prev)=>{
                    temp = prev.map((eachbutton)=>
                        (eachbutton.id === sum)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                    )
                    // console.log(temp); 
                    return temp;
                }
            )
        }
        setRandomNumber(((Math.floor(Math.random() * 6))+1));
        setRandomDiceImg(<img src={`/images/ds${randomNumber}.jpg`} alt={`dice${randomNumber}`}></img>);
        let s = sum + randomNumber;
        if(s>100){
            f = true;
            console.log(f);
        }
        if(s <= 100){
            if(f === true){
                setButtonArray1(
                    (prev)=>{
                        temp = prev.map((eachbutton)=>
                            (eachbutton.id === sum)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                        )
                        // console.log(temp); 
                        return temp;
                    }
                )
            }
            f = false;
            if(s === 5){
                setSum(s+53);
            }
            else if(s === 14){
                setSum(s+35);
            }
            else if(s === 53){
                setSum(s+19);
            }
            else if(s === 64){
                setSum(s+19);
            }
            else if(s === 38){
                setSum(s-18);
            }
            else if(s === 51){
                setSum(s-41);
            }
            else if(s === 76){
                setSum(s-22);
            }
            else if(s === 91){
                setSum(s-18);
            }
            else if(s === 97){
                setSum(s-36);
            }
            else{
                setSum(s);
            }
            
        }
        handleWin(s);
    }
    
    return (
        <div className="flex justify-evenly items-center h-[80vh]">
            <div className="h-[485px] w-[485px] bg-[url('/ludoboard.jpg')] bg-no-repeat bg-green-500 bg-auto bg-center">
                <div className="grid grid-cols-10 h-[485px] w-[485px]">
                {arr.map((ele, index)=>{
                    return (<MyCell key={index} index={index} buttonArray1={buttonArray1}/>);
                })}
                </div>
            </div>
            <div className="flex flex-col justify-evenly items-center h-[485px] w-[485px] rounded-3xl border-4 border-yellow-300">
                <div className="w-44 h-44 rounded-lg text-white font-bold text-2xl">{randomDiceImg}</div>
                <button className="bg-yellow-300 text-pink-700 px-6 py-3 rounded mt-5" onClick={rollDice}>{(flag)?"Click to roll":"start"}</button>
                <div className="font-mono font-bold text-center text-5xl text-cyan-200 pb-10">{(isWin)?"Win..!!":"Goo..."}</div> 
            </div>
        </div>
    );

    function MyCell({index, buttonArray1}){
        return (
            <div className="flex justify-center items-center">
                <div className={`h-5 w-5 ${(buttonArray1[index].isEqualToSum)?buttonArray1[index].data:buttonArray1[index].data}`}>{buttonArray1[index].id}</div>
                {/* <div className={`h-5 w-5 ${(buttonArray[index].isEqualToSum)?buttonArray[index].data:buttonArray[index].data}`}>{buttonArray[index].id}</div>
                <div className={`h-5 w-5 ${(buttonArray[index].isEqualToSum)?buttonArray[index].data:buttonArray[index].data}`}>{buttonArray[index].id}</div>
                <div className={`h-5 w-5 ${(buttonArray[index].isEqualToSum)?buttonArray[index].data:buttonArray[index].data}`}>{buttonArray[index].id}</div> */}
            </div>
        );
    }
}
export default Game2;