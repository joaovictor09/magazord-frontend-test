import { Building, Link, MapPin, Twitter } from "lucide-react";
import { useGetUser } from "../queries/github/use-get-user";
import { useFiltersStorage } from "../storage/filters-storage";
import { ProfileLink } from "./profile-link";
import { ProfileLoading } from "./profile-loading";
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
		<div className="flex flex-col gap-6 w-max items-center">
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

			<div className="flex flex-col gap-4 w-full">
				{user.company && (
					<ProfileLink
						icon={<Building className="size-4" />}
						label={user.company}
					/>
				)}
				{user.location && (
					<ProfileLink
						icon={<MapPin className="size-4" />}
						label={user.location}
					/>
				)}
				{user.blog && (
					<ProfileLink
						icon={<Link className="size-4" />}
						label={user.blog}
						link={user.blog}
					/>
				)}
				{user.twitter_username && (
					<ProfileLink
						icon={<Twitter className="size-4" />}
						label={user.twitter_username}
						link={`https://twitter.com/${user.twitter_username}`}
					/>
				)}
			</div>
		</div>
	);
}
