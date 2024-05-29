import Link from "next/link.js";
import Card from "../../Card/Card.jsx";
import Styles from "../CardListSection.module.css";

const CardList = ({ data }) => {
	return (
		<ul className={Styles["cards-list"]}>
			{data.map((card) => (
				<li key={card.id} className={Styles["cards-list__item"]}>
					<Link href={`/games/${card.id}`} className={Styles["card-list__link"]}>
						<Card {...card} />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default CardList;
