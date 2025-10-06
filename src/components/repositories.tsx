import { BookMarked, Star } from "lucide-react";
import { useRepositories } from "../hooks/use-repositories";
import { RepositoriesCounterBadge } from "./repositories-counter-badge";
import { RepositoriesFilter } from "./repositories-filter";
import { RepositoriesList } from "./repositories-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Repositories() {
	const {
		filteredRepositories,
		filteredStarredRepositories,
		isRepositoriesLoading,
		isStarredRepositoriesLoading,
		repositoriesCount,
		starredRepositoriesCount,
	} = useRepositories();

	return (
		<Tabs defaultValue="repositories" className="w-full">
			<TabsList className="flex items-center gap-[57px]">
				<TabsTrigger value="repositories">
					<div className="flex items-center gap-2 text-lg">
						<BookMarked />
						<span>Repositories</span>
						<RepositoriesCounterBadge count={repositoriesCount} />
					</div>
				</TabsTrigger>
				<TabsTrigger value="starred">
					<div className="flex items-center gap-2 text-lg">
						<Star />
						<span>Starred</span>
						<RepositoriesCounterBadge count={starredRepositoriesCount} />
					</div>
				</TabsTrigger>
			</TabsList>

			<TabsContent value="repositories">
				<RepositoriesFilter />
				<RepositoriesList
					isLoading={isRepositoriesLoading}
					repositories={filteredRepositories}
				/>
			</TabsContent>

			<TabsContent value="starred">
				<RepositoriesFilter />
				<RepositoriesList
					isLoading={isStarredRepositoriesLoading}
					repositories={filteredStarredRepositories}
				/>
			</TabsContent>
		</Tabs>
	);
}
