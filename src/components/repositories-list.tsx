import type { GithubRepository } from "../types/github-service-types";
import { RepositoryCard } from "./repository-card";
import { RepositoryCardLoading } from "./repository-card-loading";
import { EmptyState } from "./ui/empty-state";

interface RepositoriesListProps {
	isLoading: boolean;
	repositories: GithubRepository[];
}

export function RepositoriesList({
	isLoading,
	repositories,
}: RepositoriesListProps) {
	if (isLoading) {
		return (
			<div className="mt-10 flex flex-col gap-12">
				{Array.from({ length: 10 }).map((_, index) => (
					<RepositoryCardLoading
						key={`repository-card-loading-${
							// biome-ignore lint/suspicious/noArrayIndexKey: <This is a valid use case>
							index
						}`}
					/>
				))}
			</div>
		);
	}

	if (repositories.length === 0) {
		return (
			<EmptyState
				title="No repositories found"
				description="Try adjusting your filters or search terms to find repositories"
			/>
		);
	}

	return (
		<div className="mt-10 flex flex-col gap-12">
			{repositories.map((repo) => (
				<RepositoryCard key={repo.id} repository={repo} />
			))}
		</div>
	);
}
