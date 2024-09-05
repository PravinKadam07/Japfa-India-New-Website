import React from 'react';

interface AccordionContentTemplateProps {
	data: {
		imagePath: string;
		content: string[];
	};
}

const AccordionContentTemplate = ({
	data: { imagePath, content },
}: AccordionContentTemplateProps) => {
	return (
		<div className="my-10">
			<div className="flex flex-col justify-between gap-8 sm:flex-row md:gap-12 lg:gap-20 xl:gap-28 items-center">
				{/* image */}
				<div className="max-w-[332px] flex-grow">
					<img
						src={`${process.env.PUBLIC_URL}${imagePath}`}
						alt=""
						className="w-full max-w-[332px]"
					/>
				</div>
				<div className="custom-bullets flex max-w-[920px] flex-col">
					{/* <div className="mb-10 hidden h-1 w-[94px] bg-black lg:block"></div> */}
					<ul>
						{content.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AccordionContentTemplate;
