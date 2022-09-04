import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function CustomTooltip({ children, text }) {
	return (
		<Tooltip title={text} placement="top">
			{children}
		</Tooltip>
	);
}
