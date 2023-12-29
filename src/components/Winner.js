function Winner({setStr, setIsZero, setDisplayWin, win}){
    function handleReset(){
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
        setStr(strArray)
        //console.log("object")  
        setIsZero(true);
        setDisplayWin(
            <div>
                <div className="font-mono font-bold text-center text-6xl text-cyan-200">Gooooo.....PlayerX</div>
            </div>
        ); 
    }
    return(
        <div>
            <div className="font-mono font-bold text-center text-5xl text-cyan-200 pb-10">{win}</div>
            <button className="bg-[#fa02e1] w-80 text-2xl text-yellow-200 font-mono font-bold py-4 px-16 rounded-lg border-2 border-white shadow-lg shadow-blue-800/40  hover:shadow-xl hover:shadow-cyan-300/40" onClick={handleReset}>Restart</button>
        </div>
    );
}
export default Winner;