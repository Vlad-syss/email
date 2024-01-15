import clsx from "clsx";
import style from "./ui.module.scss";

const Modal = ({ children, classNames }) => {
	return <div className={clsx(classNames, style.modal)}>{children}</div>;
};

export default Modal;
