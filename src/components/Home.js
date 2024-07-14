import Greet from "./Greet";
import Button from "./Button";
import { Outlet, Link } from "react-router-dom";
function Home() {
	return (
		<>
			<Greet />
			<div className="flex justify-center space-x-96 pt-8">
				<div className="flex w-80 flex-col justify-between">
					<img src="/tic-tac-toe.webp" alt="tictactoe" className="h-72 w-80" />
					<Link to="/game1">
						<Button button="Tic-Tac-Toe" />
					</Link>
				</div>
				<div className="flex w-80 flex-col justify-between">
					<img src="/diceghema.png" alt="dice" className="h-62 my-auto w-80" />
					<Link to="/game2">
						<Button button="Snake-Ladder" />
					</Link>
				</div>
				<Outlet />
			</div>
			<a
				href="https://github.com/prantiranibanda/Joy-Junction"
				target="_blank"
				rel="noreferrer"
				className="fixed bottom-3.5 right-5 text-[#d481fd] hover:text-[#e7cbf8]"
			>
				<i className="fi fi-brands-github text-4xl"></i>
			</a>
		</>
	);
}
export default Home;
