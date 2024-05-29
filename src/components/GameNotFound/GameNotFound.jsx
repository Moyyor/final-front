import Styles from "./GameNotFound.module.css";
import { NotFoundImage } from "./NotFoundImage.jsx";

const GameNotFound = () => {
	return (
		<div className={Styles["not-found"]}>
			<NotFoundImage />
			<h2 className={Styles["not-found__text"]}>Такой игры не существует =(</h2>
		</div>
	);
};

export default GameNotFound;
