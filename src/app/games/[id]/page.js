"use client";

import { getGameById, isResponseOk } from "@/src/api/api-utils";
import GameNotFound from "/src/components/GameNotFound/GameNotFound.jsx";
import Game from "/src/components/GamePage/Game.jsx";
import { useEffect, useState } from "react";
import { Preloader } from "@/src/components/Preloader/Preloader";

const GamePage = ({ params: { id } }) => {
	const [game, setGame] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const data = await getGameById(id);
			isResponseOk(data) && setGame(data);
			setIsLoading(false);
		})();
	}, []);

	return (
		<main className="main-inner">
			{game ? <Game data={game} /> : isLoading ? <Preloader /> : <GameNotFound />}
		</main>
	);
};

export default GamePage;
