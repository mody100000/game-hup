import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FatchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [islodding, setLodding] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLodding(true);
    apiClient
      .get<FatchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLodding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLodding(false);
      });

    return () => controller.abort();
  }, []);
  return { games, error, islodding };
};

export default useGames;
