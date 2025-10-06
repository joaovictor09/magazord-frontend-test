import { BookMarked, Star } from "lucide-react";
import { RepositoriesCounterBadge } from "./repositories-counter-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Repositories() {
	return (
		<Tabs>
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

			<TabsContent value="repositories">Repositories</TabsContent>
			<TabsContent value="starred">Starred</TabsContent>
		</Tabs>
	);
}
