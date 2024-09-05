import React, { useRef } from 'react';
import { modifyPath } from '../../../utils/fetchFromApi';

import Plyr from 'plyr-react';
interface SliderCardProps {
	data: {
		// id?:number,
		date?: string;
		thumbnail_image?: string;
		title?: string;
		video_url?: string;
	};
}

const SliderCard = ({
	data: { title, date, thumbnail_image, video_url },
}: SliderCardProps) => {
	const ref = useRef(null);

	return (
		<div className="relative">
			<p className="mb-4 text-[#EC691F]">{'January 12, 2023'}</p>
			<div className="aspect-[20/12] max-w-[566px]">
				{/* <img
					src={`${modifyPath(thumbnail_image ? thumbnail_image : '')}`}
					alt=""
					className="h-full w-full object-cover py-4"
				/> */}

				<Plyr
					source={{
						type: 'video',
						sources: [
							{
								src: video_url ?? '',
								provider: 'youtube',
							},
						],
						poster: thumbnail_image && thumbnail_image,
					}}
					options={{
						clickToPlay: true,
						autoplay: false,
						hideControls: true,
					}}
				/>
			</div>
			<h2 className="border-b-1 border-[#DDDDDD] py-4 text-2xl font-extrabold leading-8">
				{title}
			</h2>
		</div>
	);
};

export default SliderCard;
