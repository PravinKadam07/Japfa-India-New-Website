import React from 'react';

interface SampleArrowProps {
	className?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	align: 'right' | 'left';
	customPosition?: string;
	customImageSize?: string;
}

const PrevArrow = (props: SampleArrowProps) => {
	const left_arrow_orange_circle = `${process.env.PUBLIC_URL}/assets/img/icons/left-arrow-orange-circle.svg`;

	return (
		<div
			className={`absolute z-10 ${props.customPosition && props.customPosition} ${
				props.align === 'left'
					? '-bottom-16 left-3 pb-10 md:-bottom-32'
					: '-bottom-14 right-14 pb-10  md:-bottom-32 md:right-20'
			}`}
			onClick={props.onClick}
		>
			<img
				src={left_arrow_orange_circle}
				className="h-[32px] w-[32px] cursor-pointer md:h-[45px] md:w-[45px]"
				alt="left_arrow_orange_circle"
			/>
		</div>
	);
};

export default PrevArrow;
