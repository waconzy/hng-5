import { ModalProvider } from '@/components/ModalContext';
import Recorder from '@/components/Recorder';
import VideoPage from '@/components/VideoPage';

export default function Video() {
	return (
		<div className='relative'>
			<ModalProvider>
				<VideoPage />
				<div className=''>
					<Recorder />
				</div>
			</ModalProvider>
		</div>
	);
}
