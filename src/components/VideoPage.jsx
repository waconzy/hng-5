'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { FiSearch, FiLink2 } from 'react-icons/fi';
import { PiDotsThreeOutlineVerticalLight } from 'react-icons/pi';
import { useModal } from './ModalContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Footer from './Footer';

const VideoPage = () => {
	const { openAddTaskModal } = useModal();

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		// Fetch videos when the component mounts
		const fetchVideos = async () => {
			try {
				const response = await axios.get(
					'https://hutty.pythonanywhere.com/videos'
				);

				if (response.status === 200) {
					// Update the videos state with the fetched data
					setVideos(response.data);
				} else {
					console.error('Failed to retrieve videos:', response.data);
				}
			} catch (error) {
				console.error('Error retrieving videos:', error);
			}
		};

		fetchVideos();
	}, []);

	const router = useRouter();

	const handleClick = (videoId) => {
		// Use the router to navigate to the video page
		router.push(`/video/${videoId}`);
	};

	// const handleExtensionClick = () => {
	// 	if (typeof chrome !== 'undefined' && chrome.runtime) {
	// 		// Send a message to the extension
	// 		chrome.runtime.sendMessage({ type: 'open-extension' });
	// 		toast.success('Connection Secured');
	// 	} else {
	// 		// Handle the case when the extension is not available (e.g., in a non-Chrome browser)
	// 		console.error('Chrome extension not available');
	// 		toast.error('Chrome Extenstion not available');
	// 	}
	// };

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

					{/* profile */}
					<div className='flex items-center gap-2'>
						{/* image */}
						<div className='w-[2rem]'>
							<img className='w-full h-full' src='/profile-circle.png' alt='' />
						</div>

						<div className='flex items-center gap-4'>
							<Link className='font-work text-[#141414]' href={'/'}>
								John Mark
							</Link>

							<SlArrowDown />
						</div>
					</div>
				</div>
			</nav>
			{/* welcome */}
			<div className='bg-white border-b border-b-[#ADADAD] pb-4'>
				<div className='py-5 max-w-6xl mx-auto px-4 md:px-10'>
					<div className='flex justify-between items-center'>
						{/* text */}
						<div>
							<h1 className='font-sora font-bold text-2xl text-[#141414]'>
								Hello, John Mark
							</h1>
							<p className='text-[#141414]/70 font-work text-lg'>
								Here are your recorded videos
							</p>
						</div>

						{/* search */}
						<div className='w-[35%]'>
							<div className='flex items-center gap-2 text-[#C3C3C3] border border-[#E7E7ED] rounded-lg bg-[#B6B3C6]/[14%] py-4 px-5 text-[14px]'>
								{/* icon */}
								<FiSearch />
								<input
									className='w-full bg-transparent outline-none placeholder:text-[#C3C3C3] placeholder:font-work'
									type='text'
									placeholder='Search for a particular video'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* new video */}
			{/* <div className='max-w-6xl mx-auto px-4 md:px-10 grid justify-end py-5'>
				<div
					className='bg-[#120B48] py-3 cursor-pointer px-8 text-white rounded-lg w-fit'
					onClick={openAddTaskModal}>
					<p>New Video</p>
				</div>
			</div> */}
			{/* videos */}
			<div className='max-w-6xl mx-auto px-4 md:px-10 py-10'>
				<div>
					<h1 className='font-work text-lg font-medium text-[#141414]/80 pb-4'>
						Recent Files
					</h1>

					{/* videos grid*/}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
						{/* container */}

						{/* {videos.map((video) => ( */}
						<div
							// key={video.id}
							className='border border-[#B6B3C6]/60 rounded-2xl p-4 bg-[#FBFBFB]/50'>
							{/* image/video */}
							<div
								className='overflow-hidden rounded-lg relative cursor-pointer'
								onClick={() => handleClick(video.id)}>
								<img src='/video.png' alt='' />
								{/* <video
										src={video.video}
										className='w-full h-full'
										autoPlay
										muted></video> */}
								{/* <div className='absolute right-4 bottom-4'>
										<p>00:34</p>
									</div> */}
							</div>

							{/* text */}
							<div className='flex justify-between items-baseline pt-4'>
								{/* text */}
								<div>
									<h1 className='font-work font-medium text-xl text-[#141414]'>
										How to create Facebook Ad listing
									</h1>
									<p className=' font-work text-[#B6B3C6]'>
										SEPTEMBER 23, 2023
									</p>
								</div>

								{/* icons */}
								<div className='flex gap-2 items-center text-2xl'>
									<FiLink2 />
									<PiDotsThreeOutlineVerticalLight />
								</div>
							</div>
						</div>
						<div
							// key={video.id}
							className='border border-[#B6B3C6]/60 rounded-2xl p-4 bg-[#FBFBFB]/50'>
							{/* image/video */}
							<div
								className='overflow-hidden rounded-lg relative cursor-pointer'
								onClick={() => handleClick(video.id)}>
								<img src='/video.png' alt='' />
								{/* <video
										src={video.video}
										className='w-full h-full'
										autoPlay
										muted></video> */}
								{/* <div className='absolute right-4 bottom-4'>
										<p>00:34</p>
									</div> */}
							</div>

							{/* text */}
							<div className='flex justify-between items-baseline pt-4'>
								{/* text */}
								<div>
									<h1 className='font-work font-medium text-xl text-[#141414]'>
										How to create Facebook Ad listing
									</h1>
									<p className=' font-work text-[#B6B3C6]'>
										SEPTEMBER 23, 2023
									</p>
								</div>

								{/* icons */}
								<div className='flex gap-2 items-center text-2xl'>
									<FiLink2 />
									<PiDotsThreeOutlineVerticalLight />
								</div>
							</div>
						</div>
						<div
							// key={video.id}
							className='border border-[#B6B3C6]/60 rounded-2xl p-4 bg-[#FBFBFB]/50'>
							{/* image/video */}
							<div
								className='overflow-hidden rounded-lg relative cursor-pointer'
								onClick={() => handleClick(video.id)}>
								<img src='/video.png' alt='' />
								{/* <video
										src={video.video}
										className='w-full h-full'
										autoPlay
										muted></video> */}
								{/* <div className='absolute right-4 bottom-4'>
										<p>00:34</p>
									</div> */}
							</div>

							{/* text */}
							<div className='flex justify-between items-baseline pt-4'>
								{/* text */}
								<div>
									<h1 className='font-work font-medium text-xl text-[#141414]'>
										How to create Facebook Ad listing
									</h1>
									<p className=' font-work text-[#B6B3C6]'>
										SEPTEMBER 23, 2023
									</p>
								</div>

								{/* icons */}
								<div className='flex gap-2 items-center text-2xl'>
									<FiLink2 />
									<PiDotsThreeOutlineVerticalLight />
								</div>
							</div>
						</div>
						<div
							// key={video.id}
							className='border border-[#B6B3C6]/60 rounded-2xl p-4 bg-[#FBFBFB]/50'>
							{/* image/video */}
							<div
								className='overflow-hidden rounded-lg relative cursor-pointer'
								onClick={() => handleClick(video.id)}>
								<img src='/video.png' alt='' />
								{/* <video
										src={video.video}
										className='w-full h-full'
										autoPlay
										muted></video> */}
								{/* <div className='absolute right-4 bottom-4'>
										<p>00:34</p>
									</div> */}
							</div>

							{/* text */}
							<div className='flex justify-between items-baseline pt-4'>
								{/* text */}
								<div>
									<h1 className='font-work font-medium text-xl text-[#141414]'>
										How to create Facebook Ad listing
									</h1>
									<p className=' font-work text-[#B6B3C6]'>
										SEPTEMBER 23, 2023
									</p>
								</div>

								{/* icons */}
								<div className='flex gap-2 items-center text-2xl'>
									<FiLink2 />
									<PiDotsThreeOutlineVerticalLight />
								</div>
							</div>
						</div>
						{/* ))} */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default VideoPage;
