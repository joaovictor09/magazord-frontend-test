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
	description: string;
	html_url: string;
	language: string;
	stargazers_count: number;
	forks_count: number;
	owner: {
		login: string;
	};
	created_at: string;
	updated_at: string;
	fork: boolean;
	archived: boolean;
	mirror_url: string;
};
