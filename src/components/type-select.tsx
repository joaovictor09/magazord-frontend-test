import { useState } from "react";
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
	const [value, setValue] = useState("all");

	return (
		<Select value={value} onValueChange={setValue}>
			<SelectTrigger>
				<SelectValue placeholder="Type">
					{value === "all"
						? "Type"
						: typeOptions.find((opt) => opt.value === value)?.label}
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
