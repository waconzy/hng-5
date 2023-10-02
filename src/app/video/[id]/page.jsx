// pages/video/[id].js
'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const VideoPage = () => {
	const router = useRouter();
	const { id } = useParams();

	const [videoData, setVideoData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchVideoById = async () => {
			try {
				const response = await axios.get(
					`http://hutty.pythonanywhere.com/video/${id}`
				);

				if (response.status === 200) {
					setVideoData(response.data);
					setLoading(false);
				} else {
					console.error('Failed to fetch video:', response.data);
					setLoading(false);
				}
			} catch (error) {
				console.error('Error fetching video:', error);
				setLoading(false);
			}
		};

		if (id) {
			fetchVideoById();
		}
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!videoData) {
		return <div>Video not found.</div>;
	}

	return (
		<div>
			<h1>{videoData.data.title}</h1>
			<video
				controls
				src={videoData.data.secure_url}
				width='640'
				height='360'></video>
		</div>
	);
};

export default VideoPage;
