import React from 'react';

interface SampleArrowProps {
	className?: string;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	align: 'right' | 'left';
	customPosition?: string;
	customImageSize?: string;
}

const NextArrow = (props: SampleArrowProps) => {
	const { onClick, align } = props;
	const right_arrow_orange_circle = `${process.env.PUBLIC_URL}/assets/img/icons/right-arrow-orange-circle.svg`;

	return (
		<div
			className={`absolute ${
				align === 'left'
					? '-bottom-16 left-20 pb-10 md:-bottom-32'
					: '-bottom-14 right-3 pb-10 md:-bottom-32'
			} ${props.customPosition && props.customPosition}`}
			onClick={onClick}
		>
			<img
				src={right_arrow_orange_circle}
				className="h-[32px] w-[32px] cursor-pointer md:h-[45px] md:w-[45px]"
				alt="right_arrow_orange_circle"
			/>
		</div>
	);
};

export default NextArrow;
