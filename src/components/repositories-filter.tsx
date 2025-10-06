import { Search } from "lucide-react";
import { LanguageSelect } from "./language-select";
import { TypeSelect } from "./type-select";
import { Input } from "./ui/input";

export function RepositoriesFilter() {
	return (
		<div className="mt-[49px] flex items-center gap-4 justify-between w-full">
			<Input
				placeholder="Search Here"
				icon={<Search className="text-primary-light" />}
			/>
			<div className="flex items-center gap-4">
				<TypeSelect />
				<LanguageSelect />
			</div>
		</div>
	);
}
