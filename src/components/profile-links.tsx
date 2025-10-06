import { Building, Link, MapPin, Twitter } from "lucide-react";
import type { GithubUser } from "../types/github-service-types";
import { ProfileLink } from "./profile-link";

interface ProfileLinksProps {
	user: GithubUser;
}

export function ProfileLinks({ user }: ProfileLinksProps) {
	return (
		<>
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
		</>
	);
}
