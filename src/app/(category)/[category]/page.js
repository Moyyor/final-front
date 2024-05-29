"use client";

import { Preloader } from "@/src/components/Preloader/Preloader";
import { useGetDataByCategory } from "@/src/api/api-hooks";
import GameNotFound from "@/src/components/GameNotFound/GameNotFound";
import CardListSection from "@/src/components/CardListSection/CardListSection";

const titles = {
	new: "Новинки",
	runner: "Ранеры",
	pixel: "Пиксельные",
	popular: "Популярные",
	shooter: "Шутеры",
	TDS: "TDS",
};

const Category = ({ params: { category } }) => {
	const cards = useGetDataByCategory(category);
	return (
		<main className="main-inner">
			{cards?.length == 0 ? (
				<GameNotFound />
			) : cards ? (
				<CardListSection data={cards} id={category} title={titles[category]} />
			) : (
				<Preloader />
			)}
		</main>
	);
};

export default Category;
