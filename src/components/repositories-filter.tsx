import { Search } from "lucide-react";
import { useFiltersStorage } from "../storage/filters-storage";
import { LanguageSelect } from "./language-select";
import { TypeSelect } from "./type-select";
import { Input } from "./ui/input";

export function RepositoriesFilter() {
	const { filters, setFilters } = useFiltersStorage();

	return (
		<div className="mt-[49px] flex items-center gap-4 justify-between w-full">
			<div className="flex md:hidden px-2 py-3 bg-[#F8F8F8] gap-2 w-full items-center rounded-lg">
				<TypeSelect />
				<LanguageSelect />

				<Search className="text-profile-link ml-auto" />
			</div>

			<div className="hidden md:flex w-full">
				<Input
					placeholder="Search Here"
					value={filters.search}
					onChange={(e) => setFilters({ search: e.target.value })}
					icon={<Search className="text-primary-light" />}
				/>
				<div className="flex items-center gap-4 ml-auto">
					<TypeSelect />
					<LanguageSelect />
				</div>
			</div>
		</div>
	);
}
