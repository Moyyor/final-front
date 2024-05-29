"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import CardListSection from "../components/CardListSection/CardListSection";
import { Preloader } from "../components/Preloader/Preloader";
import Banner from "/src/components/Banner/Banner.jsx";
import Promo from "/src/components/Promo/Promo.jsx";

const Home = () => {
	const popularCards = useGetDataByCategory("popular");
	const newCards = useGetDataByCategory("new");
	return (
		<main className="main">
			<Banner />
			{popularCards ? (
				<CardListSection type="slider" data={popularCards} id="popular" title="Популярное" />
			) : (
				<Preloader />
			)}
			{newCards ? <CardListSection type="slider" data={newCards} id="new" title="Новинки" /> : <Preloader />}
			<Promo />
		</main>
	);
};

export default Home;
