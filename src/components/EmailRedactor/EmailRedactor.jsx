import style from "./EmailRedactor.module.scss";
import { MdOutlineClose } from "react-icons/md";
import UiButton from "../../ui/UiButton";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { useRemoveUsersMutation } from "../../store/api/user.api";
import EmailFiled from "./field/EmailFiled";
import UserInformation from "./EmailInfo";
import FileUploadButtons from "./FileUploadsBtn";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { matchIcon } from "./MatchIcon";

const EmailRedactor = ({ className, data }) => {
	const [isFull, setIsFull] = useState(false);
	const [email, setEmail] = useState(false);
	const [removeUsers] = useRemoveUsersMutation({});
	const { count, file } = useForm();
	const imageIcon = matchIcon(file?.icon);
	const size = file.size / 1024000;

	const handleExit = () => removeUsers(data[0].id);
	const handleButtonClick = (value) => setEmail(value);

	const [firstData] = data;

	return (
		<div className={`${style.cover} ${className} ${isFull ? style.full : ""}`}>
			<nav className={style.nav}>
				<UiButton
					onClick={() => setIsFull((prev) => !prev)}
					title={isFull ? "normalscreen" : "fullscreen"}
				>
					{isFull ? <BsFullscreenExit /> : <BsFullscreen />}
				</UiButton>
				<UiButton onClick={handleExit} title="exit">
					<MdOutlineClose />
				</UiButton>
			</nav>
			<div className={style.block}>
				<UserInformation email={email} data={firstData} />
				<ul>
					<li>
						<button
							className={email ? style.active : ""}
							onClick={() => handleButtonClick(true)}
						>
							R<b>e</b>
						</button>
					</li>
					<li>
						<button
							className={!email ? style.active : ""}
							onClick={() => handleButtonClick(false)}
						>
							Y<b>e</b>
						</button>
					</li>
				</ul>
			</div>
			<div className={style.block}>
				<b>design request proposal</b>
				<span>
					Words: <b>{count}</b>
				</span>
			</div>
			<EmailFiled />
			<div className={`${style.block} ${style.last}`}>
				<p>
					{file.name ? (
						<>
							{imageIcon}
							<span>{file.name}</span> <b>{size.toFixed(2) + "mb"}</b>
						</>
					) : (
						"Here your uploaded files..."
					)}
				</p>
			</div>
			<div className={style.appload}>
				<FileUploadButtons />
			</div>
		</div>
	);
};

export default EmailRedactor;
