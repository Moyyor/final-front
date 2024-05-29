"use client";

import { useEffect, useState } from "react";
import { checkIfUserVoted, vote, isResponseOk } from "@/src/api/api-utils";

import Styles from "./Game.module.css";
import AuthForm from "../AuthForm/AuthForm";
import Popup from "../Popup/Popup";
import Overlay from "../Overlay/Overlay";
import { useStore } from "@/src/store/app-store";

const Game = ({ data }) => {
	const { isAuth, user, token } = useStore();
	const [isVoted, setIsVoted] = useState(false);

	const [popupIsOpened, setPopupIsOpened] = useState(false);
	const handlePopup = (e) => {
		e?.stopPropagation();
		setPopupIsOpened((prev) => !prev);
	};

	useEffect(() => {
		user && setIsVoted(checkIfUserVoted(data.users, user));
	}, [user, data.users]);

	const handleClick = async () => {
		console.log("here");
		if (isAuth) {
			console.log("here if");
			data.users.push(user);
			const usersIDArray = data.users.map((item) => item.id);

			const response = await vote(data.id, token, usersIDArray, data);

			if (isResponseOk(response)) {
				setIsVoted(true);
			}
		} else {
			setPopupIsOpened(true);
		}
	};

	return (
		<>
			<section className={Styles["game"]}>
				<iframe className={Styles["game__iframe"]} src={data.link} />
			</section>
			<section className={Styles["about"]}>
				<h2 className={Styles["about__title"]}>{data.heading}</h2>
				<div className={Styles["about__content"]}>
					<p className={Styles["about__description"]}>{data.description}</p>
					<div className={Styles["about__author"]}>
						<p>
							Автор:
							<span className={Styles["about__accent"]}>{data.author}</span>
						</p>
					</div>
				</div>
				<div className={Styles["about__vote"]}>
					<p className={Styles["about__vote-amount"]}>
						За игру уже проголосовали:
						<span className={Styles["about__accent"]}>{data.users.length}</span>
					</p>
					<button
						disabled={isVoted && isAuth}
						onClick={handleClick}
						className={`button ${Styles["about__vote-button"]}`}
					>
						{isVoted && isAuth ? "Голос учтён" : "Голосовать"}
					</button>
				</div>
			</section>
			{popupIsOpened && (
				<Overlay handlePopup={handlePopup}>
					<Popup handlePopup={handlePopup}>
						<AuthForm handlePopup={handlePopup}></AuthForm>
					</Popup>
				</Overlay>
			)}
		</>
	);
};

export default Game;
