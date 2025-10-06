import { api } from "../lib/axios";
import type {
	GithubRepository,
	GithubUser,
} from "../types/github-service-types";

export const githubService = {
	getUser: async (username: string) => {
		const response = await api.get<GithubUser>(`/users/${username}`);
		return response.data;
	},
	getRepositories: async (username: string) => {
		const response = await api.get<GithubRepository[]>(
			`/users/${username}/repos`,
			{
				params: {
					per_page: 1000,
				},
			},
		);
		return response.data;
	},
	getStarredRepositories: async (username: string) => {
		const response = await api.get<GithubRepository[]>(
			`/users/${username}/starred`,
			{
				params: {
					per_page: 1000,
				},
			},
		);
		return response.data;
	},
};
