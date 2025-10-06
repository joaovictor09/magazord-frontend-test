import { Header } from "./components/header";
import { Profile } from "./components/profile";
import { Repositories } from "./components/repositories";

export function App() {
	return (
		<div className="w-screen min-h-screen flex flex-col text-primary items-center mb-10">
			<Header />
			<div className="mt-10 max-w-7xl w-full px-6 flex gap-[65px] flex-col md:flex-row">
				<Profile />
				<Repositories />
			</div>
		</div>
	);
}
