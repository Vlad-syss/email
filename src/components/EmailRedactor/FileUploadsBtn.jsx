import style from "./EmailRedactor.module.scss";
import UiButton from "../../ui/UiButton";
import { FaUpload } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { CgTemplate } from "react-icons/cg";
import { FaRegSmile } from "react-icons/fa";
import { GoPaperclip } from "react-icons/go";
import { useRef } from "react";
import { useActions } from "../../hooks/useActions";
import { AiFillDelete } from "react-icons/ai";
import { useForm } from "../../hooks/useForm";

const FileUploadButtons = () => {
	const input = useRef();
	const { uploadFile } = useActions();
	const { file } = useForm();

	const handlerFile = () => {
		const inputValue = input.current.files[0].name;
		const inputSize = input.current.files[0].size;
		const inputIcon = inputValue.match(
			/\.(rar|exe|pdf|txt|docx|jpg|png|zip|TXT)/
		);
		uploadFile({ name: inputValue, size: inputSize, icon: inputIcon });
	};
	const handlerDelete = () => {
		if (file) {
			uploadFile({ name: "", size: "", icon: "" });
		}
	};

	return (
		<>
			<div>
				<UiButton
					className={style.new}
					title={file.name ? "delete" : "upload"}
					onClick={handlerDelete}
				>
					{!file.name ? (
						<input
							ref={input}
							onChange={handlerFile}
							type="file"
							className="file:border-none bg-transparent"
						/>
					) : null}
					{file.name ? <AiFillDelete /> : <FaUpload />}
				</UiButton>
				<UiButton className={style.new} title="options">
					<SlOptionsVertical />
				</UiButton>
			</div>
			<div>
				<UiButton className={style.big} title="template">
					<CgTemplate />
				</UiButton>
				<UiButton className={style.big} title="emodji">
					<FaRegSmile />
				</UiButton>
				<UiButton className={style.big} title="clip">
					<GoPaperclip />
				</UiButton>
				<button className={style.main_btn}>Send now</button>
			</div>
		</>
	);
};

export default FileUploadButtons;
