import React from "react";
import { Box, Typography } from "@mui/material";
import TEAMS from "./Teams/teams.json";
export default function QuickLink({}) {
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			{TEAMS &&
				TEAMS.map((team, i) => (
					<Box key={`${team.shortName}${i}`} sx={{ marginLeft: 1 }}>
						<a href={`#${team.shortName}`}>
							<img
								src={`${team.logo}`}
								alt=""
								width={"25px"}
								height={"25px"}
							/>
						</a>
					</Box>
				))}
		</Box>
	);
}
