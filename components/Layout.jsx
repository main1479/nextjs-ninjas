import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>NinjaList</title>
				<meta name="description" content="NEXTJS Ninjas" />
				<link rel="icon" href="/logo.png" />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
