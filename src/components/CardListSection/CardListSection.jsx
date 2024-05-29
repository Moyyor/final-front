import CardList from "./CardList/CardList.jsx";
import Styles from "./CardListSection.module.css";
import CardSlider from "./CardSlider/CardSlider.jsx";

const CardListSection = ({ id, title, data, type }) => {
	return (
		<section id={id} className={Styles["list-section"]}>
			<h2 className={Styles["list-section__title"]}>{title}</h2>
			{type === "slider" ? <CardSlider data={data} /> : <CardList data={data} />}
		</section>
	);
};

export default CardListSection;
