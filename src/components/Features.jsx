import React from 'react';

const Features = () => {
	return (
		<div className='bg-[#F4F6F8] py-10'>
			<div className='bg-white py-20'>
				<div className='max-w-6xl mx-auto px-4 md:px-10'>
					{/* header */}
					<div className='text-center pb-10'>
						<h1 className='text-[#141414] font-bold text-4xl'>Features</h1>
						<p className='font-work text-[#616163] text-xl pt-1.5'>
							Key Highlights of Our Extension
						</p>
					</div>

					{/* body */}
					<div className='py-5'>
						{/* container */}
						<div className='flex flex-col md:flex-row items-center gap-10'>
							{/* text */}
							<div className='w-full'>
								{/* text-1 */}
								<div className='flex gap-3 items-start'>
									{/* icon */}
									<div>
										<img src='/icon-2.png' alt='' />
									</div>
									<div>
										<h1 className='font-semibold text-2xl text-[#1B233D]'>
											Simple Screen Recording
										</h1>
										<p className='text-[#616163] font-work text-xl pt-1'>
											Effortless screen recording for everyone. Record with
											ease, no tech expertise required.
										</p>
									</div>
								</div>

								{/* text-2 */}
								<div className='flex gap-3 py-10'>
									{/* icon */}
									<div>
										<img src='/icon-1.png' alt='' />
									</div>
									<div>
										<h1 className='font-semibold text-2xl text-[#1B233D]'>
											Easy-to-Share URL
										</h1>
										<p className='text-[#616163] font-work text-xl pt-1'>
											Share your recordings instantly with a single link. No
											attachments, no downloads.
										</p>
									</div>
								</div>
								{/* text-3 */}
								<div className='flex gap-3'>
									{/* icon */}
									<div>
										<img src='/icon.png' alt='' />
									</div>
									<div>
										<h1 className='font-semibold text-2xl text-[#1B233D]'>
											Revisit Recordings
										</h1>
										<p className='text-[#616163] font-work text-xl pt-1'>
											Access and review your past content effortlessly. Your
											recordings, always at your fingertips.
										</p>
									</div>
								</div>
							</div>

							{/* image */}
							<div className='w-full'>
								<div className='overflow-hidden rounded-lg'>
									<img className='w-full h-full' src='/img-1.png' alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
