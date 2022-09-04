import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Team from "./Team";
import { getOneGame } from "../utils/queries";
import { useMlb } from "../context/MlbContext";
import dateFormat from "../utils/dateFormat";
import Diamond from "./Scoreboard/Diamond";
import StatusIndicator from "./Status";
import TeamCard from "./TeamCard";
import TEAMSJSON from "./Teams/teams.json";
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
			id={`${
				home.team.name.toLowerCase().split(" ")[
					home.team.name.toLowerCase().split(" ").length - 1
				]
			}`}
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
				id={`${
					away.team.name.toLowerCase().split(" ")[
						away.team.name.toLowerCase().split(" ").length - 1
					]
				}`}
			>
				<Typography sx={{ ...styles.title, fontSize: 20 }}>
					{game.venue.name}
				</Typography>
				<Box display={"flex"}>
					<Typography sx={{ ...styles.title }}>
						{dateFormat(game.gameDate)}
					</Typography>
					<Box sx={{ ml: 3 }}>
						<StatusIndicator game={game} />
					</Box>
				</Box>
				{/* Teams & Scores */}
				<Box sx={{ flexGrow: 1, maxWidth: 800 }}>
					<Box sx={{ display: "flex" }}>
						{/* <Team team={away} /> */}
						<TeamCard team={away} />
					</Box>
					<Box sx={{ display: "flex", mt: 1 }}>
						{/* <Team team={home} /> */}
						<TeamCard team={home} />
					</Box>
				</Box>
			</Box>
			{/* Base Paths */}
		</Box>
	);
}
