import React from "react";
import { Box, Fab, Typography } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import CustomTooltip from "./CustomTooltip";
export default function RefreshButton() {
	const handleRefresh = () => window.location.reload();
	return (
		<CustomTooltip text="Refresh">
			<Fab
				color="white"
				size="small"
				sx={{
					position: "fixed",
					top: 10,
					right: 10,
					backgroundImage: "url(../../img/favicon.png)",
				}}
				aria-label="add"
				onClick={handleRefresh}
			>
				<Refresh />
			</Fab>
		</CustomTooltip>
	);
}
