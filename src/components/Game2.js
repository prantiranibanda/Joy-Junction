import { useState } from "react";

function Game2(){
    const [randomDiceImg, setRandomDiceImg] = useState(null);

    function rollDice(){
        let randomNumber = ((Math.floor(Math.random() * 6))+1);
        setRandomDiceImg(<img src={`/images/ds${randomNumber}.jpg`} alt={`dice${randomNumber}`}></img>)
    }
    
    // return(
    //     <div className="flex flex-col justify-center items-center h-[80vh]">
    //         <div className="w-56 h-56 rounded-lg text-white font-bold text-2xl">{randomDiceImg}</div>
    //         <button className="bg-yellow-300 text-pink-700 px-6 py-3 rounded mt-5" onClick={rollDice}>Click to roll</button> 
    //     </div>
        
    // );
    
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
                    arr.push(k);
                    k--;
                }
                else{
                    arr.push(k);
                    k++;
                }
            }
            //System.out.println();
        }
    console.log(arr);
    
    return (
        <div className="flex justify-center items-center h-[80vh]">
        <div className="h-[485px] w-[485px] bg-[url('/ludoboard.jpg')] bg-no-repeat bg-green-500 bg-auto bg-center">
            <div className="grid grid-cols-10 h-[485px] w-[485px]">
            {arr.map((ele)=>{
                return (<MyCell ele={ele}/>);
            })}
            </div>
            <div className="w-9 h-9 rounded-lg text-white font-bold text-2xl">{randomDiceImg}</div>
            <button className="bg-yellow-300 text-pink-700 px-6 py-3 rounded mt-5" onClick={rollDice}>Click to roll</button>
        </div>
        </div>
  );
  function MyCell({ele}){
    const [b, setB] = useState("");

    function func(){
            setB("bg-red-300");
    }
    return (
        <div className={`hover:bg-slate-400 ${b}`} onClick={func}></div>
    );
  }
}
export default Game2;