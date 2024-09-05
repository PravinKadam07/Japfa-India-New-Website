import { motion } from 'framer-motion';

import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import { useEffect, useRef, useState } from 'react';
import {
	extractYoutubeVideoId,
	fetchLeadershipVideo,
} from '../../../utils/fetchFromApi';
import { fadeRight } from '../../../utils/scrollAnimations';
import Thumbnail from '../../../assets/TanYongTumbnail.png';

const videoUrl = '/leadership-video.mp4';

type videoData = {
	thumbnailImage: string;
	videoSrc: string;
};
const FeatureVideoSection = () => {
	const [videoData, setVideoData] = useState<videoData>({
		thumbnailImage: '',
		videoSrc: '',
	});

	useEffect(() => {
		fetchLeadershipVideo()
			.then((data) => {
				setVideoData({
					thumbnailImage: Thumbnail,
					videoSrc: extractYoutubeVideoId(data[0].acf['video_url']),
				});
			})
			.catch((error) => console.error(error));
	}, []);
	return (
		<section className="mx-auto my-24 max-w-japfaGrid max-mediumScreen:px-14 max-sm:px-8 lg:my-[120px]">
			<div className=" grid grid-cols-12 items-center justify-between">
				{/* replace this image with video frame */}
				<div className="col-span-12 sm:col-span-6">
					<Plyr
						source={{
							type: 'video',
							sources: [
								{
									src: videoUrl,
								},
							],
							poster: videoData.thumbnailImage,
						}}
						options={{
							clickToPlay: true,
						}}
					/>
				</div>
				<div className="hidden sm:col-span-1 sm:block"></div>
				<div className="col-span-12 sm:col-span-5">
					<motion.div
						className="my-auto"
						variants={fadeRight}
						initial={'hidden'}
						whileInView={'visible'}
					>
						<p className=" text-[24px] lg:text-[32px]">
							In Conversation with{' '}
						</p>
						<p className="max-w-[448px] text-[28px] font-extrabold leading-[120%] lg:text-[40px] ">
							Mr. Tan Yong Nang: Shaping Our Journey Forward
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default FeatureVideoSection;
