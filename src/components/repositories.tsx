import { BookMarked, Star } from "lucide-react";
import { useGetRepositories } from "../queries/github/use-get-repositories";
import { useGetStarredRepositories } from "../queries/github/use-get-starred-repositories";
import { RepositoriesCounterBadge } from "./repositories-counter-badge";
import { RepositoriesFilter } from "./repositories-filter";
import { RepositoriesList } from "./repositories-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Repositories() {
	const username = "joaovictor09";
	const { data: repositories = [], isLoading: isRepositoriesLoading } =
		useGetRepositories(username);
	const {
		data: starredRepositories = [],
		isLoading: isStarredRepositoriesLoading,
	} = useGetStarredRepositories(username);

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
				<RepositoriesList
					isLoading={isRepositoriesLoading}
					repositories={repositories}
				/>
			</TabsContent>

			<TabsContent value="starred">
				<RepositoriesFilter />
				<RepositoriesList
					isLoading={isStarredRepositoriesLoading}
					repositories={starredRepositories}
				/>
			</TabsContent>
		</Tabs>
	);
}
