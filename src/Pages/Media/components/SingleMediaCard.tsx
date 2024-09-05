import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { modifyPath } from '../../../utils/fetchFromApi';
import { fadeLeft } from '../../../utils/scrollAnimations';

interface SingleMediaCardProps {
	data: {
		id: number;
		title: string;
		date: string;
		imgSrc: string;
		articleLink: string;
	};
}

const SingleMediaCard = ({
	data: { id, title, date, imgSrc, articleLink },
}: SingleMediaCardProps) => {
	const right_arrow_orange_circle = `${process.env.PUBLIC_URL}/assets/img/icons/right-arrow-orange-circle.svg`;
	// const imageUrl = imgSrc || image;
	const cardData = {
		title: title,
		date: date,
		image: imgSrc,
	};
	// if (cardData) {
	// 	console.log('whatt', cardData.image);
	// }
	// useEffect(() => {
	// 	console.log(`single media card`);
	// });
	const navigate = useNavigate();
	const handleArticleNavigation = () => {
		if (articleLink) {
			window.open(articleLink, '_blank');
		} else {
			navigate(`/media/article/${id}`);
			window.scrollTo(0, 0);
		}
	};
	return (
		<div
			onClick={handleArticleNavigation}
			className="col-span-12 flex cursor-pointer flex-col justify-between transition-all max-md:mx-auto max-md:mb-12 max-md:max-w-[416px] sm:col-span-6  lg:col-span-4"
		>
			<motion.div
				className="mb-7.5 flex flex-col last:mb-0"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				<div className="max-w-[416px]">
					{cardData.image ? (
						<img
							src={`${modifyPath(cardData.image)}`}
							alt="cardImg"
							className="aspect-video w-full object-cover"
						/>
					) : (
						<div className="aspect-video w-full bg-red-700"></div>
					)}
				</div>
				<div className="max-h-[416px]">
					<h1 className="border-b-1 border-[##DDDDDD] py-4 text-[20px] font-extrabold leading-8">
						{cardData.title}
					</h1>
				</div>
			</motion.div>
			<motion.div
				className="flex flex-col"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				<div className="h-[1px] w-full bg-[#DEDEDE]"></div>
				<div className="flex items-center justify-between pt-5 text-[16px] font-bold">
					<p className="text-[#EC691F]">{cardData.date}</p>
					<div className="flex items-center justify-between gap-3 text-xl font-bold">
						View article
						<img
							src={right_arrow_orange_circle}
							alt="right_arrow_orange_circle"
							className="h-8 w-8 cursor-pointer"
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default SingleMediaCard;
