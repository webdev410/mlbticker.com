import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TEAMS from "./Teams/teams.json";
import { useState } from "react";
export default function QuickLink({}) {
	const [showQuickLinks, setShowQuickLinks] = useState(false);
	const toggleLinks = () => {
		if (showQuickLinks) setShowQuickLinks(false);
		else setShowQuickLinks(true);
	};
	return (
		<Box sx={{}}>
			<Button
				onClick={toggleLinks}
				variant="contained"
				sx={{ mb: 2, backgroundColor: "white", color: "black" }}
			>
				{showQuickLinks ? "Hide Quick Links" : "Show Quick Links"}
			</Button>
			{showQuickLinks ? (
				<Grid container spacing={1}>
					{TEAMS &&
						TEAMS.map((team, i) => (
							<Grid item xs={2} key={`${team.shortName}${i}`}>
								<Button
									href={`#${team.shortName}`}
									variant="contained"
									sx={{ backgroundColor: "white" }}
								>
									<img
										src={`${team.logo}`}
										alt=""
										width={"40px"}
										height={"40px"}
									/>
								</Button>
							</Grid>
						))}
				</Grid>
			) : null}
		</Box>
	);
}
