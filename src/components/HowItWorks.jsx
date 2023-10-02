import React from 'react';

const HowItWorks = () => {
	return (
		<div className='w-full'>
			<div className='max-w-6xl px-4 md:px-10 mx-auto py-20'>
				<h1>How it works</h1>

				{/* body */}
				<div>
					{/* container */}
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
						{/* flex-1 */}
						<div className='w-full'>
							<div className='text-center'>
								{/* 1 */}
								<div className='grid items-center justify-center w-full'>
									<div className='bg-[#120B48] h-[3rem] w-[3rem] rounded-full grid items-center justify-center text-white font-bold text-2xl'>
										<p>1</p>
									</div>
								</div>

								{/* header */}
								<p className=' font-semibold text-2xl text-[#1B233D] pt-6 pb-3'>
									Record Screen
								</p>

								{/* text */}
								<p className='font-work text-xl text-[#616163] pb-5'>
									Click the "Start Recording" button in our extension. choose
									which part of your screen to capture and who you want to send
									it to.
								</p>

								{/* image */}
								<div className=''>
									<img className='w-full h-full' src='/img.png' alt='' />
								</div>
							</div>
						</div>

						{/* flex-2 */}
						<div className='w-full'>
							<div className='text-center'>
								{/* 2 */}
								<div className='grid items-center justify-center w-full'>
									<div className='bg-[#120B48] h-[3rem] w-[3rem] rounded-full grid items-center justify-center text-white font-bold text-2xl'>
										<p>2</p>
									</div>
								</div>

								{/* header */}
								<p className=' font-semibold text-2xl text-[#1B233D] pt-6 pb-3'>
									Share Your Recording
								</p>

								{/* text */}
								<p className='font-work text-xl text-[#616163] pb-5'>
									We generate a shareable link for your video. Simply send it to
									your audience via email or copy the link to send via any
									platform.
								</p>

								{/* image */}
								<div className=''>
									<img className='w-full h-full' src='/img.png' alt='' />
								</div>
							</div>
						</div>

						{/* flex-3 */}
						<div className='w-full'>
							<div className='text-center'>
								{/* 3 */}
								<div className='grid items-center justify-center w-full'>
									<div className='bg-[#120B48] h-[3rem] w-[3rem] rounded-full grid items-center justify-center text-white font-bold text-2xl'>
										<p>3</p>
									</div>
								</div>

								{/* header */}
								<p className=' font-semibold text-2xl text-[#1B233D] pt-6 pb-3'>
									Learn Effortlessly
								</p>

								{/* text */}
								<p className='font-work text-xl text-[#616163] pb-5'>
									Recipients can access your video effortlessly through the
									provided link, with our user-friendly interface suitable for
									everyone.
								</p>

								{/* image */}
								<div className=''>
									<img className='w-full h-full' src='/img.png' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
