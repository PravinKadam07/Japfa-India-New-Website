import React from 'react';
interface AchievementsCardProps {
	title: string;
	imageSrc: string;
}

const AchievementsCard = ({ title, imageSrc }: AchievementsCardProps) => {
	return (
		<div className="flex flex-col gap-4">
			<img src={imageSrc} alt={title} className="w-full" />
			<h3 className="max-w-[416px] text-2xl max-md:max-w-[100%] font-extrabold text-[#1E140F]">
				{title}
			</h3>
		</div>
	);
};

export default AchievementsCard;
