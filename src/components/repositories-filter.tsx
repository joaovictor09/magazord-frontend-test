import { Search } from "lucide-react";
import { useFiltersStorage } from "../storage/filters-storage";
import { LanguageSelect } from "./language-select";
import { TypeSelect } from "./type-select";
import { Input } from "./ui/input";

export function RepositoriesFilter() {
	const { filters, setFilters } = useFiltersStorage();

	return (
		<div className="mt-[49px] flex items-center gap-4 justify-between w-full">
			<Input
				placeholder="Search Here"
				value={filters.search}
				onChange={(e) => setFilters({ search: e.target.value })}
				icon={<Search className="text-primary-light" />}
			/>
			<div className="flex items-center gap-4">
				<TypeSelect />
				<LanguageSelect />
			</div>
		</div>
	);
}
