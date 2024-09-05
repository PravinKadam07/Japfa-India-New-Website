// Accordion.js
import React, { useState } from 'react';

type AccordionProps = {
	items: {
		title: string;
		content: React.ReactNode;
	}[];
};

const Accordion = ({ items }: AccordionProps) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const handleClick = (index: number) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<div>
			{items.map((item, index) => (
				<div key={index} className="mb-4">
					<div
						className={`flex cursor-pointer items-center justify-between gap-4 py-3 lg:py-8 ${
							index !== activeIndex ? 'border-b' : ''
						}`}
						onClick={() => handleClick(index)}
					>
						{/* accordion title */}
						<div className=" animate-fade text-xl font-extrabold leading-8 text-black lg:text-[32px] lg:leading-10">
							{item.title}
						</div>
						{index === activeIndex ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="2"
								viewBox="0 0 36 2"
								fill="none"
								style={{ minWidth: '36px' }}
							>
								<path
									d="M36 1C36 0.734784 35.9175 0.480429 35.7708 0.292892C35.624 0.105356 35.425 0 35.2174 0H0.782609C0.575048 0 0.375989 0.105356 0.229221 0.292892C0.0824533 0.480429 0 0.734784 0 1C0 1.26522 0.0824533 1.51957 0.229221 1.70711C0.375989 1.89464 0.575048 2 0.782609 2H35.2174C35.425 2 35.624 1.89464 35.7708 1.70711C35.9175 1.51957 36 1.26522 36 1Z"
									fill="black"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none"
								style={{ minWidth: '36px' }}
							>
								<path
									d="M36 18C36 17.7348 35.9175 17.4804 35.7708 17.2929C35.624 17.1054 35.425 17 35.2174 17H0.782609C0.575048 17 0.375989 17.1054 0.229221 17.2929C0.0824533 17.4804 0 17.7348 0 18C0 18.2652 0.0824533 18.5196 0.229221 18.7071C0.375989 18.8946 0.575048 19 0.782609 19H35.2174C35.425 19 35.624 18.8946 35.7708 18.7071C35.9175 18.5196 36 18.2652 36 18Z"
									fill="black"
								/>
								<path
									d="M18 36C18.2652 36 18.5196 35.9175 18.7071 35.7708C18.8946 35.624 19 35.425 19 35.2174L19 0.782609C19 0.575048 18.8946 0.375989 18.7071 0.229221C18.5196 0.0824534 18.2652 5.53044e-08 18 4.37114e-08C17.7348 3.21184e-08 17.4804 0.0824534 17.2929 0.229221C17.1054 0.375989 17 0.575048 17 0.782609L17 35.2174C17 35.425 17.1054 35.624 17.2929 35.7708C17.4804 35.9175 17.7348 36 18 36Z"
									fill="black"
								/>
							</svg>
						)}
					</div>
					{index === activeIndex && (
						<div className="animate-fade-down bg-white p-4">
							{item.content}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;
