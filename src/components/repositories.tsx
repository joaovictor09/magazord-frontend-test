import { BookMarked, Star } from "lucide-react";
import { useRepositories } from "../hooks/use-repositories";
import { RepositoriesCounterBadge } from "./repositories-counter-badge";
import { RepositoriesFilter } from "./repositories-filter";
import { RepositoriesList } from "./repositories-list";
import { ErrorMessage } from "./ui/error-message";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Repositories() {
	const {
		filteredRepositories,
		filteredStarredRepositories,
		isRepositoriesLoading,
		isStarredRepositoriesLoading,
		repositoriesCount,
		starredRepositoriesCount,
		repositoriesError,
		starredRepositoriesError,
		refetchRepositories,
		refetchStarredRepositories,
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
				{/* ✅ Error state para repositories */}
				{repositoriesError ? (
					<ErrorMessage
						title="Failed to load repositories"
						description={
							repositoriesError instanceof Error
								? repositoriesError.message
								: "Unable to fetch repositories. Please try again."
						}
						onRetry={() => refetchRepositories()}
					/>
				) : (
					<RepositoriesList
						isLoading={isRepositoriesLoading}
						repositories={filteredRepositories}
					/>
				)}
			</TabsContent>

			<TabsContent value="starred">
				<RepositoriesFilter />
				{/* ✅ Error state para starred */}
				{starredRepositoriesError ? (
					<ErrorMessage
						title="Failed to load starred repositories"
						description={
							starredRepositoriesError instanceof Error
								? starredRepositoriesError.message
								: "Unable to fetch starred repositories. Please try again."
						}
						onRetry={() => refetchStarredRepositories()}
					/>
				) : (
					<RepositoriesList
						isLoading={isStarredRepositoriesLoading}
						repositories={filteredStarredRepositories}
					/>
				)}
			</TabsContent>
		</Tabs>
	);
}
