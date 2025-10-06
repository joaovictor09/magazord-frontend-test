import { BookMarked, Star } from "lucide-react";
import { RepositoriesCounterBadge } from "./repositories-counter-badge";
import { RepositoriesFilter } from "./repositories-filter";
import { RepositoryCard } from "./repository-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Repositories() {
	return (
		<Tabs defaultValue="repositories" className="w-full">
			<TabsList className="flex items-center gap-[57px]">
				<TabsTrigger value="repositories">
					<div className="flex items-center gap-2 text-lg">
						<BookMarked />
						<span>Repositories</span>
						<RepositoriesCounterBadge count={81} />
					</div>
				</TabsTrigger>
				<TabsTrigger value="starred">
					<div className="flex items-center gap-2 text-lg">
						<Star />
						<span>Starred</span>
						<RepositoriesCounterBadge count={81} />
					</div>
				</TabsTrigger>
			</TabsList>
			<TabsContent value="repositories">
				<RepositoriesFilter />
				<div className="mt-10 flex flex-col gap-12">
					<RepositoryCard
						author="John Doe"
						name="Repository Name"
						description="Repository Description"
						language="JavaScript"
						stars={10}
						forks={10}
					/>
					<RepositoryCard
						author="John Doe"
						name="Repository Name"
						description="Repository Description"
						language="JavaScript"
						stars={10}
						forks={10}
					/>
				</div>
			</TabsContent>

			<TabsContent value="starred">
				<RepositoriesFilter />
				<div className="mt-10 flex flex-col gap-12">
					<RepositoryCard
						author="John Doe"
						name="Repository Name"
						description="Repository Description"
						language="JavaScript"
						stars={10}
						forks={10}
					/>
				</div>
			</TabsContent>
		</Tabs>
	);
}
