import React from "react";
import { Box, Typography } from "@mui/material";
export default function Diamond() {
	const styles = {
		base: {
			position: "absolute",
			height: "85px",
			width: "85px",
			transform: "rotate(-45deg)",
			border: "1px solid white",
			backgroundColor: "transparent",
			zIndex: "1000",
			border: "7px solid white",
		},
		onBase: {
			backgroundColor: "gold",
			border: "7px solid gold",
		},
		firstBase: {
			top: "450px",
			left: "706px",
		},
		secondBase: {
			top: "231px",
			left: "484px",
		},
		thridBase: {
			top: "450px",
			left: "262px",
		},
	};
	return (
		<Box sx={{ position: "absolute" }}>
			<Box sx={{ position: "relative" }}>
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
		</Box>
	);
}
