"use client";

import { isResponseOk, register } from "@/src/api/api-utils";
import Styles from "./RegisterForm.module.css";
import { useEffect, useState } from "react";

const REG_DATA_TEMPLATE = { username: "", email: "", password: "" };

const RegisterForm = ({ handlePopup }) => {
	//const { user, login } = useStore();
	const [regData, setRegData] = useState(REG_DATA_TEMPLATE);
	const [message, setMessage] = useState({ status: null, text: null });

	const handleInput = (e) => {
		e.preventDefault();
		setRegData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleReset = () => setRegData(REG_DATA_TEMPLATE);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = await register(regData);

		isResponseOk(userData)
			? setMessage({ status: "success", text: "Вы зарегестрировались! - Осталось только войти!" })
			: setMessage({ status: "error", text: "Произошла ошибка :/" });
	};

	useEffect(() => {
		let timer;
		if (message.status == "success") {
			timer = setTimeout(() => {
				setMessage({ status: null, text: null });
				handlePopup();
			}, 1000);
		}
		return () => clearTimeout(timer);
	}, [message]);

	return (
		<form onReset={handleReset} onSubmit={handleSubmit} className={Styles["form"]}>
			<h2 className={Styles["form__title"]}>Регистрация</h2>
			<div className={Styles["form__fields"]}>
				<label className={Styles["form__field"]}>
					<span className={Styles["form__field-title"]}>Email</span>
					<input
						onInput={handleInput}
						name="email"
						value={regData.email}
						className={Styles["form__field-input"]}
						type="email"
						placeholder="email here!"
					/>
				</label>
				<label className={Styles["form__field"]}>
					<span className={Styles["form__field-title"]}>Username</span>
					<input
						onInput={handleInput}
						name="username"
						value={regData.username}
						className={Styles["form__field-input"]}
						type="name"
						placeholder="username here!"
					/>
				</label>
				<label className={Styles["form__field"]}>
					<span className={Styles["form__field-title"]}>Пароль</span>
					<input
						onInput={handleInput}
						name="password"
						value={regData.password}
						className={Styles["form__field-input"]}
						type="password"
						placeholder="password here!"
					/>
				</label>
			</div>
			{message.status && (
				<p className={`${Styles.form__message} ${message.status === "error" && Styles.error}`}>
					{message.text}
				</p>
			)}
			<div className={Styles["form__actions"]}>
				<button className={Styles["form__reset"]} type="reset">
					Очистить
				</button>
				<button type="submit" className={Styles["form__submit"]}>
					Зарегестрироваться
				</button>
			</div>
		</form>
	);
};

export default RegisterForm;
