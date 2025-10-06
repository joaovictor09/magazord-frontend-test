import { useQuery } from "@tanstack/react-query";
import { GithubService } from "../../services/github-service";

const githubService = new GithubService();

export function useGetRepositories(username: string) {
	return useQuery({
		queryKey: ["github", "repositories", username],
		queryFn: () => githubService.getRepositories(username),
	});
}
