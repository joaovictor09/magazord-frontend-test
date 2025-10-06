import axios from "axios";
import { GithubApiError } from "../errors/github-api-error";
import { api } from "../lib/axios";
import type {
	GithubRepository,
	GithubUser,
} from "../types/github-service-types";

export class GithubService {
	async getUser(username: string) {
		if (!username || username.trim() === "") {
			throw new GithubApiError("Username is required");
		}

		try {
			const response = await api.get<GithubUser>(`/users/${username}`, {
				timeout: 10000,
			});
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const status = error.response?.status;
				if (status === 404) {
					throw new GithubApiError(`User "${username}" not found`, 404, error);
				}
			}
			throw error;
		}
	}

	async getRepositories(username: string) {
		if (!username || username.trim() === "") {
			throw new GithubApiError("Username is required");
		}
		return this.getPaginatedData(`/users/${username}/repos`);
	}

	async getStarredRepositories(username: string) {
		if (!username || username.trim() === "") {
			throw new GithubApiError("Username is required");
		}
		return this.getPaginatedData(`/users/${username}/starred`);
	}

	private async getPaginatedData(url: string) {
		try {
			const nextPattern = /(?<=<)([\S]*)(?=>; rel="next")/i;
			let pagesRemaining = true;
			const data: GithubRepository[] = [];

			while (pagesRemaining) {
				const response = await api.get<GithubRepository[]>(url, {
					params: {
						per_page: 100,
					},
				});

				data.push(...response.data);

				const linkHeader = response.headers.link;

				pagesRemaining = linkHeader?.includes(`rel="next"`);

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
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const status = error.response?.status;
				const message = error.response?.data?.message || error.message;

				if (status === 404) {
					throw new GithubApiError("User or resource not found", 404, error);
				}
				if (status && status >= 500) {
					throw new GithubApiError(
						"GitHub API is currently unavailable. Please try again later.",
						status,
						error,
					);
				}

				throw new GithubApiError(`GitHub API Error: ${message}`, status, error);
			}

			throw new GithubApiError(
				"An unexpected error occurred while fetching data",
				undefined,
				error,
			);
		}
	}
}
