export type GithubUser = {
	name: string;
	bio: string;
	company: string;
	location: string;
	blog: string;
	twitter_username: string;
	avatar_url: string;
	html_url: string;
};

export type GithubRepository = {
	id: number;
	name: string;
	full_name: string;
	description: string;
	html_url: string;
	language: string;
	stargazers_count: number;
	forks_count: number;
	watchers_count: number;
	open_issues_count: number;
	owner: {
		login: string;
		avatar_url: string;
	};
	created_at: string;
	updated_at: string;
	pushed_at: string;
	fork: boolean;
	archived: boolean;
	mirror_url: string;
	homepage: string;
	size: number;
	default_branch: string;
	topics: string[];
	visibility: string;
	license: {
		name: string;
		spdx_id: string;
	} | null;
};
