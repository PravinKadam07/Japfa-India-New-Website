import React from 'react';
import CustomParagraph from '../../Farm/CustomParagraph';

interface Props {
	data: {
		title: string;
		content: string;
		imageSrc: string;
	};
}
const JourneySectionCard: React.FC<Props> = ({
	data: { title, content, imageSrc },
}) => {
	return (
		<div className="flex w-full flex-col gap-[28px]  max-sm:mb-[60px] md:gap-[40px] xl:flex-row xl:items-center">
			<div className="">
				<div className="mb-5 w-fit bg-[#6A0600] px-3 py-2 text-[14px] font-bold text-white sm:hidden">
					{title}
				</div>
				<img
					src={imageSrc}
					alt="title"
					className="w-full rounded-[40px] object-cover xl:max-w-[360px]"
				/>
			</div>
			<div className="">
				<div className="mb-2 w-fit bg-[#6A0600] px-3 py-2 text-[14px] font-bold text-white max-sm:hidden">
					{title}
				</div>
				<div className="xl:max-w-[420px]">
					<CustomParagraph text={content} />
				</div>
			</div>
		</div>
	);
};

export default JourneySectionCard;
