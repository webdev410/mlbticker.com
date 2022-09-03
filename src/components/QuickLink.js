import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TEAMS from "./Teams/teams.json";
export default function QuickLink({}) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={1}>
				{TEAMS &&
					TEAMS.map((team, i) => (
						<>
							<Grid item xs={1} key={`${team.shortName}${i}`}>
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
		</Box>
	);
}
