import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Game from "./Game";
export default function StatusIndicator({ game }) {
	const [status, setStatus] = useState(null);
	const [color, setColor] = useState(null);
	const gameState = game.status.detailedState;
	useEffect(() => {
		if (gameState) {
			setStatus(gameState);
		} else setStatus(false);
	});
	const inProgress = "#32cd36";
	const final = "#f01e2c";
	const postponed = "#fe6e00";

	useEffect(() => {
		if (status === "Final") setColor(final);
		else if (status === "In Progress") setColor(inProgress);
		else if (status === "Postponed") setColor(postponed);
		else setColor("#333");
	});
	return (
		<Box sx={{ display: "inline" }}>
			<Typography
				sx={{
					backgroundColor: color,
					paddingLeft: 1,
					paddingRight: 1,
					mb: 2,
					borderRadius: 1,
					fontWeight: "bold",
					textTransform: "uppercase",
				}}
			>
				{game.status.detailedState}
			</Typography>
		</Box>
	);
}
