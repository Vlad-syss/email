import Modal from "../../../ui/Modal";
import UiButton from "../../../ui/UiButton";
import style from "./EmailFiled.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { FaBold, FaUnderline } from "react-icons/fa6";
import { FiItalic } from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import clsx from "clsx";
import { IoLinkSharp } from "react-icons/io5";
import { useState } from "react";
import { useAddColorsQuery } from "../../../store/api/api";

const MiniModal = () => {
	const [{ font, color }, setIsOpen] = useState({
		font: false,
		color: false,
	});
	const { data, isLoading } = useAddColorsQuery();

	return (
		<Modal classNames={style.minimodal}>
			<div className={style.title}>
				<p onClick={() => setIsOpen({ font: !font, color: false })}>Text</p>
				<IoIosArrowDown
					onClick={() => setIsOpen({ font: !font, color: false })}
					className={font ? style.active : ""}
				/>
				<Modal classNames={clsx(style.fontmodal, font ? style.active : "")}>
					<ul>
						<li>Monserrat</li>
						<li>Monserrat</li>
						<li>Monserrat</li>
						<li>Monserrat</li>
					</ul>
				</Modal>
			</div>
			<div className={style.btns}>
				<UiButton className={style.new} title="bold">
					<FaBold />
				</UiButton>
				<UiButton className={style.new} title="italic">
					<FiItalic />
				</UiButton>
				<UiButton className={style.new} title="underline">
					<FaUnderline />
				</UiButton>
				<UiButton className={style.new} title="strikethrough">
					<AiOutlineStrikethrough />
				</UiButton>
			</div>
			<div className={style.more}>
				<UiButton className={clsx(style.bigger, style.new)} title="link">
					<IoLinkSharp />
				</UiButton>
				<UiButton
					className={clsx(style.bigger, style.new)}
					onClick={() => setIsOpen({ color: !color, font: false })}
					title="colors"
				>
					<IoIosArrowDown className={color ? style.active : ""} />
				</UiButton>
				<Modal classNames={clsx(style.colormodal, color ? style.active : "")}>
					<ul>
						{isLoading ? (
							<p>Loading...</p>
						) : (
							data?.map((item) => (
								<li
									style={{
										background: `${item.color}`,
									}}
									key={item.id}
								/>
							))
						)}
					</ul>
				</Modal>
			</div>
		</Modal>
	);
};

export default MiniModal;
