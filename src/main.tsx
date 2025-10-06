import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import { Providers } from "./components/providers.tsx";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: <This is a valid use case>
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<App />
		</Providers>
	</StrictMode>,
);
