import { useState } from "react";

function Game2(){
    const [randomDiceImg, setRandomDiceImg] = useState(null);
    const [sum, setSum] = useState(0);
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
    //console.log(arr);
    const [buttonArray, setButtonArray] = useState(arr);
    let randomNumber,temp;

    function handleFunc(temp){
        // setButtonArray(
        //     (prev)=>{
        //         temp = prev.map((eachbutton)=>
        //             (eachbutton.id === sum)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
        //         )
        //         // console.log(temp); 
        //         return temp;
        //     }
        // )
    }

    function rollDice(){
        setButtonArray(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum)?{...eachbutton, data: "", isEqualToSum: false}:{...eachbutton}
                )
                // console.log(temp); 
                return temp;
            }
        )
        
        randomNumber = ((Math.floor(Math.random() * 6))+1);
        setRandomDiceImg(<img src={`/images/ds${randomNumber}.jpg`} alt={`dice${randomNumber}`}></img>);
        setSum(sum + randomNumber);
         
        setButtonArray(
            (prev)=>{
                temp = prev.map((eachbutton)=>
                    (eachbutton.id === sum)?{...eachbutton, data: "bg-green-400", isEqualToSum: true}:{...eachbutton}
                )
                // console.log(temp);
                return temp;
            }    
        ) 
        setTimeout(() => {
            handleFunc(temp);
        }, 200);
    }
    
    return (
        <div className="flex justify-center items-center h-[80vh]">
        <div className="h-[485px] w-[485px] bg-[url('/ludoboard.jpg')] bg-no-repeat bg-green-500 bg-auto bg-center">
            <div className="grid grid-cols-10 h-[485px] w-[485px]">
            {arr.map((ele, index)=>{
                return (<MyCell index={index} buttonArray={buttonArray}/>);
            })}
            </div>
            <div className="w-9 h-9 rounded-lg text-white font-bold text-2xl">{randomDiceImg}</div>
            <button className="bg-yellow-300 text-pink-700 px-6 py-3 rounded mt-5" onClick={rollDice}>Click to roll</button>
        </div>
        </div>
  );
  function MyCell({index, buttonArray}){
    return (
            <div className={`${(buttonArray[index].isEqualToSum)?buttonArray[index].data:buttonArray[index].data}`}>{buttonArray[index].id}</div>
        
    );
  }
}
export default Game2;