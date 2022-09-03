import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TEAMS from "./Teams/teams.json";
import { useState } from "react";
export default function QuickLink({}) {
	const [showQuickLinks, setShowQuickLinks] = useState(true);
	const toggleLinks = () => {
		if (showQuickLinks) setShowQuickLinks(false);
		else setShowQuickLinks(true);
	};
	return (
		<Box sx={{}}>
			<Button onClick={toggleLinks}>
				{showQuickLinks ? "Hide Quick Links" : "Show Quick Links"}
			</Button>
			{showQuickLinks ? (
				<Grid container spacing={1}>
					{TEAMS &&
						TEAMS.map((team, i) => (
							<>
								<Grid item xs={2} key={`${team.shortName}${i}`}>
									<a href={`#${team.shortName}`}>
										<img
											src={`${team.logo}`}
											alt=""
											width={"35px"}
											height={"35px"}
										/>
									</a>
								</Grid>
							</>
						))}
				</Grid>
			) : null}
		</Box>
	);
}
