import { useQuery } from "@tanstack/react-query";
import { GithubService } from "../../services/github-service";

export function useGetUser(username: string) {
	return useQuery({
		queryKey: ["github", "user", username],
		queryFn: () => new GithubService().getUser(username),
	});
}
