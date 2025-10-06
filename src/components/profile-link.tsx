interface ProfileLinkProps {
	icon: React.ReactNode;
	link?: string;
	label: string;
}

export function ProfileLink({ icon, link, label }: ProfileLinkProps) {
	if (!link) {
		return (
			<div className="text-profile-link flex items-center gap-[10px]">
				{icon} {label}
			</div>
		);
	}
	return (
		<a
			href={link}
			target="_blank"
			className="text-profile-link flex items-center gap-[10px]"
		>
			{icon} {label}
		</a>
	);
}
