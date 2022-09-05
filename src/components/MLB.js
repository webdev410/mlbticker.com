import React from "react";
import { Box, Typography } from "@mui/material";
import { useMlb } from "../context/MlbContext";
import Game from "./Game";
import QuickLink from "./QuickLink";
import RefreshButton from "./RefreshButton";
import BackToTop from "./ScrollToTop";
import Spinner from "./Spinner";
export default function MLB() {
	const { games, fetchGames, loading } = useMlb();

	// console.log({ games });

	React.useEffect(() => {
		fetchGames();
	}, []);

	if (loading) return <Spinner />;
	return (
		<Box>
			<RefreshButton />
			<BackToTop />
			<Typography sx={{ fontWeight: "bold", fontSize: 32 }}>
				Major League Baseball
			</Typography>
			<img src={"../../img/mlb.png"} style={{ width: "230px" }}></img>
			<QuickLink />
			{games &&
				games.map((game) => (
					<Box key={game.gamePk}>
						<Game game={game} />
					</Box>
				))}
		</Box>
	);
}
