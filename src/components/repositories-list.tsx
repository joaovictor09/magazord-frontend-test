import type { GithubRepository } from "../types/github-service-types";
import { RepositoryCard } from "./repository-card";
import { RepositoryCardLoading } from "./repository-card-loading";

interface RepositoriesListProps {
	isLoading: boolean;
	repositories: GithubRepository[];
}

export function RepositoriesList({
	isLoading,
	repositories,
}: RepositoriesListProps) {
	return (
		<div className="mt-10 flex flex-col gap-12">
			{isLoading &&
				Array.from({ length: 10 }).map((_, index) => (
					<RepositoryCardLoading key={`repository-card-loading-${index}`} />
				))}
			{repositories.map((repo) => (
				<RepositoryCard
					key={repo.name}
					author={repo.owner.login}
					name={repo.name}
					description={repo.description}
					language={repo.language}
					stars={repo.stargazers_count}
					forks={repo.forks_count}
					url={repo.html_url}
				/>
			))}
		</div>
	);
}
