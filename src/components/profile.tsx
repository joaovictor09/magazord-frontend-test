import { useGetUser } from "../queries/github/use-get-user";
import { useFiltersStorage } from "../storage/filters-storage";
import { ProfileLinks } from "./profile-links";
import { ProfileLoading } from "./profile-loading";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { ErrorMessage } from "./ui/error-message";

export function Profile() {
	const { username } = useFiltersStorage();
	const { data: user, isLoading, error, refetch } = useGetUser(username);

	if (isLoading) return <ProfileLoading />;

	if (error) {
		return (
			<div className="w-[251px]">
				<ErrorMessage
					title="Failed to load profile"
					description={error instanceof Error ? error.message : "Unknown error"}
					onRetry={refetch}
				/>
			</div>
		);
	}

	if (!user) {
		return (
			<div className="w-[251px]">
				<ErrorMessage
					title="User not found"
					description={`The user "${username}" doesn't exist or is not accessible.`}
				/>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-6 w-full md:w-max items-center justify-center md:justify-start">
			<div className="relative w-max">
				<img
					src={user.avatar_url}
					alt="Profile"
					className="w-[150px] h-[150px] rounded-full"
				/>

				<div className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
					<span className="text-lg">😎</span>
				</div>
			</div>

			<div className="w-[251px] flex flex-col gap-1 text-center">
				<h1 className="text-2xl font-bold">{user.name}</h1>
				<span className="text-primary-light">{user.bio}</span>
			</div>

			<div className="hidden md:flex flex-col gap-4 w-full">
				<ProfileLinks user={user} />
			</div>

			<Accordion type="single" collapsible className="w-full md:hidden">
				<AccordionItem value="item-1">
					<AccordionTrigger className="mx-auto">
						Informações Adicionais
					</AccordionTrigger>
					<AccordionContent className="w-full">
						<ProfileLinks user={user} />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
