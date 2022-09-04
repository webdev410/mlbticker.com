import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material";
import Typography from "@mui/material/Typography";
import teamsJSON from "./Teams/teams.json";
import { Box } from "@mui/system";
export default function TeamCard({ team }) {
	const [teamParams, setTeamParams] = React.useState({});
	// console.log(team);
	const styles = {
		title: {
			fontWeight: 700,
			fontSize: "1.5rem",
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
					...styles.teambox,
					marginBottom: 2,
					maxWidth: 355,
					backgroundColor: teamParams.primary,
					color: teamParams.secondary,
				}}
			>
				<CardMedia
					component="img"
					ale={team.team.name}
					height="200"
					image={teamParams ? teamParams.logo : null}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{ ...styles.title }}
					>
						{team.team.name}
					</Typography>
					<Typography
						variant="body1"
						sx={{ ...styles.title, fontSize: 18 }}
					>
						{team.leagueRecord.wins}-{team.leagueRecord.losses}
					</Typography>
					<Typography
						variant="body2"
						sx={{ ...styles.title, fontSize: 14 }}
					>
						({team.leagueRecord.pct})
					</Typography>
				</CardContent>
				<CardActions>
					<Typography
						sx={{ ...styles.title, fontSize: 14 }}
					></Typography>
				</CardActions>
			</Card>
			<Box sx={{ ...styles.score }}>
				<Typography sx={{ ...styles.title, fontSize: 112 }}>
					{team.score}
				</Typography>
			</Box>
		</>
	);
}
