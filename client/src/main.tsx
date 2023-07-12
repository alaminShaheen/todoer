import { ProjectContextProvider } from "@/contexts/ProjectContext.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ProjectContextProvider>
			<App />
		</ProjectContextProvider>
	</React.StrictMode>,
);
