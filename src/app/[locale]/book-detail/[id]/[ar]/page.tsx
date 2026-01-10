'use client'
import React from 'react';
import Iframe from "@/components/iframe"
// import CheckCameraAccess from "@/components/camera-access-checking"

const IframeComponent: React.FC = () => {

	return (
		<div>
			<div className="flex flex-col items-center justify-center min-h-screen">
				{/*<CheckCameraAccess />*/}
				<Iframe />
			</div>
		</div>
	);
};

export default IframeComponent;
