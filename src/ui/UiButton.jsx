import clsx from "clsx";
import style from "./ui.module.scss";

const UiButton = ({ children, onClick, className, title }) => {
	return (
		<button className={clsx(style.btn, className)} onClick={onClick}>
			{children}
			<span>{title}</span>
		</button>
	);
};

export default UiButton;
