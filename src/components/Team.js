import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import teamsJSON from "./Teams/teams.json";
export default function Team({ team }) {
	const [teamParams, setTeamParams] = useState({});
	// console.log(team);
	const styles = {
		title: {
			fontWeight: 700,
			fontSize: 32,
			margin: 0,
			fontFamily: "monospace",
			textAlign: "center",
		},
		score: {
			fontFamily: "monospace",
			justifyContent: "center",
			alignItems: "center",
			marginLeft: 3,
			display: "flex",
		},
		teambox: {
			p: 2,
			display: "flex",
			alignItems: "center",
			width: "550px",
			justifyContent: "space-around",
		},
	};
	let logo;
	useEffect(() => {
		if (team && teamsJSON) {
			teamsJSON.forEach((obj) => {
				if (obj.teamName === team.team.name) {
					setTeamParams(obj);
				} else return;
			});
		}
	}, [team]);

	console.log(logo);
	return (
		<>
			<Box
				sx={{
					backgroundColor: teamParams.primary,
					color: teamParams.secondary,
					...styles.teambox,
				}}
			>
				{teamParams ? (
					<img
						src={teamParams ? teamParams.logo : null}
						alt=""
						style={{
							width: "175px",
							height: "175px",
							marginRight: 20,
						}}
					/>
				) : null}

				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					{/* Team/Record Container */}
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<Typography sx={{ ...styles.title }}>
							{team.team.name}
						</Typography>
						{/* Record */}
						<Box>
							<Typography sx={{ ...styles.title, fontSize: 18 }}>
								{team.leagueRecord.wins}-
								{team.leagueRecord.losses}
							</Typography>
							<Typography sx={{ ...styles.title, fontSize: 14 }}>
								({team.leagueRecord.pct})
							</Typography>
						</Box>
					</Box>
				</Box>
				{/* END TEAM BOX */}
				{/* SCORE */}
			</Box>
			<Box sx={{ ...styles.score }}>
				<Typography sx={{ ...styles.title, fontSize: 112 }}>
					{team.score}
				</Typography>
			</Box>
		</>
	);
}