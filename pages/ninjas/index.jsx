import Link from 'next/link';
export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: {
			ninjas: data,
		},
	};
};

export default function index({ ninjas }) {
	return (
		<div className="container">
			{ninjas?.map((ninja) => (
				<Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
					<a className=" border-l-8 border-white  relative w-full my-10 block py-5 px-10 text-xl font-semibold transition-all text-purple-500 bg-white shadow-lg hover:border-purple-500 rounded">
						{ninja.name}
					</a>
				</Link>
			))}
		</div>
	);
}
