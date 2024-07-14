function MyButton({ no, handleClick, str }) {
	function handleHandleClick() {
		handleClick(no, str);
	}
	let cl = `bg-orange-500 flex justify-center items-baseline text-6xl font-medium ${str[no].data === "o" ? "text-white" : str[no].data === "x" ? "text-[#2206c2]" : "text-orange-500"}`;
	return (
		<div className={`${cl}`} onClick={handleHandleClick}>
			{str[no].data}
		</div>
	);
}
export default MyButton;
