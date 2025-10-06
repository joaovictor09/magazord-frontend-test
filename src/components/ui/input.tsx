interface InputProps {
	placeholder: string;
	icon: React.ReactNode;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, icon, value, onChange }: InputProps) {
	return (
		<div className="border-b border-[#F4F4F4] space-x-4 flex items-center max-w-[444px] w-full">
			{icon}
			<input
				type="text"
				placeholder={placeholder}
				className="outline-none w-full text-lg px-0 py-1.5"
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
