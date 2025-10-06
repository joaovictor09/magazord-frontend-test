export function Header() {
	return (
		<header className="w-full flex justify-center items-center bg-header-background h-[72px]">
			<div className="max-w-7xl w-full flex gap-[22px] items-center px-6">
				<img src="/github-logo.svg" alt="Github logo" className="h-[30px]" />
				<div className="text-2xl font-normal">/</div>
				<span className="font-light">Profile</span>
			</div>
		</header>
	);
}
