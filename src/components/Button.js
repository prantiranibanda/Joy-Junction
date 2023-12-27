function Button({button}){
    return(
        <div>
            <button className="bg-[#fa02e1] text-2xl text-yellow-200 font-mono font-bold py-4 px-16 rounded-lg border-2 border-white shadow-lg shadow-blue-800/40  hover:shadow-xl hover:shadow-cyan-300/40">{button}</button>
        </div>
    );
}
export default Button;