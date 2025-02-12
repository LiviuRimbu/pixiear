import { FC } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { Button } from '@/components/ui/button';


interface InfoHeaderProps {
	imageSrc: string;
	btnText: string;
	imgText: string;
	navigationWay?: string
	className?: string;
}

const InfoHeader: FC<InfoHeaderProps> = ({ imageSrc, btnText, imgText, navigationWay,className }) => {
	const router = useRouter();
	const handleBack = () => {
		if (navigationWay){
		router.push(`/${navigationWay}`);}
		else {
			window.history.back();
		}
	};

	return (
		<div className={`absolute top-5  flex items-center justify-between w-[90%] ${className}`}>

			<Button onClick={handleBack} className="mr-[5vw]" variant="webar">
				{btnText}
			</Button>

			<div className="flex items-center">
				<span className="text-3xl font-bold text-violet font-herculanum text-[16px]">{imgText}</span>
				<Image
					src={imageSrc}
					className="ml-[1vh]"
					alt="cover book"
					width={60}
					height={60}
				/>
			</div>
		</div>
	);
};

export default InfoHeader;