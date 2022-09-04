import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import teamsJSON from "./Teams/teams.json";

export default function TeamCard({ team }) {
	const [teamParams, setTeamParams] = React.useState({});
	// console.log(team);
	const styles = {
		title: {
			fontWeight: 700,
			fontSize: "1.3rem",
			margin: 0,
			lineHeight: "1.4rem",
			fontFamily: "monospace",
		},
		score: {
			fontFamily: "monospace",
			marginLeft: 3,
		},
		teambox: {
			p: 1,
			display: "flex",
			alignItems: "center",
			width: "80%",
			justifyContent: "space-around",
			borderRadius: 1,
			flexGrow: 1,
			overflow: "visible",
		},
	};

	React.useEffect(() => {
		if (team && teamsJSON) {
			teamsJSON.forEach((obj) => {
				if (obj.teamName === team.team.name) {
					setTeamParams(obj);
				} else return;
			});
		}
	}, [team]);
	return (
		<>
			<Card
				sx={{
					display: "flex",
					width: { xs: 150, sm: 355, md: 500 },
					backgroundColor: teamParams.primary,
					color: teamParams.secondary,
					alignItems: "center",
					mb: 1,
				}}
			>
				<CardMedia
					component="img"
					sx={{ width: 150 }}
					image={teamParams ? teamParams.logo : null}
					alt="logo"
				/>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<CardContent
						sx={{
							display: { xs: "none", sm: "block" },
							sm: { flex: "1 0 auto" },
						}}
					>
						<Typography sx={{ ...styles.title }}>
							{team.team.name}
						</Typography>

						<Typography sx={{ ...styles.title, fontSize: "1rem" }}>
							{team.leagueRecord.wins}-{team.leagueRecord.losses}
						</Typography>

						<Typography sx={{ ...styles.title, fontSize: ".8rem" }}>
							({team.leagueRecord.pct})
						</Typography>
					</CardContent>
				</Box>
			</Card>
			<Box
				sx={{
					width: 100,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<Typography
					sx={{
						...styles.title,
						...styles.score,
						fontSize: "7rem",
						textAlign: "right",
					}}
				>
					{team.score}
				</Typography>
			</Box>
		</>
	);
}
