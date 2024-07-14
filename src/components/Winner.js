function Winner({
	wino,
	drawo,
	setWinner,
	setStr,
	setIsZero,
	setDisplayWin,
	player,
	setPlayer,
	win,
}) {
	function handleReset() {
		wino.pause();
		drawo.pause();
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
		setStr(strArray);
		//console.log("object")
		setIsZero(true);
		setPlayer("Player-X's turn");
		setWinner(false);

		// setDisplayWin(
		//     <div>
		//         <div className="font-mono font-bold text-center text-6xl text-cyan-200">{player}</div>
		//     </div>
		// );
	}
	return (
		<div>
			<div className="pb-10 text-center font-mono text-5xl font-bold text-cyan-200">
				{win}
			</div>
			<button
				className="w-80 rounded-lg border-2 border-white bg-[#fa02e1] px-16 py-4 font-mono text-2xl font-bold text-yellow-200 shadow-lg shadow-blue-800/40 hover:shadow-xl hover:shadow-cyan-300/40"
				onClick={handleReset}
			>
				Restart
			</button>
		</div>
	);
}
export default Winner;
