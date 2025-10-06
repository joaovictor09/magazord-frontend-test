import axios from "axios";

const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

export const api = axios.create({
	baseURL: "https://api.github.com",
	headers: {
		Accept: "application/vnd.github+json",
		Authorization: githubToken ? `Bearer ${githubToken}` : undefined,
	},
});
