import style from "./EmailForm.module.scss";
import Input from "./Input";
import { useFormState } from "./use-form-state";

const EmailForm = ({ className }) => {
	const {
		handleBlur,
		handleFocus,
		inputFocus,
		isLoading,
		handleSubmit,
		onSubmit,
		register,
		errors,
	} = useFormState();

	return (
		<form className={className} onSubmit={handleSubmit(onSubmit)}>
			<p>
				{"//"} Fill in the data to start writing a conditional letter to a
				friend.
			</p>

			<Input
				id="user"
				register={register}
				label="Type your email: "
				placeholder={inputFocus.user ? "" : "here yours..."}
				onFocus={() => handleFocus("user")}
				onBlur={() => handleBlur("user")}
				errors={errors}
			/>

			<Input
				id="receive"
				register={register}
				label="Type recipient email: "
				placeholder={inputFocus.recipient ? "" : "here recipient's..."}
				onFocus={() => handleFocus("recipient")}
				onBlur={() => handleBlur("recipient")}
				errors={errors}
			/>
			<button type="submit" className={style.btn}>
				{isLoading ? "Loading..." : "Let's Start emailing"}
			</button>
		</form>
	);
};

export default EmailForm;
