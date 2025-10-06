import axios from "axios";

const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

export const api = axios.create({
	baseURL: "https://api.github.com",
	headers: {
		Accept: "application/vnd.github+json",
		Authorization: githubToken ? `Bearer ${githubToken}` : undefined,
		"X-GitHub-Api-Version": "2022-11-28",
	},
	timeout: 15 * 1000, // 15 seconds,
});
