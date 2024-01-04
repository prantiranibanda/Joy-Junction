function Restart({setIsStart, isStart}){
    function restartHandle(){
        setIsStart(false);
    }
    return(
        <div>
            <button className={(isStart)? "bg-[#fa02e1] w-64 text-2xl text-yellow-200 font-mono font-bold py-3 px-12 rounded-lg border-2 border-white shadow-lg shadow-blue-800/40 hover:shadow-xl hover:shadow-cyan-300/40" : "hidden"} onClick={restartHandle}>Restart</button>
        </div>
    );
}
export default Restart;