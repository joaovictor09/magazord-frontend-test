import { useQuery } from "@tanstack/react-query";
import { GithubService } from "../../services/github-service";

const githubService = new GithubService();

export function useGetUser(username: string) {
	return useQuery({
		queryKey: ["github", "user", username],
		queryFn: () => githubService.getUser(username),
	});
}
