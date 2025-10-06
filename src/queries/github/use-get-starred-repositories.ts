import { useQuery } from "@tanstack/react-query";
import { GithubService } from "../../services/github-service";

const githubService = new GithubService();

export function useGetStarredRepositories(username: string) {
	return useQuery({
		queryKey: ["github", "starred", username],
		queryFn: () => githubService.getStarredRepositories(username),
		enabled: !!username && username.trim() !== "",
		retry: false,
	});
}
