import Link from "next/link";
import Styles from "./Footer.module.css";

const Footer = () => {
	const contents = ["YT", "ВК", "TG"];
	return (
		<footer className={Styles.footer}>
			<Link href="/" className={Styles.footer__logo}>
				<span className={Styles["footer__logo-name"]}>pindie</span>
				<span className={Styles["footer__logo-copy"]}>, XXI век</span>
			</Link>
			<ul className={Styles["social-list"]}>
				{contents.map((item) => (
					<li key={item} className={Styles["social-list__item"]}>
						<a className={`button ${Styles["social-list__link"]}`}>{item}</a>
					</li>
				))}
			</ul>
		</footer>
	);
};

export default Footer;
