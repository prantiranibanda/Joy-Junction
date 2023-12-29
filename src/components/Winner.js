function Winner({win}){
    function handleReset(){

    }
    return(
        <div>
            <div className="font-mono font-bold text-center text-5xl text-cyan-200 pb-10">{win}</div>
            <button className="bg-[#fa02e1] w-80 text-2xl text-yellow-200 font-mono font-bold py-4 px-16 rounded-lg border-2 border-white shadow-lg shadow-blue-800/40  hover:shadow-xl hover:shadow-cyan-300/40" onClick={handleReset}>Restart</button>
        </div>
    );
}
export default Winner;