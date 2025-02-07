"use client";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  return popularGames ? (
    <main className={"main-inner"}>
      <CardsListSection id="popular" title="Популярное" data={popularGames} />
    </main>
  ) : (
    <Preloader />
  );
}
