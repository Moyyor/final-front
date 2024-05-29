import Styles from "./Banner.module.css";

const Banner = () => {
	return (
		<section className={Styles.banner}>
			<div className={Styles[`banner__description`]}>
				<h1 className={Styles[`banner__title`]}>Портал инди-игр от студентов Яндекс Практикума</h1>
				<p className={Styles[`banner__text-block`]}>
					Студенты курсов разрабатывают свои игры на Unity, здесь мы их публикуем. Вы можете играть прямо на
					сайте. А если у вас есть аккаунт пользователя — получаете возможность голосовать за игры.
				</p>
				<button className={`button ${Styles[`banner__button`]}`}>Смотреть игры</button>
			</div>
			<img
				src={"/images/banner-illustration.jpg"}
				alt={"Рука, утопленная в желтом фоне"}
				className={Styles[`banner__image`]}
			/>
		</section>
	);
};

export default Banner;
