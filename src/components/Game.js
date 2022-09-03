import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Team from "./Team";
import { getOneGame } from "../utils/queries";
import { useMlb } from "../context/MlbContext";
import dateFormat from "../utils/dateFormat";

export default function Game({ game }) {
	const { loading, setLoading, setGames } = useMlb();
	const home = game.teams.home;
	const away = game.teams.away;

	const styles = {
		title: { fontWeight: 800, textAlign: "left" },
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				mt: 10,
			}}
		>
			<Typography sx={{ ...styles.title }}>{game.venue.name}</Typography>
			<Typography sx={{ ...styles.title }}>
				{dateFormat(game.gameDate)}
			</Typography>
			<Box>
				<Box sx={{ display: "flex", width: 1000 }}>
					<Team team={away} />
				</Box>
				<Box sx={{ display: "flex", width: 1000 }}>
					<Team team={home} />
				</Box>
			</Box>
		</Box>
	);
}
