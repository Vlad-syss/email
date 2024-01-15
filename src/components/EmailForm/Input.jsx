import clsx from "clsx";
import style from "./EmailForm.module.scss";

const Input = ({
	id,
	label,
	placeholder,
	onFocus,
	onBlur,
	register,
	errors,
}) => {
	return (
		<div className={style.item}>
			<label htmlFor={id}>{label}</label>
			<input
				type="text"
				id={id}
				{...register(`${id}`, {
					required: `${id} Email not invalid!`,
					pattern: {
						value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
						message: "Please enter a valid email",
					},
				})}
				placeholder={placeholder}
				onFocus={onFocus}
				onBlur={onBlur}
				className={errors[id] ? style.active : ""}
			/>
			<span
				className={clsx(errors && errors[id] ? style.active : "", style.error)}
			>
				{errors[id]?.message}
			</span>
		</div>
	);
};

export default Input;
