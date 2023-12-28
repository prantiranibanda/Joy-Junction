import { Outlet, Link } from "react-router-dom";
function Navbar(){
    return(
        <>
            <div className="bg-orange-400 flex items-center py-3 border-b-8 border-yellow-300">
                <div className="mx-10 font-bold text-3xl text-blue-950 italic">Play</div>
                <div className="flex space-x-10 ml-auto mr-10 text-white text-xl font-bold box-border">
                    <Link to="/"><div className="px-3 py-2 rounded-lg border-2 border-red-500 bg-orange-500 hover:border-white hover:bg-yellow-300 hover:text-pink-500 hover:cursor-pointer">Home</div></Link>
                    <Link to="/game1"><div className="px-3 py-2 rounded-lg border-2 border-red-500 bg-orange-500 hover:border-white hover:bg-yellow-300 hover:text-pink-500 hover:cursor-pointer">Game1</div></Link>
                    <Link to="/game2"><div className="px-3 py-2 rounded-lg border-2 border-red-500 bg-orange-500 hover:border-white hover:bg-yellow-300 hover:text-pink-500 hover:cursor-pointer">Game2</div></Link>
                </div>
            </div>
            <div className="border-[#fa02e1] border-b-4"></div>
            <Outlet/>
        </>
    );
}
export default Navbar;