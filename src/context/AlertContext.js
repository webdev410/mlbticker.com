import { Box } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import SnackAlert from "../components/SnackAlert";

const AlertContext = createContext();
// serverity can be one of the following:
// error, warning, success, info
const AlertProvider = ({ children }) => {
	const [severity, setSeverity] = useState("success");
	const [message, setMessage] = useState("");
	/**
	 *
	 * takes in severity (error, warning, info, success) and a message.
	 * @param {string} s severity
	 * @param {string} m message
	 * @returns
	 */
	function setAlert(s, m) {
		setSeverity(s);
		setMessage(m);
		return;
	}
	React.useEffect(() => {
		const snackBtn = document.getElementById("snackBtn");
		if (snackBtn) {
			snackBtn.click();
		}
		setMessage("");
		setSeverity("");
	}, [message, severity]);
	if (!children) return console.log("no children");

	return (
		<AlertContext.Provider
			value={{
				message,
				setMessage,
				severity,
				setSeverity,
				setAlert,
			}}
		>
			{children}
			<SnackAlert variant={severity} message={message || ""} />
		</AlertContext.Provider>
	);
};

export const useAlert = () => useContext(AlertContext);

export default AlertProvider;
