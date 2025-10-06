import { useFiltersStorage } from "../storage/filters-storage";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

const typeOptions = [
	{ value: "all", label: "All" },
	{ value: "sources", label: "Sources" },
	{ value: "forks", label: "Forks" },
	{ value: "archived", label: "Archived" },
	{ value: "mirrors", label: "Mirrors" },
];

export function TypeSelect() {
	const { filters, setFilters } = useFiltersStorage();

	return (
		<Select
			value={filters.type}
			onValueChange={(value) => setFilters({ type: value })}
		>
			<SelectTrigger>
				<SelectValue placeholder="Type">
					{filters.type === "all"
						? "Type"
						: typeOptions.find((opt) => opt.value === filters.type)?.label}
				</SelectValue>
			</SelectTrigger>
			<SelectContent>
				{typeOptions.map((option) => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
