'use client';
import React, { useEffect, useRef, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { LiaTimesCircleSolid } from 'react-icons/lia';
import { SlScreenDesktop } from 'react-icons/sl';
import { LuCopy } from 'react-icons/lu';
import {
	HiOutlineVideoCamera,
	HiOutlinePause,
	HiOutlineStop,
	HiOutlineMicrophone,
	HiTrash,
} from 'react-icons/hi2';
import { RecordRTCPromisesHandler } from 'recordrtc';
import { useModal } from './ModalContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Recording = () => {
	const { isAddTaskModalOpen, closeAddTaskModal } = useModal();

	const [recorder, setRecorder] = useState(null);
	const [stream, setStream] = useState(null);
	const [screen, setScreen] = useState(null);
	const [videoBlob, setVideoBlob] = useState(null);
	const [isCameraOn, setIsCameraOn] = useState(false);
	const [isMicrophoneOn, setIsMicrophoneOn] = useState(false);
	const [recordedVideoURL, setRecordedVideoURL] = useState(null);
	const cameraDisplayRef = useRef(null);

	const uploadVideoToAPI = async (videoBlob) => {
		try {
			const formData = new FormData();
			formData.append('video', videoBlob, 'recorded-video.webm'); // Adjust the filename and file type as needed

			const response = await axios.post(
				'https://talented-pear-panda.cyclic.app/api/video/upload',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);

			if (response.status === 201) {
				// console.log('Video uploaded successfully:', response.data);
				toast.success('Video uploaded successfully');
				return response.data; // Return the response data if needed
			} else {
				// console.error('Failed to upload video:', response.data);
				toast.error('Failed to upload video');
				throw new Error('Failed to upload video');
			}
		} catch (error) {
			toast.error('Error uploading video');
			// console.error('Error uploading video:', error);
			throw error;
		}
	};

	const toggleCamera = () => {
		setIsCameraOn(!isCameraOn);
	};

	const toggleMicrophone = () => {
		setIsMicrophoneOn(!isMicrophoneOn);
	};

	const startRecording = async () => {
		const mediaDevices = navigator.mediaDevices;
		try {
			const newScreen = await mediaDevices.getDisplayMedia({
				video: isCameraOn,
				audio: isMicrophoneOn,
			});
			setScreen(newScreen);

			const recorder = new RecordRTCPromisesHandler([newScreen], {
				type: 'video',
				mimeType: 'video/webm',
			});

			await recorder.startRecording();
			setRecorder(recorder);
		} catch (error) {
			console.error('Error while starting recording:', error);
		}
	};

	const stopRecording = async () => {
		if (recorder) {
			try {
				await recorder.stopRecording();
				const blob = await recorder.getBlob();
				setVideoBlob(blob);

				// Upload the recorded video to the API
				await uploadVideoToAPI(blob);

				// Create a URL for the recorded video blob
				const videoURL = URL.createObjectURL(blob);
				setRecordedVideoURL(videoURL);
			} catch (error) {
				console.error('Error while stopping recording:', error);
			} finally {
				recorder.reset();
				setRecorder(null);
				setScreen(null);
			}
		}
	};

	useEffect(() => {
		const mediaDevices = navigator.mediaDevices;

		const initializeCamera = async () => {
			try {
				if (isAddTaskModalOpen) {
					const newStream = await mediaDevices.getUserMedia({
						video: isCameraOn,
						audio: isMicrophoneOn,
					});
					setStream(newStream);
				} else {
					// Close the camera stream if the modal is closed
					if (stream) {
						stream.getTracks().forEach((track) => track.stop());
					}
					setStream(null);
				}
			} catch (error) {
				console.error('Error accessing camera:', error);
			}
		};

		initializeCamera();
	}, [isCameraOn, isMicrophoneOn, isAddTaskModalOpen, stream]);

	useEffect(() => {
		if (stream && cameraDisplayRef.current) {
			cameraDisplayRef.current.srcObject = stream;
		}
	}, [stream]);

	useEffect(() => {
		// Ensure camera state matches UI toggle state when modal is opened
		if (isAddTaskModalOpen) {
			// Access camera devices and update isCameraOn
			navigator.mediaDevices
				.getUserMedia({ video: true })
				.then(() => setIsCameraOn(true))
				.catch(() => setIsCameraOn(false)); // Failed to access camera
		}
	}, [isAddTaskModalOpen]);

	// Stop camera and microphone when modal is closed
	useEffect(() => {
		if (!isAddTaskModalOpen && stream) {
			stream.getTracks().forEach((track) => {
				track.stop();
			});
			setStream(null);
		}
	}, [isAddTaskModalOpen, stream]);

	return (
		<div
			id='myModal'
			className={`modal ${isAddTaskModalOpen ? 'visible' : 'hidden'}`}>
			<div className='fixed top-0 h-screen w-full z-[100]'>
				{/* start Recording */}
				<div className='grid justify-end pt-7 pr-7'>
					<div className='bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[18rem] rounded-xl p-5'>
						{/* logo nav */}
						<div className='flex justify-between items-center'>
							{/* logo */}
							<div className='w-[7rem]'>
								<img className='w-full' src='/logo.png' alt='' />
							</div>

							{/* icons */}
							<div className='flex items-center gap-2'>
								<div className='text-[#120B48]'>
									<IoSettingsOutline />
								</div>
								<div
									className='text-[#B6B3C6] cursor-pointer'
									onClick={closeAddTaskModal}>
									<LiaTimesCircleSolid />
								</div>
							</div>
						</div>

						{/* text */}
						<p className=' text-[#413C6D] font-work text-[14px] pt-4'>
							This extension helps you record and share help videos with ease.
						</p>

						{/* screen */}
						<div className='flex justify-center items-center gap-4 pt-8'>
							{/* full screen */}
							<div className=' text-center grid items-center justify-center'>
								<div className='grid items-center justify-center text-[#928FAB] text-4xl'>
									<SlScreenDesktop />
								</div>
								<p className='font-work text-[#928FAB] font-medium text-[14px]'>
									Full screen
								</p>
							</div>

							{/* current tab */}
							<div className=' text-center grid items-center justify-center'>
								<div className='grid items-center justify-center text-4xl text-[#120B48] '>
									<LuCopy />
								</div>
								<p className='font-work text-[#120B48] font-medium text-[14px]'>
									Current Tab
								</p>
							</div>
						</div>

						{/* recording */}
						<div>
							{/* camera */}
							<div className='flex items-center justify-between border border-[#100A42] rounded-lg py-2 px-3 my-4'>
								{/* icon-text */}
								<div className='flex items-center font-work font-medium text-[#100A42] text-2xl gap-2'>
									<HiOutlineVideoCamera />
									<p className='text-[14px]'>Camera</p>
								</div>

								{/* toggle */}
								<div>
									<label className='relative inline-flex items-center cursor-pointer'>
										<input
											type='checkbox'
											value=''
											className='sr-only peer'
											// checked
											checked={isCameraOn}
											onChange={toggleCamera}
										/>
										<div className="w-9 h-5 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#120B48]"></div>
									</label>
								</div>
							</div>
							{/* audio */}
							<div className='flex items-center justify-between border border-[#100A42] rounded-lg py-2 px-3 my-4'>
								{/* icon-text */}
								<div className='flex items-center font-work font-medium text-[#100A42] text-2xl gap-2'>
									<HiOutlineMicrophone />
									<p className='text-[14px]'>Audio</p>
								</div>

								{/* toggle */}
								<div>
									<label className='relative inline-flex items-center cursor-pointer'>
										<input
											type='checkbox'
											value=''
											className='sr-only peer'
											// checked
											checked={isMicrophoneOn}
											onChange={toggleMicrophone}
										/>
										<div className="w-9 h-5 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#120B48]"></div>
									</label>
								</div>
							</div>
						</div>

						{/* button */}
						<div
							className='grid items-center justify-center text-white border border-[#100A42] bg-[#100A42] rounded-lg py-2 px-3 my-4 cursor-pointer'
							onClick={startRecording}>
							<p className='font-medium text-[16px] font'>Start Recording</p>
						</div>
					</div>
				</div>

				<div className='absolute bottom-10 left-10'>
					{/* div */}
					<div className='flex gap-10 items-center'>
						{/* video or image */}
						<div className='overflow-hidden w-[7rem] aspect-square rounded-full'>
							{stream && isCameraOn ? (
								<video
									ref={cameraDisplayRef}
									autoPlay
									playsInline
									className='w-full h-full object-cover'
								/>
							) : (
								<img
									className='w-full h-full object-cover'
									src='/img-4.png'
									alt=''
								/>
							)}
						</div>

						{/* record button */}
						<div className='border-4 border-2-[#e4e4e4] bg-[#141414] h-fit py-2.5 px-6 rounded-full'>
							<div className='flex gap-4'>
								{/* time */}
								<div className='flex text-white items-center border-r gap-1 border-white pr-4'>
									<p>00:03:45</p>
									<div>
										<div className='w-4 aspect-square rounded-full bg-[#C00404] border-4 border-[#341111] '></div>
									</div>
								</div>

								{/* click actions */}
								<div className='flex items-center gap-4 text-white'>
									<div className='grid items-center justify-center'>
										<div className='grid items-center justify-center'>
											<div className='w-8 h-8 rounded-full bg-white text-black grid items-center justify-center font-bold text-lg'>
												<HiOutlinePause />
											</div>
										</div>
										<p className='font-work text-[12px] font-medium text-center'>
											Pause
										</p>
									</div>

									{/* stop */}
									<div
										className='grid items-center justify-center cursor-pointer'
										onClick={stopRecording}>
										<div className='grid items-center justify-center'>
											<div className='w-8 h-8 rounded-full bg-white text-black grid items-center justify-center font-bold text-lg'>
												<HiOutlineStop />
											</div>
										</div>
										<p className='font-work text-[12px] font-medium text-center'>
											Stop
										</p>
									</div>

									{/* camera */}
									<div
										className='grid items-center justify-center cursor-pointer'
										onClick={toggleCamera}>
										<div className='grid items-center justify-center'>
											<div className='w-8 h-8 rounded-full bg-white text-black grid items-center justify-center font-bold text-lg'>
												<HiOutlineVideoCamera />
											</div>
										</div>
										<p className='font-work text-[12px] font-medium text-center'>
											Camera
										</p>
									</div>

									{/* audio */}
									<div
										className='grid items-center justify-center cursor-pointer'
										onClick={toggleMicrophone}>
										<div className='grid items-center justify-center'>
											<div className='w-8 h-8 rounded-full bg-white text-black grid items-center justify-center font-bold text-lg'>
												<HiOutlineMicrophone />
											</div>
										</div>
										<p className='font-work text-[12px] font-medium text-center'>
											Mic
										</p>
									</div>

									{/* delete */}
									<div className='grid items-center justify-center'>
										<div className='grid items-center justify-center'>
											<div className='  w-8 h-8 rounded-full bg-[#4B4B4B] text-[#BEBEBE] grid items-center justify-center font-bold text-lg'>
												<HiTrash />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ToastContainer />
			</div>
		</div>
	);
};

export default Recording;
