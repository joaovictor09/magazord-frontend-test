import { api } from "../lib/axios";
import type {
	GithubRepository,
	GithubUser,
} from "../types/github-service-types";

async function getPaginatedData(url: string): Promise<GithubRepository[]> {
	const nextPattern = /(?<=<)([\S]*)(?=>; rel="next")/i;
	let pagesRemaining = true;
	let data: GithubRepository[] = [];

	while (pagesRemaining) {
		const response = await api.get<GithubRepository[]>(url, {
			params: {
				per_page: 100,
			},
		});

		data = [...data, ...response.data];

		const linkHeader = response.headers.link;

		pagesRemaining = linkHeader && linkHeader.includes(`rel="next"`);

		if (pagesRemaining) {
			const match = linkHeader.match(nextPattern);
			if (match) {
				const nextUrl = new URL(match[0]);
				url = nextUrl.pathname + nextUrl.search;
			} else {
				pagesRemaining = false;
			}
		}
	}

	return data;
}

export const githubService = {
	getUser: async (username: string) => {
		const response = await api.get<GithubUser>(`/users/${username}`);
		return response.data;
	},
	getRepositories: async (username: string) => {
		return getPaginatedData(`/users/${username}/repos`);
	},
	getStarredRepositories: async (username: string) => {
		return getPaginatedData(`/users/${username}/starred`);
	},
};
