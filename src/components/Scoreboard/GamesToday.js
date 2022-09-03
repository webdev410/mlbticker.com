import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useFetch from "../../../../web/src/hooks/useFetch";
import { useMlb } from "../../../../web/src/context/mlbContext";

export default function GamesToday() {
	const { response, loading, error, gamesToday, setGamesToday } = useMlb();

	return (
		<div className="App">
			{loading && <Typography>Loading...</Typography>}
			{error && <Typography>Something went wrong...</Typography>}

			{gamesToday &&
				gamesToday.map((game) => {
					<Typography>test</Typography>;
				})}
		</div>
	);
}
