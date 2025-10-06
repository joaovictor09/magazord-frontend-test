import { useQuery } from "@tanstack/react-query";
import { GithubService } from "../../services/github-service";

export function useGetRepositories(username: string) {
	return useQuery({
		queryKey: ["github", "repositories", username],
		queryFn: () => new GithubService().getRepositories(username),
	});
}
