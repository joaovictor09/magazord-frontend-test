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
				<RepositoryCard key={repo.id} repository={repo} />
			))}
		</div>
	);
}
