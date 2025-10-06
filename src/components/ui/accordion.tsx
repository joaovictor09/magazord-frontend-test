import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

function Accordion({
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
	return <AccordionPrimitive.Root {...props} />;
}

function AccordionItem({
	className,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
	return <AccordionPrimitive.Item className={`${className}`} {...props} />;
}

function AccordionTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				className={`text-profile-link flex flex-col items-center justify-center gap-0.5 cursor-pointer outline-none ${className}`}
				{...props}
			>
				{children}
				<ChevronDownIcon className="text-profile-link pointer-events-none size-4 translate-y-0.5 transition-transform duration-200 data-[state=open]:rotate-180" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
	return (
		<AccordionPrimitive.Content
			className="w-full flex rounded-lg bg-[#F8F8F8] mt-2"
			{...props}
		>
			<div className={`p-4 ${className}`}>{children}</div>
		</AccordionPrimitive.Content>
	);
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
