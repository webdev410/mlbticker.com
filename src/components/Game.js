import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Team from "./Team";
import { getOneGame } from "../utils/queries";
import { useMlb } from "../context/MlbContext";
import dateFormat from "../utils/dateFormat";
import Diamond from "./Scoreboard/Diamond";
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
				justifyContent: "space-between",
				alignItems: "baseline",
				mt: 10,
				ml: 0,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					borderTop: "5px solid white",
					borderBottom: "5px solid white",
					paddingTop: 1,
				}}
			>
				<Typography sx={{ ...styles.title, fontSize: 20 }}>
					{game.venue.name}
				</Typography>
				<Typography sx={{ ...styles.title }}>
					{dateFormat(game.gameDate)}
				</Typography>
				{/* Teams & Scores */}
				<Box sx={{ flexGrow: 1, maxWidth: 800 }}>
					<Box sx={{ display: "flex" }}>
						<Team team={away} />
					</Box>
					<Box sx={{ display: "flex", mt: 1 }}>
						<Team team={home} />
					</Box>
				</Box>
			</Box>
			{/* Base Paths */}
		</Box>
	);
}
