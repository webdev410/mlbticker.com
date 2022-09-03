import { Box } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import SnackAlert from "../components/SnackAlert";
import { getGames } from "../utils/queries";
import { useAlert } from "./AlertContext";

const MlbContext = createContext();
// serverity can be one of the following:
// error, warning, success, info
const MlbProvider = ({ children }) => {
	const [games, setGames] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { severity, message } = useAlert();

	const getToday = "schedule/games/?sportId=1";

	const fetchGames = async () => {
		try {
			// send to backend to validate
			setLoading(true);
			const res = await getGames(getToday);
			if (res) {
				console.log("res", res);
				setGames(res.dates[0].games);
				// console.log({ resData: res.dates[0].games, games });
			} else {
				console.error(res);
				setLoading(false);
			}
			setLoading(false);
		} catch (error) {
			return console.error(error);
		}
	};

	return (
		<MlbContext.Provider
			value={{
				games,
				setGames,
				error,
				setError,
				loading,
				fetchGames,
				setLoading,
			}}
		>
			{children}
			<SnackAlert variant={severity} message={message || ""} />
		</MlbContext.Provider>
	);
};

export const useMlb = () => useContext(MlbContext);

export default MlbProvider;
