"use client";

import { useState, useEffect } from "react";
import Styles from "./Promo.module.css";

const Promo = () => {
	const [codeIsVisible, setCodeIsVisible] = useState(false);

	useEffect(() => {
		let timeout;
		if (codeIsVisible) {
			timeout = setTimeout(() => setCodeIsVisible(false), 5000);
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [codeIsVisible]);

	const handleClick = () => {
		setCodeIsVisible((prev) => !prev);
	};
	return (
		<section className={Styles.promo}>
			<div className={Styles[`promo__description`]}>
				<h1 className={Styles[`promo__title`]}>Твой промо-код</h1>
				<p className={Styles[`promo__text-block`]}>
					Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
				</p>
				<button onClick={handleClick} className={`button ${Styles[`promo__button`]}`}>
					{codeIsVisible ? (
						<span className={Styles["promo-code"]}>WEBTEENS10</span>
					) : (
						"Получить код"
					)}
				</button>
			</div>
			<img
				src={"/images/promo-illustration.svg"}
				alt={"Собака"}
				className={Styles[`promo__image`]}
			/>
		</section>
	);
};

export default Promo;
