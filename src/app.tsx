import { Header } from "./components/header";
import { Profile } from "./components/profile";

export function App() {
	return (
		<div className="w-screen min-h-screen flex flex-col text-primary items-center">
			<Header />
			<div className="mt-10 max-w-7xl w-full px-6">
				<Profile />
			</div>
		</div>
	);
}
