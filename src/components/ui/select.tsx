import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import type * as React from "react";

function Select({
	...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
	return <SelectPrimitive.Root {...props} />;
}

function SelectTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
	return (
		<SelectPrimitive.Trigger
			className={`outline-none rounded-full h-10 bg-linear-to-r from-[#0056A6] to-[#0587FF] text-white flex items-center gap-[10px] justify-between pl-2 pr-6 py-[9.5px] ${className}`}
			{...props}
		>
			<SelectPrimitive.Icon asChild>
				<ChevronDown className="h-4 w-4" />
			</SelectPrimitive.Icon>
			{children}
		</SelectPrimitive.Trigger>
	);
}

function SelectContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				position="popper"
				className={`bg-white border border-[#F4F4F4] rounded-md shadow-lg p-1 w-64 ${className}`}
				{...props}
			>
				<SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	);
}

function SelectItem({
	className,
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
	return (
		<SelectPrimitive.Item
			className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100 rounded outline-none ${className}`}
			{...props}
		>
			<div className="flex items-center justify-center w-4 h-4">
				<input
					type="checkbox"
					className="w-4 h-4 rounded outline-none"
					readOnly
				/>
			</div>
			<SelectPrimitive.ItemIndicator className="absolute left-3 flex items-center justify-center">
				<input
					type="checkbox"
					className="w-4 h-4 border border-gray-300 rounded outline-none"
					checked
					readOnly
				/>
			</SelectPrimitive.ItemIndicator>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
}

const SelectValue = SelectPrimitive.Value;

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
