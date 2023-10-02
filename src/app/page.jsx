import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='w-full'>
			<Header />
			<Features />
			<HowItWorks />
			<Footer />
		</div>
	);
}
