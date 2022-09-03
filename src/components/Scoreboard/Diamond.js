import React from "react";
import { Box, Typography } from "@mui/material";
export default function Diamond() {
	const styles = {
		container: {
			position: "relative",
			mt: 4,
		},
		base: {
			position: "absolute",
			height: "25px",
			width: "25px",
			transform: "rotate(-45deg)",
			border: "7px solid black",
			backgroundColor: "transparent",
			zIndex: "1000",
		},
		onBase: {
			backgroundColor: "gold",
			border: "7px solid gold",
		},
		firstBase: {
			top: "90px",
			left: "140px",
		},
		secondBase: {
			top: "46px",
			left: "96px",
		},
		thridBase: {
			top: "90px",
			left: "52px",
		},
	};
	return (
		<Box sx={{ ...styles.container }}>
			<Box
				sx={{
					...styles.base,
					...styles.firstBase,
					...styles.onBase,
				}}
			></Box>
			<Box
				sx={{
					...styles.base,
					...styles.secondBase,
				}}
			></Box>
			<Box
				sx={{
					...styles.base,
					...styles.thridBase,
				}}
			></Box>
		</Box>
	);
}
