import { Skeleton } from "./ui/skeleton";

export function ProfileLoading() {
	return (
		<div className="flex flex-col gap-6 w-max items-center">
			<div className="relative w-max">
				<Skeleton className="w-[150px] h-[150px] rounded-full" />
				<Skeleton className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow" />
			</div>

			<div className="w-[251px] flex flex-col gap-1 text-center items-center">
				<Skeleton className="w-[251px] h-[32px]" />
				<Skeleton className="w-[164px] h-[24px]" />
			</div>

			<div className="flex flex-col gap-4 w-full">
				<div className="flex items-center gap-[10px]">
					<Skeleton className="size-4" />
					<Skeleton className="w-full h-[24px]" />
				</div>
				<div className="flex items-center gap-[10px]">
					<Skeleton className="size-4" />
					<Skeleton className="w-full h-[24px]" />
				</div>
			</div>
		</div>
	);
}
