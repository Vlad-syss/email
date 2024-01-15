import { useSelector } from "react-redux";

export const useForm = () => {
	const form = useSelector((state) => state.form);

	return form;
};
