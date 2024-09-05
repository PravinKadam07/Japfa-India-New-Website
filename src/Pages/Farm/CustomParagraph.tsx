import React from 'react';
interface CustomParagraphProps {
	text: string;
	classes?: string;
}
const CustomParagraph = ({ text, classes }: CustomParagraphProps) => {
	const contentSplit = text.split('/n');
	const boldRegex = /<b>(.*?)<\/b>/g;
	const gradientRegex = /<gradient>(.*?)<\/gradient>/g;

	const renderText = (text: string) => {
		const parts = text.split(gradientRegex).flatMap((part, index) => {
			if (index % 2 === 1) {
				return <span key={`gradient-${index}`} className="textClipGradientDark font-bold">{part}</span>;
			} else {
				return part.split(boldRegex).map((subpart, subindex) => 
					subindex % 2 === 1 ? (
						<span key={`bold-${subindex}`} style={{ fontWeight: 'bold' }}>
							{subpart}
						</span>
					) : (
						subpart
					)
				);
			}
		});
		return parts;
	};

	return (
		<div className={`${classes ? classes : ''}`}>
			{contentSplit.map((item, index) => (
				<div key={index} className={`${index !== 0 ? 'mt-6' : ''}`}>
					{renderText(item)}
				</div>
			))}
		</div>
	);
};

export default CustomParagraph;
