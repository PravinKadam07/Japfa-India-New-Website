import React from 'react';
import { modifyPath } from '../../../../utils/fetchFromApi';

// Define the interface for the component props
interface CareerCarouselActiveCardProps {
	data: {
		imageSrc: string;
		description: string;
		name: string;
		dept: string;
	};
}

const CareerCarouselActiveCard: React.FC<CareerCarouselActiveCardProps> = ({
	data,
}) => {
	// Destructure data object for easier access
	const { imageSrc, description, name, dept } = data;

	return (
		<div className="slide-parent relative mb-20 max-w-[802px] border border-solid border-[#ffffff1f] bg-[#2C1D16] p-5 max-lg:!w-full max-lg:!max-w-none">
			{/* quotes icon */}
			<div className="flex justify-between gap-10 max-md:flex-col">
				<div className="max-w-[180px] sm:max-w-[200px] lg:max-w-[240px] w-full">
					<img
						src={`${modifyPath(imageSrc)}`}
						alt=""
						className="w-full slide-image"
					/>
				</div>
				{/*  */}
				<div className="relative max-w-[400px] py-6 max-lg:w-full max-lg:max-w-none slide-text-block">
					<img
						src={`${process.env.PUBLIC_URL}/assets/img/quotes-icon.svg`}
						alt=""
						className="absolute -top-0 max-sm:-top-4 max-w-[50px]"
					/>
					<p className=" mb-6 pt-10 text-2xl text-white max-md:text-[16px]">
						{description}
					</p>
					<h3 className="text-2xl font-extrabold text-white">
						{name}
					</h3>
					<div className="text-base font-normal text-white">
						{dept}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareerCarouselActiveCard;
