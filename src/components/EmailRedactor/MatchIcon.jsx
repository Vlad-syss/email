import { FaFilePdf, FaFileZipper } from "react-icons/fa6";
import { BiSolidFileTxt } from "react-icons/bi";
import { FaFileImage } from "react-icons/fa";
import { BsFiletypeDocx, BsFiletypeExe } from "react-icons/bs";

export const matchIcon = (icon) => {
	if (icon === "pdf") {
		return <FaFilePdf />;
	} else if (icon === "TXT" || icon === "txt") {
		return <BiSolidFileTxt />;
	} else if (icon === "jpg" || icon === "png") {
		return <FaFileImage />;
	} else if (icon === "docx") {
		return <BsFiletypeDocx />;
	} else if (icon === "exe") {
		return <BsFiletypeExe />;
	} else if (icon === "rar" || icon === "zip") {
		return <FaFileZipper />;
	} else {
		return;
	}
};
