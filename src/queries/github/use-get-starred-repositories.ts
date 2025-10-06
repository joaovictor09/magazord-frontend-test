import { useQuery } from "@tanstack/react-query";
import { githubService } from "../../services/github-service";

export function useGetStarredRepositories(username: string) {
	return useQuery({
		queryKey: ["github", "starred", username],
		queryFn: () => githubService.getStarredRepositories(username),
	});
}
