import { Building } from "lucide-react";
import { ProfileLink } from "./profile-link";

export function Profile() {
	return (
		<div className="flex flex-col gap-6 w-max items-center">
			<div className="relative w-max">
				<img
					src="https://github.com/joaovictor09.png"
					alt="Profile"
					className="w-[150px] h-[150px] rounded-full"
				/>

				<div className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
					<span className="text-lg">😎</span>
				</div>
			</div>

			<div className="w-[251px] flex flex-col gap-1 text-center">
				<h1 className="text-2xl font-bold">Gabriel Cordeiro</h1>
				<span className="text-primary-light">
					Head development team Front-End Magazord - Tagged (#BZ)
				</span>
			</div>

			<div className="flex flex-col gap-4 w-full">
				<ProfileLink
					icon={<Building />}
					label="Magazord"
					link="https://magazord.com.br"
				/>
				<ProfileLink
					icon={<Building />}
					label="Magazord"
					link="https://magazord.com.br"
				/>
				<ProfileLink
					icon={<Building />}
					label="Magazord"
					link="https://magazord.com.br"
				/>
			</div>
		</div>
	);
}
