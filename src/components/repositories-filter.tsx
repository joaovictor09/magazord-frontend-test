import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function RepositoriesFilter() {
	return (
		<div className="mt-[49px]">
			<Input
				placeholder="Search Here"
				icon={<Search className="text-primary-light" />}
			/>
		</div>
	);
}
