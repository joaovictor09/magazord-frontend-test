import { useFiltersStorage } from "../storage/filters-storage";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

const languageOptions = [
	{ value: "all", label: "All" },
	{ value: "java", label: "Java" },
	{ value: "typescript", label: "TypeScript" },
	{ value: "html", label: "HTML" },
	{ value: "css", label: "CSS" },
];

export function LanguageSelect() {
	const { filters, setFilters } = useFiltersStorage();

	return (
		<Select
			value={filters.language}
			onValueChange={(value) => setFilters({ language: value })}
		>
			<SelectTrigger>
				<SelectValue placeholder="Language">
					{filters.language === "all"
						? "Language"
						: languageOptions.find((opt) => opt.value === filters.language)
								?.label}
				</SelectValue>
			</SelectTrigger>
			<SelectContent>
				{languageOptions.map((option) => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
