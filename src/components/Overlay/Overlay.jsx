import Styles from "./Overlay.module.css";

const Overlay = ({ children, handlePopup }) => {
	return (
		<>
			<div onClick={handlePopup} className={`${Styles["overlay"]} ${Styles["overlay_is-opened"]}`}></div>
			{children}
		</>
	);
};

export default Overlay;
