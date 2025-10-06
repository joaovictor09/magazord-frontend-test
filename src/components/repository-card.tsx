import { GitFork, Star } from "lucide-react";
import type { GithubRepository } from "../types/github-service-types";
import { RepositoryDetails } from "./repository-details";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

interface RepositoryCardProps {
	repository: GithubRepository;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
	const { name, description, language } = repository;

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="flex flex-col gap-[9px] cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
					<div>
						<span className="font-light text-lg">{repository.owner.login}</span>
						<span className="font-normal text-lg"> / </span>
						<span className="font-semibold text-lg text-[#0587FF]">{name}</span>
					</div>

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
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Repository Details</DialogTitle>
				</DialogHeader>
				<RepositoryDetails repository={repository} />
			</DialogContent>
		</Dialog>
	);
}
