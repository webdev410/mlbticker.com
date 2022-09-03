import React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp({ variant, message }) {
	const { enqueueSnackbar } = useSnackbar();

	const handleClick = () => {
		enqueueSnackbar("I love snacks.");
	};

	const handleClickVariant = (variant) => () => {
		// variant could be success, error, warning, info, or default
		if (message === "") {
			return;
		} else {
			enqueueSnackbar(`${message}`, { variant });
		}
	};

	return (
		<React.Fragment>
			{/* <Button onClick={handleClick}>Show snackbar</Button> */}
			<Button id="snackBtn" onClick={handleClickVariant(variant)} />
		</React.Fragment>
	);
}

export default function SnackAlert({ variant, message }) {
	return (
		<SnackbarProvider maxSnack={2}>
			<MyApp variant={variant} message={message} />
		</SnackbarProvider>
	);
}
