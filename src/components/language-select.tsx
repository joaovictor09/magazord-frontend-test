import { useState } from "react";
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
	const [value, setValue] = useState("all");

	return (
		<Select value={value} onValueChange={setValue}>
			<SelectTrigger>
				<SelectValue placeholder="Language">
					{value === "all"
						? "Language"
						: languageOptions.find((opt) => opt.value === value)?.label}
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
