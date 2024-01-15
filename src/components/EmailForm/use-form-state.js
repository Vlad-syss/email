import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddUsersMutation } from "../../store/api/user.api";

export const useFormState = () => {
	const [inputFocus, setInputFocus] = useState({
		user: false,
		recipient: false,
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ defaultValues: {}, mode: "onChange" });
	const [addUsers, { isLoading }] = useAddUsersMutation({});

	const onSubmit = (data) => {
		console.log(data);
		addUsers(data);
		reset();
	};

	const handleFocus = (input) => {
		setInputFocus((prevFocus) => ({ ...prevFocus, [input]: true }));
	};

	const handleBlur = (input) => {
		setInputFocus((prevFocus) => ({ ...prevFocus, [input]: false }));
	};

	return {
		handleBlur,
		handleFocus,
		inputFocus,
		onSubmit,
		register,
		handleSubmit,
		isLoading,
		errors,
	};
};
