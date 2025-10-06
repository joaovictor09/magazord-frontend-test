import {
	AlertCircle,
	Calendar,
	ExternalLink,
	Eye,
	GitBranch,
	GitFork,
	Scale,
	Star,
} from "lucide-react";
import type { GithubRepository } from "../types/github-service-types";
import { formatDate } from "../utils/format-date";

interface RepositoryDetailsProps {
	repository: GithubRepository;
}

export function RepositoryDetails({ repository }: RepositoryDetailsProps) {
	const formatSize = (size: number) => {
		return `${(size / 1024).toFixed(2)} MB`;
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-start gap-4">
				<img
					src={repository.owner.avatar_url}
					alt={repository.owner.login}
					className="w-16 h-16 rounded-full"
				/>
				<div className="flex-1">
					<h2 className="text-2xl font-bold text-primary">
						{repository.full_name}
					</h2>
					{repository.description && (
						<p className="text-primary-light mt-2">{repository.description}</p>
					)}
				</div>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div className="flex items-center gap-2 text-sm">
					<Star className="w-4 h-4" />
					<span className="font-semibold">{repository.stargazers_count}</span>
					<span className="text-primary-light">Stars</span>
				</div>
				<div className="flex items-center gap-2 text-sm">
					<GitFork className="w-4 h-4" />
					<span className="font-semibold">{repository.forks_count}</span>
					<span className="text-primary-light">Forks</span>
				</div>
				<div className="flex items-center gap-2 text-sm">
					<Eye className="w-4 h-4" />
					<span className="font-semibold">{repository.watchers_count}</span>
					<span className="text-primary-light">Watchers</span>
				</div>
				<div className="flex items-center gap-2 text-sm">
					<AlertCircle className="w-4 h-4" />
					<span className="font-semibold">{repository.open_issues_count}</span>
					<span className="text-primary-light">Issues</span>
				</div>
			</div>

			<div className="grid gap-3 text-sm">
				{repository.language && (
					<div className="flex items-center gap-2">
						<span className="font-semibold min-w-[100px]">Language:</span>
						<span className="text-primary-light">{repository.language}</span>
					</div>
				)}

				<div className="flex items-center gap-2">
					<GitBranch className="w-4 h-4" />
					<span className="font-semibold min-w-[100px]">Branch:</span>
					<span className="text-primary-light">
						{repository.default_branch}
					</span>
				</div>

				{repository.license && (
					<div className="flex items-center gap-2">
						<Scale className="w-4 h-4" />
						<span className="font-semibold min-w-[100px]">License:</span>
						<span className="text-primary-light">
							{repository.license.name}
						</span>
					</div>
				)}

				<div className="flex items-center gap-2">
					<span className="font-semibold min-w-[100px]">Size:</span>
					<span className="text-primary-light">
						{formatSize(repository.size)}
					</span>
				</div>

				<div className="flex items-center gap-2">
					<Calendar className="w-4 h-4" />
					<span className="font-semibold min-w-[100px]">Created:</span>
					<span className="text-primary-light">
						{formatDate(repository.created_at)}
					</span>
				</div>

				<div className="flex items-center gap-2">
					<Calendar className="w-4 h-4" />
					<span className="font-semibold min-w-[100px]">Updated:</span>
					<span className="text-primary-light">
						{formatDate(repository.updated_at)}
					</span>
				</div>

				{repository.homepage && (
					<div className="flex items-center gap-2">
						<ExternalLink className="w-4 h-4" />
						<span className="font-semibold min-w-[100px]">Homepage:</span>
						<a
							href={repository.homepage}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#0587FF] hover:underline"
						>
							{repository.homepage}
						</a>
					</div>
				)}
			</div>

			{repository.topics && repository.topics.length > 0 && (
				<div className="flex flex-col gap-2">
					<span className="font-semibold text-sm">Topics:</span>
					<div className="flex flex-wrap gap-2">
						{repository.topics.map((topic) => (
							<span
								key={topic}
								className="px-3 py-1 bg-[#F8F8F8] text-[#0587FF] rounded-full text-xs border border-[#DBDBDB]"
							>
								{topic}
							</span>
						))}
					</div>
				</div>
			)}

			<div className="flex gap-3 pt-4 border-t">
				<a
					href={repository.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
				>
					<ExternalLink className="w-4 h-4" />
					View on GitHub
				</a>
			</div>
		</div>
	);
}
