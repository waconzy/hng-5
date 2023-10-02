import dynamic from 'next/dynamic';
import React from 'react';
// import  from '/Recording';
const Recording = dynamic(() => import('./Recording'), {
	ssr: false,
});

const Recorder = () => {
	return (
		<div>
			<Recording />
		</div>
	);
};

export default Recorder;
