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
	const theme = useTheme();
	const [teamParams, setTeamParams] = React.useState({});
	// console.log(team);
	const styles = {
		title: {
			fontWeight: 700,
			fontSize: "1.6rem",
			margin: 0,
			lineHeight: "1.5rem",
			fontFamily: "monospace",
		},
		score: {
			fontFamily: "monospace",
			textAlign: "right",
			alignItems: "baseling",
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
					width: 375,
					backgroundColor: teamParams.primary,
					color: teamParams.secondary,
				}}
				id={`${teamParams.shortName}`}
			>
				<CardMedia
					component="img"
					sx={{ width: 150 }}
					image={teamParams ? teamParams.logo : null}
					alt="Live from space album cover"
				/>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CardContent sx={{ flex: "1 0 auto" }}>
						<Typography sx={{ ...styles.title }}>
							{team.team.name}
						</Typography>

						<Typography sx={{ ...styles.title, fontSize: 18 }}>
							{team.leagueRecord.wins}-{team.leagueRecord.losses}
						</Typography>

						<Typography sx={{ ...styles.title, fontSize: 14 }}>
							({team.leagueRecord.pct})
						</Typography>
					</CardContent>
				</Box>
			</Card>
			<Box sx={{ ...styles.score, width: 100 }}>
				<Typography
					sx={{ ...styles.title, fontSize: 96, textAlign: "right" }}
				>
					{team.score}
				</Typography>
			</Box>
		</>
	);
}
