import Link from 'next/link';

export default function Login() {
	return (
		<div className='pt-10'>
			{/* nav */}
			<nav className='bg-white border-t border-t-[#ADADAD]'>
				{/* nav-container */}
				<div className='flex items-center justify-between py-10 max-w-6xl mx-auto px-4 md:px-10'>
					{/* logo */}
					<div className='w-[7rem]'>
						<img className='w-full' src='/logo.png' alt='' />
					</div>
				</div>
			</nav>

			<div>
				<form action=''>
					<div className=' text-center'>
						<h1 className=' font-bold text-[#141414] text-3xl'>
							Log in or Sign up
						</h1>
						<p className='text-[#434343] text-sm grid'>
							Join millions of others in sharing successful{' '}
							<span>moves on HelpMeOut.</span>
						</p>
					</div>

					<div>
						<div className=' text-[#141414] rounded-lg border'>
							<p>Continue with Google</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
