import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
	title?: string;
	description?: string;
	icon?: React.ReactNode;
}

export function EmptyState({
	title = "No results found",
	description = "Try adjusting your filters",
	icon,
}: EmptyStateProps) {
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
			{icon || <PackageOpen className="w-16 h-16 text-primary-light" />}
			<div className="flex flex-col gap-2">
				<h3 className="text-xl font-semibold text-primary">{title}</h3>
				<p className="text-sm text-primary-light max-w-md">{description}</p>
			</div>
		</div>
	);
}
