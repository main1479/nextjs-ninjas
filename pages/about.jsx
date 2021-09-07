import Head from 'next/head';
export default function about() {
	return (
		<div className="container">
			<Head>
				<title>NinjaList | About</title>
			</Head>
			<h1 className="heading__1">About Us</h1>
			<p className="p__text mb-2 mt-5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eveniet voluptate!
				Omnis assumenda hic minima magnam asperiores ullam adipisci. Deserunt suscipit, quisquam
				explicabo sint recusandae vel ducimus voluptatum alias qui voluptas. Minima ut amet odio.
			</p>
			<p className="p__text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eveniet voluptate!
				Omnis assumenda hic minima magnam asperiores ullam adipisci. Deserunt suscipit, quisquam
				explicabo sint recusandae vel ducimus voluptatum alias qui voluptas. Minima ut amet odio.
			</p>
		</div>
	);
}
