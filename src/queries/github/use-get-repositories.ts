import { useQuery } from "@tanstack/react-query";
import { githubService } from "../../services/github-service";

export function useGetRepositories(username: string) {
	return useQuery({
		queryKey: ["github", "repositories", username],
		queryFn: () => githubService.getRepositories(username),
	});
}
