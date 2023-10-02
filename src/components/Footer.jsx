import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-[#120B48]'>
			<div className='max-w-6xl mx-auto px-4 md:px-10 text-white py-20'>
				{/* container */}
				<div className='flex flex-wrap justify-between'>
					{/* logo */}
					<div className='w-[7rem]'>
						<img className='w-full' src='/logo-white.png' alt='' />
					</div>

					{/* menu */}
					<div>
						<h1 className=' font-sora font-semibold pb-4'>Menu</h1>
						<ul className='grid gap-y-3 font-work'>
							<li>
								<Link href={'/'}>Home</Link>
							</li>
							<li>
								<Link href={'/'}>Converter</Link>
							</li>
							<li>
								<Link href={'/'}>How it Works</Link>
							</li>
						</ul>
					</div>

					{/* about */}
					<div>
						<h1 className=' font-sora font-semibold pb-4'>About us</h1>
						<ul className='grid gap-y-3 font-work'>
							<li>
								<Link href={'/'}>About</Link>
							</li>
							<li>
								<Link href={'/'}>Contact Us</Link>
							</li>
							<li>
								<Link href={'/'}>Privacy Policy</Link>
							</li>
						</ul>
					</div>

					{/* Screen Record */}
					<div>
						<h1 className=' font-sora font-semibold pb-4'>Screen Record</h1>
						<ul className='grid gap-y-3 font-work'>
							<li>
								<Link href={'/'}>Browser Window</Link>
							</li>
							<li>
								<Link href={'/'}>Desktop</Link>
							</li>
							<li>
								<Link href={'/'}>Application</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
