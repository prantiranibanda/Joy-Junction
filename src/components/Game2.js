import { useEffect, useState } from "react";
import win from '../audio/win.wav';
import click from '../audio/click.mp3';

let f = [false, false, false, false];
let count = -1;
let start = [false, false, false, false];
let isWinnerRemoved = [false, false, false, false];
let wino = new Audio(win);
function Game2(){
    const [randomDiceImg, setRandomDiceImg] = useState(<img src="/dice.png" alt="dice" ></img>);
    const [sum1, setSum1] = useState(0);
    const [sum2, setSum2] = useState(0);
    const [sum3, setSum3] = useState(0);
    const [sum4, setSum4] = useState(0);
    const [randomNumber1, setRandomNumber1] = useState((Math.floor(Math.random() * 6))+1);
    const [randomNumber2, setRandomNumber2] = useState((Math.floor(Math.random() * 6))+1);
    const [randomNumber3, setRandomNumber3] = useState((Math.floor(Math.random() * 6))+1);
    const [randomNumber4, setRandomNumber4] = useState((Math.floor(Math.random() * 6))+1);
    const [isWin, setIsWin] = useState(false);
    const [player, setPlayer] = useState("Player1(Green)");
    const [winner, setWinner] = useState(0);
    const [rolling, setRolling] = useState("Click to Roll");

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
    const [buttonArray2, setButtonArray2] = useState(arr);
    const [buttonArray3, setButtonArray3] = useState(arr);
    const [buttonArray4, setButtonArray4] = useState(arr);
    let temp;
    //let turn = [false, false, false, false];

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
                    (eachbutton.id === sum1)?{...eachbutton, data: "rounded-full bg-green-700", isEqualToSum: true}:{...eachbutton}
                )
                // console.log(temp);
                return temp;
            }    
        )
        setButtonArray2(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum2)?{...eachbutton, data: "rounded-full bg-blue-700", isEqualToSum: true}:{...eachbutton}
                )
                // console.log(temp);
                return temp;
            }    
        )
        setButtonArray3(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum3)?{...eachbutton, data: "rounded-full bg-yellow-500", isEqualToSum: true}:{...eachbutton}
                )
                // console.log(temp);
                return temp;
            }    
        )
        setButtonArray4(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum4)?{...eachbutton, data: "rounded-full bg-red-600", isEqualToSum: true}:{...eachbutton}
                )
                // console.log(temp);
                return temp;
            }    
        )
    },[randomNumber1,randomNumber2,randomNumber3,randomNumber4,sum1, sum2, sum3, sum4])
    
    function handleWin(s,no){
        if(s === 100){
            setIsWin(true);
            //console.log("Win");
            winclick();
            setWinner(no);
            isWinnerRemoved[no-1] = true;
        }
    }

    function func1(){
        setTimeout(() => {
            setRolling("Click to Roll");
            if(f[0] === false){
                setButtonArray1(
                    (prev)=>{
                        temp = prev.map((eachbutton)=>
                            (eachbutton.id === sum1)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                        )
                        // console.log(temp); 
                        return temp;
                    }
                )
            }
            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.jpg`} alt={`dice${randomNumber1}`}></img>);
            let s = sum1 + randomNumber1;
            if(s>100){
                f[0] = true;
                //console.log(f);
            }
            if(s <= 100){
                if(f[0] === true){
                    setButtonArray1(
                        (prev)=>{
                            temp = prev.map((eachbutton)=>
                                (eachbutton.id === sum1)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                            )
                            // console.log(temp); 
                            return temp;
                        }
                    )
                }
                f[0] = false;
                if(s === 5){
                    setSum1(s+53);
                }
                else if(s === 14){
                    setSum1(s+35);
                }
                else if(s === 53){
                    setSum1(s+19);
                }
                else if(s === 64){
                    setSum1(s+19);
                }
                else if(s === 38){
                    setSum1(s-18);
                }
                else if(s === 51){
                    setSum1(s-41);
                }
                else if(s === 76){
                    setSum1(s-22);
                }
                else if(s === 91){
                    setSum1(s-18);
                }
                else if(s === 97){
                    setSum1(s-36);
                }
                else{
                    setSum1(s);
                }
                
            }
            setPlayer("Player2(Blue)");
            handleWin(s,1);
        }, 1000);
    }

    function func2(){
        setTimeout(() => {
            setRolling("Click to Roll");
            if(f[1] === false){
            setButtonArray2(
                (prev)=>{
                    temp = prev.map((eachbutton)=>
                        (eachbutton.id === sum2)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                    )
                    // console.log(temp); 
                    return temp;
                }
            )
        }
        setRandomNumber2(((Math.floor(Math.random() * 6))+1));
        setRandomDiceImg(<img src={`/images/ds${randomNumber2}.jpg`} alt={`dice${randomNumber2}`}></img>);
        let s = sum2 + randomNumber2;
        if(s>100){
            f[1] = true;
            //console.log(f);
        }
        if(s <= 100){
            if(f[1] === true){
                setButtonArray2(
                    (prev)=>{
                        temp = prev.map((eachbutton)=>
                            (eachbutton.id === sum2)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                        )
                        // console.log(temp); 
                        return temp;
                    }
                )
            }
            f[1] = false;
            if(s === 5){
                setSum2(s+53);
            }
            else if(s === 14){
                setSum2(s+35);
            }
            else if(s === 53){
                setSum2(s+19);
            }
            else if(s === 64){
                setSum2(s+19);
            }
            else if(s === 38){
                setSum2(s-18);
            }
            else if(s === 51){
                setSum2(s-41);
            }
            else if(s === 76){
                setSum2(s-22);
            }
            else if(s === 91){
                setSum2(s-18);
            }
            else if(s === 97){
                setSum2(s-36);
            }
            else{
                setSum2(s);
            }
            
        }
        setPlayer("Player3(Yellow)");
        handleWin(s,2);
        }, 1000);
    }

    function func3(){
        setTimeout(() => {
            setRolling("Click to Roll");
            if(f[2] === false){
            setButtonArray3(
                (prev)=>{
                    temp = prev.map((eachbutton)=>
                        (eachbutton.id === sum3)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                    )
                    // console.log(temp); 
                    return temp;
                }
            )
        }
        setRandomNumber3(((Math.floor(Math.random() * 6))+1));
        setRandomDiceImg(<img src={`/images/ds${randomNumber3}.jpg`} alt={`dice${randomNumber3}`}></img>);
        let s = sum3 + randomNumber3;
        if(s>100){
            f[2] = true;
            //console.log(f);
        }
        if(s <= 100){
            if(f[2] === true){
                setButtonArray3(
                    (prev)=>{
                        temp = prev.map((eachbutton)=>
                            (eachbutton.id === sum3)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                        )
                        // console.log(temp); 
                        return temp;
                    }
                )
            }
            f[2] = false;
            if(s === 5){
                setSum3(s+53);
            }
            else if(s === 14){
                setSum3(s+35);
            }
            else if(s === 53){
                setSum3(s+19);
            }
            else if(s === 64){
                setSum3(s+19);
            }
            else if(s === 38){
                setSum3(s-18);
            }
            else if(s === 51){
                setSum3(s-41);
            }
            else if(s === 76){
                setSum3(s-22);
            }
            else if(s === 91){
                setSum3(s-18);
            }
            else if(s === 97){
                setSum3(s-36);
            }
            else{
                setSum3(s);
            }
            
        }
        setPlayer("Player4(Red)");
        handleWin(s,3);
        }, 1000);
    }

    function func4(){
        setTimeout(() => {
            setRolling("Click to Roll");
            if(f[3] === false){
                setButtonArray4(
                    (prev)=>{
                        temp = prev.map((eachbutton)=>
                            (eachbutton.id === sum4)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                        )
                        // console.log(temp); 
                        return temp;
                    }
                )
            }
            setRandomNumber4(((Math.floor(Math.random() * 6))+1));
            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.jpg`} alt={`dice${randomNumber4}`}></img>);
            let s = sum4 + randomNumber4;
            if(s>100){
                f[3] = true;
                //console.log(f);
            }
            if(s <= 100){
                if(f[3] === true){
                    setButtonArray4(
                        (prev)=>{
                            temp = prev.map((eachbutton)=>
                                (eachbutton.id === sum4)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                            )
                            // console.log(temp); 
                            return temp;
                        }
                    )
                }
                f[3] = false;
                if(s === 5){
                    setSum4(s+53);
                }
                else if(s === 14){
                    setSum4(s+35);
                }
                else if(s === 53){
                    setSum4(s+19);
                }
                else if(s === 64){
                    setSum4(s+19);
                }
                else if(s === 38){
                    setSum4(s-18);
                }
                else if(s === 51){
                    setSum4(s-41);
                }
                else if(s === 76){
                    setSum4(s-22);
                }
                else if(s === 91){
                    setSum4(s-18);
                }
                else if(s === 97){
                    setSum4(s-36);
                }
                else{
                    setSum4(s);
                }
                
            }
            setPlayer("Player1(Green)");
            handleWin(s,4);
        }, 1000);
    }

    function rollDice(){
        playy();
        setIsWin(false);
        setRolling("Click to Roll");
        setTimeout(() => {
            setRolling("🎲Rolling...")
            setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
            
            count++;
            if((count % 4) === 0){
                if(isWinnerRemoved[0] === false){
                if(start[0] === false){
                    if(randomNumber1 !== 1){
                        setTimeout(() => {
                            start[0] = false;
                            setRolling("Click to Roll");
                            setPlayer("Player2(Blue)");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.jpg`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[0] = true;
                            setRolling("Click to Roll");
                            setSum1(1);
                            setPlayer("Player2(Blue)");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.jpg`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    
                }
                else{func1();}
                }
            }
            if((count % 4) === 1){
                if(start[1] === false){
                    if(randomNumber2 !== 1){
                        setTimeout(() => {
                            start[1] = false;
                            setRolling("Click to Roll");
                            setPlayer("Player3(Yellow)");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber2}.jpg`} alt={`dice${randomNumber2}`}></img>);
                            setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[1] = true;
                            setRolling("Click to Roll");
                            setSum2(1);
                            setPlayer("Player3(Yellow)");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber2}.jpg`} alt={`dice${randomNumber2}`}></img>);
                            setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    
                }
                else{func2();}
            }
            if((count % 4) === 2){
                if(start[2] === false){
                    if(randomNumber3 !== 1){
                        setTimeout(() => {
                            start[2] = false;
                            setRolling("Click to Roll");
                            setPlayer("Player4(Red)");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.jpg`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[2] = true;
                            setRolling("Click to Roll");
                            setSum3(1);
                            setPlayer("Player4(Red)");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.jpg`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1)); 
                        }, 1000);
                    }
                    
                }
                else{func3();}
            }
            if((count % 4) === 3){
                if(start[3] === false){
                    if(randomNumber4 !== 1){
                        setTimeout(() => {
                            start[3] = false;
                            setRolling("Click to Roll");
                            setPlayer("Player1(Green)");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.jpg`} alt={`dice${randomNumber4}`}></img>);
                            setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[3] = true;
                            setRolling("Click to Roll");
                            setSum4(1);
                            setPlayer("Player1(Green)");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.jpg`} alt={`dice${randomNumber4}`}></img>);
                            setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    
                }
                else{func4();}
            }
        }, 500);
    }
    
    return (
        <div className="flex justify-evenly items-center h-[80vh]">
            <div className="h-[485px] w-[485px] bg-[url('/ludoboard.jpg')] bg-no-repeat bg-green-500 bg-auto bg-center">
                <div className="grid grid-cols-10 h-[485px] w-[485px]">
                {arr.map((ele, index)=>{
                    return (<MyCell key={index} index={index} buttonArray1={buttonArray1} buttonArray2={buttonArray2} buttonArray3={buttonArray3} buttonArray4={buttonArray4}/>);
                })}
                </div>
            </div>
            <div className="flex flex-col justify-evenly items-center h-[485px] w-[485px] rounded-3xl border-4 border-yellow-300">
                <div className="w-44 h-44 rounded-lg text-white font-bold text-2xl">{randomDiceImg}</div>
                <button className="bg-yellow-300 text-pink-700 px-6 py-3 rounded mt-5" onClick={rollDice}>{rolling}</button>
                <div className="font-mono font-bold text-center text-4xl text-cyan-200 pb-10">{(isWin)?`Winner: Player${winner}!!`:`Goo...${player}`}</div> 
            </div>
        </div>
    );

    function MyCell({index, buttonArray1, buttonArray2, buttonArray3, buttonArray4}){
        return (
            <div className="flex justify-center items-center">
                <div className="flex flex-col">
                    <div className={`h-5 w-5 ${(buttonArray1[index].isEqualToSum)?buttonArray1[index].data:buttonArray1[index].data}`}></div>
                    <div className={`h-5 w-5 ${(buttonArray2[index].isEqualToSum)?buttonArray2[index].data:buttonArray2[index].data}`}></div>
                </div>
                <div className="flex flex-col">
                    <div className={`h-5 w-5 ${(buttonArray3[index].isEqualToSum)?buttonArray3[index].data:buttonArray3[index].data}`}></div>
                    <div className={`h-5 w-5 ${(buttonArray4[index].isEqualToSum)?buttonArray4[index].data:buttonArray4[index].data}`}></div>
                </div>
            </div>
        );
    }
}
export default Game2;