import React from 'react';

interface ContactDetailsProps {
	iconSrc: string;
	title: string;
	description: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
	iconSrc,
	title,
	description,
}) => {
	return (
		<div className="flex flex-col gap-1 sm:gap-4">
			{/* row 1 */}
			<div className="flex gap-3">
				<img src={iconSrc} alt="" />
				<h3 className="text-2xl font-extrabold leading-[30px] text-white">
					{title}
				</h3>
			</div>
			{/* row 2 */}
			<p className="max-w-[330px] text-xl leading-8 text-white">
				{description}
			</p>
		</div>
	);
};

export default ContactDetails;
