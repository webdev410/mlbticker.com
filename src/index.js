import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import AlertProvider from "./context/AlertContext";
import MlbProvider from "./context/MlbContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AlertProvider>
		<MlbProvider>
			<App />
		</MlbProvider>
	</AlertProvider>
);
