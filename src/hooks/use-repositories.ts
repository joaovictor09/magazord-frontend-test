import { useGetRepositories } from "../queries/github/use-get-repositories";
import { useGetStarredRepositories } from "../queries/github/use-get-starred-repositories";
import { useFilteredRepositories } from "./use-filtered-repositories";

export function useRepositories() {
	const username = "joaovictor09";
	const { data: repositories = [], isLoading: isRepositoriesLoading } =
		useGetRepositories(username);
	const {
		data: starredRepositories = [],
		isLoading: isStarredRepositoriesLoading,
	} = useGetStarredRepositories(username);

	const filteredRepositories = useFilteredRepositories(repositories);
	const filteredStarredRepositories =
		useFilteredRepositories(starredRepositories);

	const repositoriesCount = repositories.length;
	const starredRepositoriesCount = starredRepositories.length;

	return {
		filteredRepositories,
		filteredStarredRepositories,
		isRepositoriesLoading,
		isStarredRepositoriesLoading,
		repositoriesCount,
		starredRepositoriesCount,
	};
}
