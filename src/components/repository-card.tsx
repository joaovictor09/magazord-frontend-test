import { GitFork, Star } from "lucide-react";

interface RepositoryCardProps {
	author: string;
	name: string;
	description: string;
	language: string;
	stars: number;
	forks: number;
	url: string;
}

export function RepositoryCard({
	author,
	name,
	description,
	language,
	stars,
	forks,
	url,
}: RepositoryCardProps) {
	return (
		<div className="flex flex-col gap-[9px]">
			<a href={url} target="_blank">
				<span className="font-light text-lg">{author}</span>
				<span className="font-normal text-lg"> / </span>
				<span className="font-semibold text-lg text-[#0587FF]">{name}</span>
			</a>

			<span className="text-primary-light">{description}</span>

			<div className="flex items-center gap-8">
				{language && (
					<div className="flex items-center gap-2">
						<span>{language}</span>
					</div>
				)}
				<div className="flex items-center gap-2">
					<span className="flex items-center gap-2">
						<Star fill="#000" /> {stars}
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="flex items-center gap-2">
						<GitFork />
						{forks}
					</span>
				</div>
			</div>
		</div>
	);
}
