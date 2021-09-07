import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<div>
			<Head>
				<title>NinjaList | Home</title>
			</Head>

			<div className="container">
				<h1 className="heading__1">Hello Ninjas</h1>
				<p className="p__text mb-3">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore doloribus corrupti
					quam eos, vitae ratione illum quis! Vero, at ipsam! Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Inventore doloribus corrupti quam eos, vitae ratione illum
					quis! Vero, at ipsam!
				</p>
				<p className="p__text mb-10">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore doloribus corrupti
					quam eos, vitae ratione illum quis! Vero, at ipsam! Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Inventore doloribus corrupti quam eos, vitae ratione illum
					quis! Vero, at ipsam!
				</p>
				<Link href="/ninjas">
					<a className="btn">View All Ninjas</a>
				</Link>
			</div>
		</div>
	);
}
