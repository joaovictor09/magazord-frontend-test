interface ProfileLinkProps {
	icon: React.ReactNode;
	link: string;
	label: string;
}

export function ProfileLink({ icon, link, label }: ProfileLinkProps) {
	return (
		<a href={link} className="text-profile-link flex items-center gap-[10px]">
			{icon} {label}
		</a>
	);
}
