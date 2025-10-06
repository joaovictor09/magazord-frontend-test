import { useMemo } from "react";
import { useFiltersStorage } from "../storage/filters-storage";
import type { GithubRepository } from "../types/github-service-types";

export function useFilteredRepositories(repositories: GithubRepository[]) {
	const { filters } = useFiltersStorage();

	return useMemo(() => {
		return repositories.filter((repo) => {
			if (filters.search) {
				const searchTerm = filters.search.toLowerCase();
				const matchesSearch =
					repo.name.toLowerCase().includes(searchTerm) ||
					repo.description?.toLowerCase().includes(searchTerm);
				if (!matchesSearch) return false;
			}

			if (filters.language !== "all") {
				if (repo.language && repo.language.toLowerCase() !== filters.language)
					return false;
			}

			if (filters.type !== "all") {
				switch (filters.type) {
					case "sources":
						if (repo.fork) return false;
						break;
					case "forks":
						if (!repo.fork) return false;
						break;
					case "archived":
						if (!repo.archived) return false;
						break;
					case "mirrors":
						if (!repo.mirror_url) return false;
						break;
				}
			}

			return true;
		});
	}, [repositories, filters]);
}
