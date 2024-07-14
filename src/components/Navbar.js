import { Outlet, Link } from "react-router-dom";
function Navbar() {
	return (
		<>
			<div className="flex items-center border-b-8 border-yellow-300 bg-orange-400 py-3">
				<div className="mx-10 text-3xl font-bold italic text-blue-950">
					Joy-Junction
				</div>
				<div className="ml-auto mr-10 box-border flex space-x-10 text-xl font-bold text-white">
					<Link to="/">
						<div className="rounded-lg border-2 border-red-500 bg-orange-500 px-3 py-2 hover:cursor-pointer hover:border-white hover:bg-yellow-300 hover:text-pink-500">
							Home
						</div>
					</Link>
					<Link to="/game1">
						<div className="rounded-lg border-2 border-red-500 bg-orange-500 px-3 py-2 hover:cursor-pointer hover:border-white hover:bg-yellow-300 hover:text-pink-500">
							Game1
						</div>
					</Link>
					<Link to="/game2">
						<div className="rounded-lg border-2 border-red-500 bg-orange-500 px-3 py-2 hover:cursor-pointer hover:border-white hover:bg-yellow-300 hover:text-pink-500">
							Game2
						</div>
					</Link>
				</div>
			</div>
			<div className="border-b-4 border-[#fa02e1]"></div>
			<Outlet />
		</>
	);
}
export default Navbar;
