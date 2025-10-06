import { useQuery } from "@tanstack/react-query";
import { githubService } from "../../services/github-service";

export function useGetUser(username: string) {
	return useQuery({
		queryKey: ["github", "user", username],
		queryFn: () => githubService.getUser(username),
	});
}
