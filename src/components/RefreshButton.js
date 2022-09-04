import React from "react";
import { Box, Fab, Typography } from "@mui/material";
import { Refresh } from "@mui/icons-material";
export default function RefreshButton() {
	const handleRefresh = () => window.location.reload();
	return (
		<Fab
			color="white"
			sx={{
				position: "fixed",
				bottom: 10,
				right: 10,
				backgroundImage: "url(../../img/favicon.png)",
			}}
			aria-label="add"
			onClick={handleRefresh}
		>
			<Refresh />
		</Fab>
	);
}
