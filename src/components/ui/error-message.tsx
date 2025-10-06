import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorMessageProps {
	title?: string;
	description?: string;
	onRetry?: () => void;
}

export function ErrorMessage({
	title,
	description,
	onRetry,
}: ErrorMessageProps) {
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
			<AlertCircle className="w-12 h-12 text-red-500" />
			<div className="flex flex-col gap-2">
				<h3 className="text-lg font-semibold text-primary">{title}</h3>
				<p className="text-sm text-primary-light max-w-md">{description}</p>
			</div>
			{onRetry && (
				<button
					onClick={onRetry}
					className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
					type="button"
				>
					<RefreshCw className="w-4 h-4" />
					Try Again
				</button>
			)}
		</div>
	);
}
