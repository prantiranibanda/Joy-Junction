import { useEffect, useState } from "react";
import win from '../audio/win.wav';
import click from '../audio/click.mp3';
import Restart from "./Restart";

let ct4 = -1;
let ct = 4; //used to reduce the no of dice to call function rollDice, rollDice3, rollDice2 
let ct3 = -1;
let ct2 = -1;
let f = [false, false, false, false];
let start = [false, false, false, false];
let isWinnerRemoved = [false, false, false, false];
let wino = new Audio(win);
let resultArray = new Array(3);
function Game2(){
    const [randomDiceImg, setRandomDiceImg] = useState(<img src="/ds.png" alt="dice" ></img>);
    const [sum1, setSum1] = useState(0);
    const [sum2, setSum2] = useState(0);
    const [sum3, setSum3] = useState(0);
    const [sum4, setSum4] = useState(0);
    const [randomNumber1, setRandomNumber1] = useState((Math.floor(Math.random() * 6))+1);
    const [randomNumber2, setRandomNumber2] = useState((Math.floor(Math.random() * 6))+1);
    const [randomNumber3, setRandomNumber3] = useState((Math.floor(Math.random() * 6))+1);
    const [randomNumber4, setRandomNumber4] = useState((Math.floor(Math.random() * 6))+1);
    const [isWin, setIsWin] = useState(false);
    const [player, setPlayer] = useState("Green's turn");
    const [winner, setWinner] = useState("");
    const [rolling, setRolling] = useState("Click to Roll");
    const [isRestart, setIsRestart] = useState(false);
    const [result, setResult] = useState(false);
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
            winclick();
            ct--;
            //1st...................................
            if(no === 1 && ct === 3){
                setWinner("1st:Green"); 
                resultArray.push("💚 1st: Green");
            }
            if(no === 2 && ct === 3){
                setWinner("1st:Blue");
                resultArray.push("💙 1st: Blue"); 
            }
            if(no === 3 && ct === 3){
                setWinner("1st:Yellow"); 
                resultArray.push("💛 1st: Yellow"); 
            }
            if(no === 4 && ct === 3){
                setWinner("1st:Red");
                resultArray.push("❤️ 1st: Red");  
            }
            //2nd....................................
            if(no === 1 && ct === 2){
                setWinner("2nd:Green"); 
                resultArray.push("💚 2nd: Green"); 
            }
            if(no === 2 && ct === 2){
                setWinner("2nd:Blue"); 
                resultArray.push("💙 2nd: Blue"); 
            }
            if(no === 3 && ct === 2){
                setWinner("2nd:Yellow"); 
                resultArray.push("💛 2nd: Yellow"); 
            }
            if(no === 4 && ct === 2){
                setWinner("2nd:Red"); 
                resultArray.push("❤️ 2nd: Red"); 
            }
            //3rd....................................
            if(no === 1 && ct === 1){
                setWinner("3rd:Green");
                resultArray.push("💚 3rd: Green");  
            }
            if(no === 2 && ct === 1){
                setWinner("3rd:Blue");
                resultArray.push("💙 3rd: Blue");   
            }
            if(no === 3 && ct === 1){
                setWinner("3rd:Yellow"); 
                resultArray.push("💛 3rd: Yellow");  
            }
            if(no === 4 && ct === 1){
                setWinner("3rd:Red"); 
                resultArray.push("❤️ 3rd: Red");  
            }
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
            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
            let s = 100//sum1 + randomNumber1;
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
                // else if(s === 38){
                //     setSum1(s-18);
                // }
                // else if(s === 51){
                //     setSum1(s-41);
                // }
                // else if(s === 76){
                //     setSum1(s-22);
                // }
                // else if(s === 91){
                //     setSum1(s-18);
                // }
                // else if(s === 97){
                //     setSum1(s-36);
                // }
                else{
                    setSum1(s);
                }
                
            }
            //setPlayer("Blue's turn");
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
        setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
        let s = 100//sum2 + randomNumber2;
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
            // else if(s === 38){
            //     setSum2(s-18);
            // }
            // else if(s === 51){
            //     setSum2(s-41);
            // }
            // else if(s === 76){
            //     setSum2(s-22);
            // }
            // else if(s === 91){
            //     setSum2(s-18);
            // }
            // else if(s === 97){
            //     setSum2(s-36);
            // }
            else{
                setSum2(s);
            }
            
        }
        //setPlayer("Yellow's turn");
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
        setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
        let s = 100//sum3 + randomNumber3;
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
            // else if(s === 38){
            //     setSum3(s-18);
            // }
            // else if(s === 51){
            //     setSum3(s-41);
            // }
            // else if(s === 76){
            //     setSum3(s-22);
            // }
            // else if(s === 91){
            //     setSum3(s-18);
            // }
            // else if(s === 97){
            //     setSum3(s-36);
            // }
            else{
                setSum3(s);
            }
            
        }
        //setPlayer("Red's turn");
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
            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
            let s = 100//sum4 + randomNumber4;
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
                // else if(s === 38){
                //     setSum4(s-18);
                // }
                // else if(s === 51){
                //     setSum4(s-41);
                // }
                // else if(s === 76){
                //     setSum4(s-22);
                // }
                // else if(s === 91){
                //     setSum4(s-18);
                // }
                // else if(s === 97){
                //     setSum4(s-36);
                // }
                else{
                    setSum4(s);
                }
                
            }
            //setPlayer("Green's turn");
            handleWin(s,4);
        }, 1000);
    }

    function rollDice(){
        setIsRestart(true);
        playy();
        setIsWin(false);
        setRolling("Click to Roll");
        setRolling("🎲Rolling...")
        setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
        
        ct4++;
        if((ct4 % 4) === 0){
            if(isWinnerRemoved[0] === false){
                if(start[0] === false){
                    if(randomNumber1 !== 1){
                        setTimeout(() => {
                            start[0] = false;
                            setRolling("Click to Roll");
                            setPlayer("Blue's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[0] = true;
                            setRolling("Click to Roll");
                            setSum1(1);
                            setPlayer("Blue's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    
                }
                else{
                    func1();
                    setTimeout(() => {
                    setPlayer("Blue's turn"); 
                    }, 1000);
                }
            }
        }
        if((ct4 % 4) === 1){
            if(start[1] === false){
                if(randomNumber2 !== 1){
                    setTimeout(() => {
                        start[1] = false;
                        setRolling("Click to Roll");
                        setPlayer("Yellow's turn");
                        setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                        setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                    }, 1000);
                }
                else{
                    setTimeout(() => {
                        start[1] = true;
                        setRolling("Click to Roll");
                        setSum2(1);
                        setPlayer("Yellow's turn");
                        setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                        setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                    }, 1000);
                }
                
            }
            else{
                func2();
                setTimeout(() => {
                    setPlayer("Yellow's turn");  
                }, 1000);
            }
        }
        if((ct4 % 4) === 2){
            if(start[2] === false){
                if(randomNumber3 !== 1){
                    setTimeout(() => {
                        start[2] = false;
                        setRolling("Click to Roll");
                        setPlayer("Red's turn");
                        setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                        setRandomNumber3(((Math.floor(Math.random() * 6))+1));
                    }, 1000);
                }
                else{
                    setTimeout(() => {
                        start[2] = true;
                        setRolling("Click to Roll");
                        setSum3(1);
                        setPlayer("Red's turn");
                        setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                        setRandomNumber3(((Math.floor(Math.random() * 6))+1)); 
                    }, 1000);
                }
                
            }
            else{
                func3();
                setTimeout(() => {
                    setPlayer("Red's turn"); 
                }, 1000);
                
            }
        }
        if((ct4 % 4) === 3){
            if(start[3] === false){
                if(randomNumber4 !== 1){
                    setTimeout(() => {
                        start[3] = false;
                        setRolling("Click to Roll");
                        setPlayer("Green's turn");
                        setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                        setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                    }, 1000);
                }
                else{
                    setTimeout(() => {
                        start[3] = true;
                        setRolling("Click to Roll");
                        setSum4(1);
                        setPlayer("Green's turn");
                        setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                        setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                    }, 1000);
                }
                
            }
            else{
                func4();
                setTimeout(() => {
                    setPlayer("Green's turn");
                }, 1000);
            }
        }
    }
    
    function rollDice3(){
        playy();
        setIsWin(false);
        setRolling("Click to Roll");
        if(isWinnerRemoved[0] === true && isWinnerRemoved[1] === false && isWinnerRemoved[2] === false && isWinnerRemoved[3] === false){
            
                setRolling("🎲Rolling...")
                setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
                
                ct3++;
                if((ct3 % 3) === 0){
                    if(start[1] === false){
                        if(randomNumber2 !== 1){
                            setTimeout(() => {
                                start[1] = false;
                                setRolling("Click to Roll");
                                setPlayer("Yellow's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                                setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[1] = true;
                                setRolling("Click to Roll");
                                setSum2(1);
                                setPlayer("Yellow's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                                setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        
                    }
                    else{
                        func2();
                        setTimeout(()=>{
                            setPlayer("Yellow's turn");
                        },1000);
                        
                    }
                }
                if((ct3 % 3) === 1){
                    if(start[2] === false){
                        if(randomNumber3 !== 1){
                            setTimeout(() => {
                                start[2] = false;
                                setRolling("Click to Roll");
                                setPlayer("Red's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                                setRandomNumber3(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[2] = true;
                                setRolling("Click to Roll");
                                setSum3(1);
                                setPlayer("Red's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                                setRandomNumber3(((Math.floor(Math.random() * 6))+1)); 
                            }, 1000);
                        }
                        
                    }
                    else{
                        func3();
                        
                        setTimeout(()=>{
                            setPlayer("Red's turn");
                        },1000);
                    }
                }
                if((ct3 % 3) === 2){
                    if(start[3] === false){
                        if(randomNumber4 !== 1){
                            setTimeout(() => {
                                start[3] = false;
                                setRolling("Click to Roll");
                                setPlayer("Blue's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                                setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[3] = true;
                                setRolling("Click to Roll");
                                setSum4(1);
                                setPlayer("Blue's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                                setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        
                    }
                    else{
                        func4();
                        
                        setTimeout(()=>{
                            setPlayer("Blue's turn");
                        },1000);
                    }
                }
            
        }
        if(isWinnerRemoved[0] === false && isWinnerRemoved[1] === true && isWinnerRemoved[2] === false && isWinnerRemoved[3] === false){
            setRolling("🎲Rolling...")
            setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
            
            ct3++;
            if((ct3 % 3) === 2){
                if(isWinnerRemoved[0] === false){
                if(start[0] === false){
                    if(randomNumber1 !== 1){
                        setTimeout(() => {
                            start[0] = false;
                            setRolling("Click to Roll");
                            setPlayer("Yellow's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[0] = true;
                            setRolling("Click to Roll");
                            setSum1(1);
                            setPlayer("Yellow's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                            console.log("2",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func1();
                    
                    setTimeout(()=>{
                        setPlayer("Yellow's turn");
                    },1000);
                }
                }
            }
            if((ct3 % 3) === 0){
                if(start[2] === false){
                    if(randomNumber3 !== 1){
                        setTimeout(() => {
                            start[2] = false;
                            setRolling("Click to Roll");
                            setPlayer("Red's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[2] = true;
                            setRolling("Click to Roll");
                            setSum3(1);
                            setPlayer("Red's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1)); 
                            console.log("2",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func3();
                    
                    setTimeout(()=>{
                        setPlayer("Red's turn");
                    },1000);
                }
            }
            if((ct3 % 3) === 1){
                if(start[3] === false){
                    if(randomNumber4 !== 1){
                        setTimeout(() => {
                            start[3] = false;
                            setRolling("Click to Roll");
                            setPlayer("Green's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                            setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[3] = true;
                            setRolling("Click to Roll");
                            setSum4(1);
                            setPlayer("Green's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                            setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                            console.log("2",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func4();
                    
                    setTimeout(()=>{
                        setPlayer("Green's turn");
                    },1000);
                }
            }
            
        }
        if(isWinnerRemoved[0] === false && isWinnerRemoved[1] === false && isWinnerRemoved[2] === true && isWinnerRemoved[3] === false){
                setRolling("🎲Rolling...")
                setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
                
                ct3++;
                if((ct3 % 3) === 1){
                    if(isWinnerRemoved[0] === false){
                    if(start[0] === false){
                        if(randomNumber1 !== 1){
                            setTimeout(() => {
                                start[0] = false;
                                setRolling("Click to Roll");
                                setPlayer("Blue's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                                setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[0] = true;
                                setRolling("Click to Roll");
                                setSum1(1);
                                setPlayer("Blue's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                                setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                                
                            }, 1000);
                        }
                        console.log("3",player,ct3,"--------------");
                    }
                    else{
                        func1();
                        
                        setTimeout(()=>{
                            setPlayer("Blue's turn");
                        },1000);
                    }
                    }
                }
                if((ct3 % 3) === 2){
                    if(start[1] === false){
                        if(randomNumber2 !== 1){
                            setTimeout(() => {
                                start[1] = false;
                                setRolling("Click to Roll");
                                setPlayer("Red's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                                setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[1] = true;
                                setRolling("Click to Roll");
                                setSum2(1);
                                setPlayer("Red's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                                setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        
                    }
                    else{
                        func2();
                        
                        setTimeout(()=>{
                            setPlayer("Red's turn");
                        },1000);
                    }
                }
                if((ct3 % 3) === 0){
                    if(start[3] === false){
                        if(randomNumber4 !== 1){
                            setTimeout(() => {
                                start[3] = false;
                                setRolling("Click to Roll");
                                setPlayer("Green's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                                setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[3] = true;
                                setRolling("Click to Roll");
                                setSum4(1);
                                setPlayer("Green's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                                setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        
                    }
                    else{
                        func4();
                        
                        setTimeout(()=>{
                            setPlayer("Green's turn");
                        },1000);
                    }
                }
            
        }
        if(isWinnerRemoved[0] === false && isWinnerRemoved[1] === false && isWinnerRemoved[2] === false && isWinnerRemoved[3] === true){
            setRolling("🎲Rolling...")
            setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
            
            ct3++;
            if((ct3 % 3) === 0){
                if(isWinnerRemoved[0] === false){
                if(start[0] === false){
                    if(randomNumber1 !== 1){
                        setTimeout(() => {
                            start[0] = false;
                            setRolling("Click to Roll");
                            setPlayer("Blue's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[0] = true;
                            setRolling("Click to Roll");
                            setSum1(1);
                            setPlayer("Blue's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                            
                        }, 1000);
                    }
                    console.log("4",player,ct3,"--------------");
                }
                else{
                    func1();
                    
                    setTimeout(()=>{
                        setPlayer("Blue's turn");
                    },1000);
                }
                }
            }
            if((ct3 % 3) === 1){
                if(start[1] === false){
                    if(randomNumber2 !== 1){
                        setTimeout(() => {
                            start[1] = false;
                            setRolling("Click to Roll");
                            setPlayer("Yellow's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                            setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[1] = true;
                            setRolling("Click to Roll");
                            setSum2(1);
                            setPlayer("Yellow's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                            setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                            
                        }, 1000);
                    }
                    console.log("4",player,ct3,"--------------");
                }
                else{
                    func2();
                    setTimeout(()=>{
                        setPlayer("Yellow's turn");
                    },1000);
                }
            }
            if((ct3 % 3) === 2){
                if(start[2] === false){
                    if(randomNumber3 !== 1){
                        setTimeout(() => {
                            start[2] = false;
                            setRolling("Click to Roll");
                            setPlayer("Green's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[2] = true;
                            setRolling("Click to Roll");
                            setSum3(1);
                            setPlayer("Green's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1)); 
                            
                        }, 1000);
                    }
                }
                else{
                    func3();
                    
                    setTimeout(()=>{
                        setPlayer("Green's turn");
                    },1000);
                }
            }
        }
    }

    function rollDice2(){
        playy();
        setIsWin(false);
        setRolling("Click to Roll");
        if(isWinnerRemoved[0] === true && isWinnerRemoved[1] === true && isWinnerRemoved[2] === false && isWinnerRemoved[3] === false){
            setRolling("🎲Rolling...")
            setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
            ct2++;

            if((ct2 % 2) === 0){
                if(start[2] === false){
                    if(randomNumber3 !== 1){
                        setTimeout(() => {
                            start[2] = false;
                            setRolling("Click to Roll");
                            setPlayer("Red's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[2] = true;
                            setRolling("Click to Roll");
                            setSum3(1);
                            setPlayer("Red's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1)); 
                            console.log("1",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func3();
                    setTimeout(()=>{
                        setPlayer("Red's turn");
                    },1000);
                }
            }
            if((ct2 % 2) === 1){
                if(start[3] === false){
                    if(randomNumber4 !== 1){
                        setTimeout(() => {
                            start[3] = false;
                            setRolling("Click to Roll");
                            setPlayer("Yellow's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                            setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[3] = true;
                            setRolling("Click to Roll");
                            setSum4(1);
                            setPlayer("Yellow's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                            setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                            console.log("1",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func4();
                    
                    setTimeout(()=>{
                        setPlayer("Yellow's turn");
                    },1000);
                }
            }
        }
        if(isWinnerRemoved[0] === true && isWinnerRemoved[1] === false && isWinnerRemoved[2] === true && isWinnerRemoved[3] === false){
            setRolling("🎲Rolling...")
            setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
            ct2++;
            if((ct4 % 4) === 2){
                if((ct2 % 2) === 0){
                    if(start[3] === false){
                        if(randomNumber4 !== 1){
                            setTimeout(() => {
                                start[3] = false;
                                setRolling("Click to Roll");
                                setPlayer("Blue's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                                setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[3] = true;
                                setRolling("Click to Roll");
                                setSum4(1);
                                setPlayer("Blue's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                                setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                                console.log("1",player,ct3,"--------------");
                            }, 1000);
                        }
                        
                    }
                    else{
                        func4();
                        
                        setTimeout(()=>{
                            setPlayer("Blue's turn");
                        },1000);
                    }
                }
                if((ct2 % 2) === 1){
                    if(start[1] === false){
                        if(randomNumber2 !== 1){
                            setTimeout(() => {
                                start[1] = false;
                                setRolling("Click to Roll");
                                setPlayer("Red's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                                setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[1] = true;
                                setRolling("Click to Roll");
                                setSum2(1);
                                setPlayer("Red's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                                setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                                console.log("3",player,ct3,"--------------");
                            }, 1000);
                        }
                        
                    }
                    else{
                        func2();
                        
                        setTimeout(()=>{
                            setPlayer("Red's turn");
                        },1000);
                    }
                }
            }
            if((ct4 % 4) === 0){
                if((ct2 % 2) === 0){
                    if(start[1] === false){
                        if(randomNumber2 !== 1){
                            setTimeout(() => {
                                start[1] = false;
                                setRolling("Click to Roll");
                                setPlayer("Red's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                                setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[1] = true;
                                setRolling("Click to Roll");
                                setSum2(1);
                                setPlayer("Red's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                                setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                                console.log("3",player,ct3,"--------------");
                            }, 1000);
                        }
                        
                    }
                    else{
                        func2();
                        
                        setTimeout(()=>{
                            setPlayer("Red's turn");
                        },1000);
                    }
                }
                if((ct2 % 2) === 1){
                
                    if(start[3] === false){
                        if(randomNumber4 !== 1){
                            setTimeout(() => {
                                start[3] = false;
                                setRolling("Click to Roll");
                                setPlayer("Blue's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                                setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[3] = true;
                                setRolling("Click to Roll");
                                setSum4(1);
                                setPlayer("Blue's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                                setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                                console.log("1",player,ct3,"--------------");
                            }, 1000);
                        }
                        
                    }
                    else{
                        func4();
                        
                        setTimeout(()=>{
                            setPlayer("Blue's turn");
                        },1000);
                    }
                }
            }
        }
        if(isWinnerRemoved[0] === true && isWinnerRemoved[1] === false && isWinnerRemoved[2] === false && isWinnerRemoved[3] === true){
            setRolling("🎲Rolling...")
            setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
            ct2++;

            if((ct2 % 2) === 0){
                if(start[1] === false){
                    if(randomNumber2 !== 1){
                        setTimeout(() => {
                            start[1] = false;
                            setRolling("Click to Roll");
                            setPlayer("Yellow's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                            setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[1] = true;
                            setRolling("Click to Roll");
                            setSum2(1);
                            setPlayer("Yellow's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                            setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                            console.log("1",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func2();
                    setTimeout(()=>{
                        setPlayer("Yellow's turn");
                    },1000);
                    
                }
            }
            if((ct2 % 2) === 1){
                if(start[2] === false){
                    if(randomNumber3 !== 1){
                        setTimeout(() => {
                            start[2] = false;
                            setRolling("Click to Roll");
                            setPlayer("Blue's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[2] = true;
                            setRolling("Click to Roll");
                            setSum3(1);
                            setPlayer("Blue's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                            setRandomNumber3(((Math.floor(Math.random() * 6))+1)); 
                            console.log("1",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func3();
                    
                    setTimeout(()=>{
                        setPlayer("Blue's turn");
                    },1000);
                }
            }
        }
        //..................
        if(isWinnerRemoved[0] === false && isWinnerRemoved[1] === true && isWinnerRemoved[2] === true && isWinnerRemoved[3] === false){
            setRolling("🎲Rolling...")
            setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
            ct2++;

            if((ct2 % 2) === 0){
                if(start[3] === false){
                    if(randomNumber4 !== 1){
                        setTimeout(() => {
                            start[3] = false;
                            setRolling("Click to Roll");
                            setPlayer("Green's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                            setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[3] = true;
                            setRolling("Click to Roll");
                            setSum4(1);
                            setPlayer("Green's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber4}.png`} alt={`dice${randomNumber4}`}></img>);
                            setRandomNumber4(((Math.floor(Math.random() * 6))+1));
                            console.log("1",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func4();
                    
                    setTimeout(()=>{
                        setPlayer("Green's turn");
                    },1000);
                }
            }
            if((ct2 % 2) === 1){
                if(start[0] === false){
                    if(randomNumber1 !== 1){
                        setTimeout(() => {
                            start[0] = false;
                            setRolling("Click to Roll");
                            setPlayer("Red's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[0] = true;
                            setRolling("Click to Roll");
                            setSum1(1);
                            setPlayer("Red's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                            console.log("2",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func1();
                    
                    setTimeout(()=>{
                        setPlayer("Red's turn");
                    },1000);
                }
            }
        }
        if(isWinnerRemoved[0] === false && isWinnerRemoved[1] === true && isWinnerRemoved[2] === false && isWinnerRemoved[3] === true){
            setRolling("🎲Rolling...")
            setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
            ct2++;
            if((ct4 % 4) === 1){
                if((ct2 % 2) === 0){
                    if(start[2] === false){
                        if(randomNumber3 !== 1){
                            setTimeout(() => {
                                start[2] = false;
                                setRolling("Click to Roll");
                                setPlayer("Green's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                                setRandomNumber3(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[2] = true;
                                setRolling("Click to Roll");
                                setSum3(1);
                                setPlayer("Green's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                                setRandomNumber3(((Math.floor(Math.random() * 6))+1)); 
                                
                            }, 1000);
                        }
                        console.log("4",player,ct3,"--------------");
                    }
                    else{
                        func3();
                        
                        setTimeout(()=>{
                            setPlayer("Green's turn");
                        },1000);
                    }
                }
                if((ct2 % 2) === 1){
                    if(start[0] === false){
                        if(randomNumber1 !== 1){
                            setTimeout(() => {
                                start[0] = false;
                                setRolling("Click to Roll");
                                setPlayer("Yellow's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                                setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[0] = true;
                                setRolling("Click to Roll");
                                setSum1(1);
                                setPlayer("Yellow's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                                setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                                console.log("2",player,ct3,"--------------");
                            }, 1000);
                        }
                        
                    }
                    else{
                        func1();
                        
                        setTimeout(()=>{
                            setPlayer("Yellow's turn");
                        },1000);
                    }
                }
            }
            if((ct4 % 4) === 3){
                if((ct2 % 2) === 0){
                    if(start[0] === false){
                        if(randomNumber1 !== 1){
                            setTimeout(() => {
                                start[0] = false;
                                setRolling("Click to Roll");
                                setPlayer("Yellow's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                                setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[0] = true;
                                setRolling("Click to Roll");
                                setSum1(1);
                                setPlayer("Yellow's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                                setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                                console.log("2",player,ct3,"--------------");
                            }, 1000);
                        }
                        
                    }
                    else{
                        func1();
                        
                        setTimeout(()=>{
                            setPlayer("Yellow's turn");
                        },1000);
                    }
                }
                if((ct2 % 2) === 1){
                
                    if(start[2] === false){
                        if(randomNumber3 !== 1){
                            setTimeout(() => {
                                start[2] = false;
                                setRolling("Click to Roll");
                                setPlayer("Green's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                                setRandomNumber3(((Math.floor(Math.random() * 6))+1));
                            }, 1000);
                        }
                        else{
                            setTimeout(() => {
                                start[2] = true;
                                setRolling("Click to Roll");
                                setSum3(1);
                                setPlayer("Green's turn");
                                setRandomDiceImg(<img src={`/images/ds${randomNumber3}.png`} alt={`dice${randomNumber3}`}></img>);
                                setRandomNumber3(((Math.floor(Math.random() * 6))+1)); 
                                
                            }, 1000);
                        }
                        console.log("4",player,ct3,"--------------");
                    }
                    else{
                        func3();
                        
                        setTimeout(()=>{
                            setPlayer("Green's turn");
                        },1000);
                    }
                }
            }
        }
        if(isWinnerRemoved[0] === false && isWinnerRemoved[1] === false && isWinnerRemoved[2] === true && isWinnerRemoved[3] === true){
            setRolling("🎲Rolling...")
            setRandomDiceImg(<a href="https://www.animatedimages.org/cat-dice-710.htm"><img src="https://www.animatedimages.org/data/media/710/animated-dice-image-0063.gif" border="0" alt="animated-dice-image-0063" className="h-56 w-56" /></a>)
            ct2++;

            if((ct2 % 2) === 0){
                if(start[0] === false){
                    if(randomNumber1 !== 1){
                        setTimeout(() => {
                            start[0] = false;
                            setRolling("Click to Roll");
                            setPlayer("Blue's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[0] = true;
                            setRolling("Click to Roll");
                            setSum1(1);
                            setPlayer("Blue's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber1}.png`} alt={`dice${randomNumber1}`}></img>);
                            setRandomNumber1(((Math.floor(Math.random() * 6))+1));
                            
                        }, 1000);
                    }
                    console.log("3",player,ct3,"--------------");
                }
                else{
                    func1();
                    
                    setTimeout(()=>{
                        setPlayer("Blue's turn");
                    },1000);
                }
            }
            if((ct2 % 2) === 1){
                if(start[1] === false){
                    if(randomNumber2 !== 1){
                        setTimeout(() => {
                            start[1] = false;
                            setRolling("Click to Roll");
                            setPlayer("Green's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                            setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                        }, 1000);
                    }
                    else{
                        setTimeout(() => {
                            start[1] = true;
                            setRolling("Click to Roll");
                            setSum2(1);
                            setPlayer("Green's turn");
                            setRandomDiceImg(<img src={`/images/ds${randomNumber2}.png`} alt={`dice${randomNumber2}`}></img>);
                            setRandomNumber2(((Math.floor(Math.random() * 6))+1));
                            console.log("3",player,ct3,"--------------");
                        }, 1000);
                    }
                    
                }
                else{
                    func2();
                    
                    setTimeout(()=>{
                        setPlayer("Green's turn");
                    },1000);
                }
            }
        }
    }

    function restartHandle(){
        if(ct === 1){
            setResult(true);
        }
        else{
            setResult(false);
            resultArray = [];
        }
        setIsRestart(false);
        ct4 = -1;
        ct3 = -1;
        ct2 = -1;
        ct = 4;
        f = [false, false, false, false];
        start = [false, false, false, false];
        isWinnerRemoved = [false, false, false, false];
        setRandomDiceImg(<img src="/ds.png" alt="dice" ></img>);
        setButtonArray1(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum1)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                )
                return temp;
            }
        )
        setButtonArray2(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum2)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                )
                return temp;
            }
        )
        setButtonArray3(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum3)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                )
                return temp;
            }
        )
        setButtonArray4(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum4)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                ) 
                return temp;
            }
        )
        setSum1(0);
        setSum2(0);
        setSum3(0);
        setSum4(0);
        setPlayer("Green's turn");
        setWinner("Green's turn");
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
            <div className="">
                <div className={(result)?"hidden":"flex flex-col justify-evenly items-center h-[485px] w-[485px] rounded-3xl border-4 border-yellow-300"}>   
                    <div className="w-48 h-48 rounded-lg text-white font-bold text-2xl">{randomDiceImg}</div>
                    <button className="bg-yellow-300 text-pink-700 px-6 py-3 rounded" onClick={(ct === 4)? rollDice : ((ct === 3)? rollDice3 : rollDice2)}>{rolling}</button>
                    <div className="font-mono font-bold text-center text-4xl text-cyan-200">{(isWin)?`${winner}`:`${player}`}</div> 
                    {/* restart button */}
                    <button className={(isRestart)? "bg-[#fa02e1] w-64 text-2xl text-yellow-200 font-mono font-bold py-3 px-12 rounded-lg border-2 border-white shadow-lg shadow-blue-800/40 hover:shadow-xl hover:shadow-cyan-300/40" : "hidden"} onClick={restartHandle}>{(ct === 1)? "Finish": "Restart"}</button>
                </div> 
                <div className={(result)?"flex flex-col justify-evenly items-center h-[485px] w-[485px] rounded-3xl border-4 border-yellow-300":"hidden"}>
                    <div className="font-mono font-bold text-center text-4xl text-cyan-400">Snake-Ladder Game</div>
                    {
                        resultArray.map((ele)=>{
                            return <div className="text-2xl text-center bg-yellow-300 border-2 border-white rounded-lg my-3 font-bold text-[#fa02e1] w-80 px-5 py-3">{ele}</div>
                        })
                    }
                    <button className="bg-[#fa02e1] w-64 text-2xl text-yellow-200 font-mono font-bold py-3 px-12 rounded-lg border-2 border-white shadow-lg shadow-blue-800/40 hover:shadow-xl hover:shadow-cyan-300/40" onClick={restartHandle}>Restart</button>
                </div>
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