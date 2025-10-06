import { useQuery } from "@tanstack/react-query";
import { GithubService } from "../../services/github-service";

export function useGetStarredRepositories(username: string) {
	return useQuery({
		queryKey: ["github", "starred", username],
		queryFn: () => new GithubService().getStarredRepositories(username),
	});
}
