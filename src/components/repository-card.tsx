import { GitFork, Star } from "lucide-react";
import type { GithubRepository } from "../types/github-service-types";

interface RepositoryCardProps {
	repository: GithubRepository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
	const { name, description, language } = repository;

	return (
		<div className="flex flex-col gap-[9px]">
			<a href={repository.html_url} target="_blank">
				<span className="font-light text-lg">{repository.owner.login}</span>
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
						<Star fill="#000" /> {repository.stargazers_count}
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="flex items-center gap-2">
						<GitFork />
						{repository.forks_count}
					</span>
				</div>
			</div>
		</div>
	);
}
