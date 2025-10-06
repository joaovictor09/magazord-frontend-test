function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="skeleton"
			className={`bg-gray-200 animate-pulse rounded-full ${className}`}
			{...props}
		/>
	);
}

export { Skeleton };
