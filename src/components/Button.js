function Button({ button }) {
	return (
		<div>
			<button className="w-80 rounded-lg border-2 border-white bg-[#fa02e1] px-16 py-4 font-mono text-2xl font-bold text-yellow-200 shadow-lg shadow-blue-800/40 hover:shadow-xl hover:shadow-cyan-300/40">
				{button}
			</button>
		</div>
	);
}
export default Button;
