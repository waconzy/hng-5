import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Header = () => {
	return (
		<header>
			{/* navbar */}
			<nav className='bg-white shadow-sm'>
				{/* nav-container */}
				<div className='flex items-center justify-between py-5 max-w-6xl mx-auto px-4 md:px-10'>
					{/* logo */}
					<div className='w-[7rem]'>
						<img className='w-full' src='/logo.png' alt='' />
					</div>

					{/* links */}
					<div className='flex items-center gap-5 font-work font-medium'>
						<div>
							<Link href={''}>Features</Link>
						</div>
						<div>
							<Link href={''}>How it Works</Link>
						</div>
					</div>

					{/* get started */}
					<div className=''>
						<Link
							className='font-sora font-semibold text-lg text-[#120B48]'
							href={'/videos'}>
							Get Started
						</Link>
					</div>
				</div>
			</nav>

			{/* hero */}
			<div className='max-w-6xl mx-auto px-4 md:px-10 py-[7rem]'>
				{/* container */}
				<div className='flex flex-col md:flex-row items-center gap-10'>
					{/* text */}
					<div className='w-full'>
						<div>
							<h1 className=' font-sora text-[#141414] font-bold text-6xl'>
								Show Them Don’t Just Tell
							</h1>
							<p className=' text-black/75 text-lg pt-4 pb-9'>
								Help your friends and loved ones by creating and sending videos
								on how to get things done on a website.
							</p>

							<div className=' bg-[#120B48] p-4 rounded-lg w-fit'>
								<Link
									className='font-work flex items-center gap-3 text-white'
									href={'/'}>
									Install HelpMeOut
									<HiOutlineArrowRight />
								</Link>
							</div>
						</div>
					</div>

					{/* images */}
					<div className='w-full flex gap-4 items-center relative'>
						{/* first image */}
						<div className='relative z-10 grid gap-y-4'>
							{/* image-1 */}
							<div className='overflow-hidden rounded-lg'>
								<img className='w-full h-full' src='/img-5.png' alt='' />
							</div>

							{/* image-2 */}
							<div className='overflow-hidden rounded-lg'>
								<img className='w-full h-full' src='/img-4.png' alt='' />
							</div>
						</div>

						{/* second image */}
						<div className='relative z-10'>
							{/* image */}
							<div className='overflow-hidden rounded-lg'>
								<img className='w-full h-full' src='/img-3.png' alt='' />
							</div>
						</div>

						{/* absolute-right */}
						<div className='w-[50%] absolute -right-10 -top-[3rem] overflow-hidden rounded-lg'>
							<img className='w-full h-full' src='/dot.png' alt='' />
						</div>

						{/* absolute-left */}
						<div className='w-[50%] -left-10 -bottom-[4.5rem] absolute overflow-hidden rounded-lg'>
							<img className='w-full h-full' src='/green-dot.png' alt='' />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
