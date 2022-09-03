import axios from "axios";
import client from "../api/client";

export const getGames = async () => {
	const getToday = "schedule/games/?sportId=1";
	try {
		const { data } = await client.get(getToday);
		return data;
	} catch (error) {
		return console.error(error);
	}
};

export const getOneGame = async (gameID) => {
	const oneGame = `game/${gameID}/content`;
	try {
		const { data } = await client.get(oneGame);
		return data;
	} catch (error) {
		return console.error(error);
	}
};
