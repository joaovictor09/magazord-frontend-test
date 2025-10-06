import { GitFork, Star } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export function RepositoryCardLoading() {
	return (
		<div className="flex flex-col gap-[9px]">
			<div className="flex items-center gap-2">
				<Skeleton className="w-24 h-[21px]" />
				<span className="font-normal text-lg"> / </span>
				<Skeleton className="w-60 h-[21px]" />
			</div>

			<Skeleton className="w-60 h-[21px]" />

			<div className="flex items-center gap-8">
				<Skeleton className="w-24 h-[21px]" />

				<div className="flex items-center gap-2">
					<span className="flex items-center gap-2">
						<Star fill="#000" /> <Skeleton className="w-3 h-[21px]" />
					</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="flex items-center gap-2">
						<GitFork />
						<Skeleton className="w-3 h-[21px]" />
					</span>
				</div>
			</div>
		</div>
	);
}
