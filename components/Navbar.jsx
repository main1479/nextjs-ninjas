import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
	return (
		<nav className="py-5 border-b-2 border-purple-100">
			<div className="container flex items-center justify-between">
				<Link href="/">
					<a>
						<Image src="/logo.png" width={100} height={77} objectFit="contain" alt="Ninjas" />
					</a>
				</Link>

				<div className="flex items-center justify-end space-x-8">
					<Link href="/">
						<a className="font-semibold transition-all hover:text-purple-700">Home</a>
					</Link>
					<Link href="/about">
						<a className="font-semibold transition-all hover:text-purple-700">About</a>
					</Link>
					<Link href="/ninjas">
						<a className="font-semibold transition-all hover:text-purple-700">Ninjas</a>
					</Link>
				</div>
			</div>
		</nav>
	);
}
