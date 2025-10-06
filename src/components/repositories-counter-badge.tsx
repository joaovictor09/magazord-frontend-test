interface RepositoriesCounterBadgeProps {
	count: number;
}

export function RepositoriesCounterBadge({
	count,
}: RepositoriesCounterBadgeProps) {
	return (
		<div className="bg-[#F8F8F8] text-primary-light border border-[#DBDBDB] rounded-full px-3 py-1 text-sm">
			{count}
		</div>
	);
}
