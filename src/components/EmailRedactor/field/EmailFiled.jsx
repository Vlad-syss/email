import { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import style from "./EmailFiled.module.scss";
import MiniModal from "./MiniModal";

const EmailFiled = () => {
	const { countWords } = useActions();
	const [selectedText, setSelectedText] = useState("");
	const defaultValue = "Here's your message...";

	const handleSelect = () => {
		setTimeout(() => {
			const selection = window.getSelection().toString();
			setSelectedText(selection);
			console.log(selection);
		});
	};

	const handleMouseDown = () => {
		setSelectedText("");
	};

	useEffect(() => {
		countWords(defaultValue);
	}, [defaultValue, countWords]);

	return (
		<div className={style.field}>
			<textarea
				name="text"
				className={style.textarea}
				onChange={(e) => countWords(e.target.value)}
				onSelect={handleSelect}
				onMouseDown={handleMouseDown}
				defaultValue={defaultValue}
				placeholder="..."
			/>
			{selectedText && <MiniModal />}
		</div>
	);
};

export default EmailFiled;
