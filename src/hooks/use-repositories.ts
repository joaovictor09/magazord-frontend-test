import { useGetRepositories } from "../queries/github/use-get-repositories";
import { useGetStarredRepositories } from "../queries/github/use-get-starred-repositories";
import { useFiltersStorage } from "../storage/filters-storage";
import { useFilteredRepositories } from "./use-filtered-repositories";

export function useRepositories() {
	const { username } = useFiltersStorage();
	const {
		data: repositories = [],
		isLoading: isRepositoriesLoading,
		error: repositoriesError,
		refetch: refetchRepositories,
	} = useGetRepositories(username);
	const {
		data: starredRepositories = [],
		isLoading: isStarredRepositoriesLoading,
		error: starredRepositoriesError,
		refetch: refetchStarredRepositories,
	} = useGetStarredRepositories(username);

	const filteredRepositories = useFilteredRepositories(repositories);
	const filteredStarredRepositories =
		useFilteredRepositories(starredRepositories);

	const repositoriesCount = repositories.length;
	const starredRepositoriesCount = starredRepositories.length;

	return {
		// Data
		filteredRepositories,
		filteredStarredRepositories,
		repositoriesCount,
		starredRepositoriesCount,

		// Loading
		isRepositoriesLoading,
		isStarredRepositoriesLoading,

		// Error
		repositoriesError,
		starredRepositoriesError,

		// Refetch
		refetchRepositories,
		refetchStarredRepositories,
	};
}
