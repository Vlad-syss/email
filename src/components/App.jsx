import style from "./global.module.scss";
import Container from "./Container/Container.jsx";
import EmailForm from "./EmailForm/EmailForm";
// import { useForm } from "../hooks/useForm";
import EmailRedactor from "./EmailRedactor/EmailRedactor";
import { useWatchUsersQuery } from "../store/api/api";

function App() {
	// const users = useForm();
	const { data, isLoading } = useWatchUsersQuery();

	return (
		<div className={style.wrapper}>
			<Container>
				<h1 className={style.title}>
					Email <span>Editor</span>
				</h1>
				{isLoading ? (
					<p>Loading...</p>
				) : data ? (
					<>
						{
							<EmailForm
								className={data?.length == 0 ? style.show : style.hide}
							/>
						}
						{
							<EmailRedactor
								className={data?.length !== 0 ? style.show : style.hide}
								data={data}
							/>
						}
					</>
				) : (
					<p>Data not found</p>
				)}
			</Container>
		</div>
	);
}

export default App;
