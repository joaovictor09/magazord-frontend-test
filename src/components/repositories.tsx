import { BookMarked, Star } from "lucide-react";
import { useGetRepositories } from "../queries/github/use-get-repositories";
import { useGetStarredRepositories } from "../queries/github/use-get-starred-repositories";
import { RepositoriesCounterBadge } from "./repositories-counter-badge";
import { RepositoriesFilter } from "./repositories-filter";
import { RepositoryCard } from "./repository-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Repositories() {
	const username = "joaovictor09";
	const { data: repositories = [] } = useGetRepositories(username);
	const { data: starredRepositories = [] } =
		useGetStarredRepositories(username);

	return (
		<Tabs defaultValue="repositories" className="w-full">
			<TabsList className="flex items-center gap-[57px]">
				<TabsTrigger value="repositories">
					<div className="flex items-center gap-2 text-lg">
						<BookMarked />
						<span>Repositories</span>
						<RepositoriesCounterBadge count={repositories.length} />
					</div>
				</TabsTrigger>
				<TabsTrigger value="starred">
					<div className="flex items-center gap-2 text-lg">
						<Star />
						<span>Starred</span>
						<RepositoriesCounterBadge count={starredRepositories.length} />
					</div>
				</TabsTrigger>
			</TabsList>

			<TabsContent value="repositories">
				<RepositoriesFilter />
				<div className="mt-10 flex flex-col gap-12">
					{repositories.map((repo) => (
						<RepositoryCard
							key={repo.name}
							author={repo.owner.login}
							name={repo.name}
							description={repo.description}
							language={repo.language}
							stars={repo.stargazers_count}
							forks={repo.forks_count}
							url={repo.html_url}
						/>
					))}
				</div>
			</TabsContent>

			<TabsContent value="starred">
				<RepositoriesFilter />
				<div className="mt-10 flex flex-col gap-12">
					{starredRepositories.map((repo) => (
						<RepositoryCard
							key={repo.name}
							author={repo.owner.login}
							name={repo.name}
							description={repo.description}
							language={repo.language}
							stars={repo.stargazers_count}
							forks={repo.forks_count}
							url={repo.html_url}
						/>
					))}
				</div>
			</TabsContent>
		</Tabs>
	);
}
