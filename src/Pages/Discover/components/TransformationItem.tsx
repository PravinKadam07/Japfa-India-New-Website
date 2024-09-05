import React from 'react';

interface TransformationItemProps {
	figure: string;
	description: string;
	figureFontSize?: string;
	descriptionFontSize?: string;
	useRedTheme?: boolean;
}
const TransformationItem = ({
	figure,
	description,
	figureFontSize,
	descriptionFontSize,
	useRedTheme,
}: TransformationItemProps) => {
	return (
		<div className="flex flex-col">
			<h3
				className={`${
					useRedTheme ? 'text-white' : 'textClipGradientDark'
				} text-5xl font-extrabold max-md:text-[40px] lg:text-7xl ${
					figureFontSize ? figureFontSize : ''
				}`}
			>
				{figure}
			</h3>
			<div
				className={`dividerGradientGray mb-4 mt-6 h-[1px] w-10/12 ${
					useRedTheme && 'dividerGradientWhite'
				}`}
			></div>
			<div
				className={`text-2xl max-md:text-[20px] lg:text-[32px] ${
					descriptionFontSize ? descriptionFontSize : ''
				} ${useRedTheme ? 'text-white' : ''}`}
			>
				{description}
			</div>
		</div>
	);
};

export default TransformationItem;
