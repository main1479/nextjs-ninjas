import Head from 'next/head';
export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	const paths = data.map((ninja) => {
		return {
			params: { id: ninja.id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await res.json();

	return {
		props: { ninja: data },
	};
};

export default function NinjaDetails({ ninja }) {
	return (
		<div className="container">
			<Head>
				<title>NinjaList | {ninja.name}</title>
			</Head>
			<h1 className="heading__1 text-center">{ninja.name}</h1>
			<h3 className="text-2xl font-semibold text-gray-600 text-center mb-5">
				Email: <a href={`mailto:${ninja.email}`}>{ninja.email}</a>
			</h3>
			<h3 className="text-2xl font-semibold text-gray-600 text-center mb-5">
				Website: {ninja.website}
			</h3>
			<h3 className="text-2xl font-semibold text-gray-600 text-center mb-5">
				City: {ninja.address.city}
			</h3>
		</div>
	);
}
