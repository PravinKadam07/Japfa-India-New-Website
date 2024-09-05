import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import NutritionDisplay from './NutritionDisplay';

const NutritionComponent = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleButtonClick = (index: any) => {
		setActiveTab(index);
	};

	const tabLabels = [
		{
			label: '1 - 15 grams',
		},
		{
			label: '15 - 50 grams',
		},
		{
			label: '50 - 100 grams',
		},
	];
	const tabContent = [
		{
			feedQuantity: '35 - 45 %',
			feedFrequency: '3 - 4 times',
		},
		{
			feedQuantity: '10 - 15 %',
			feedFrequency: '3 - 4 times',
		},
		{
			feedQuantity: '08 - 10 %',
			feedFrequency: '3 - 4 times',
		},
	];

	return (
		<>
			<div className="mb-10 mt-16 text-[16px] font-extrabold text-black md:text-2xl">
				Follow these feeding steps for your baby fishes
			</div>
			<div className="flex gap-5 max-lg:flex-col max-md:items-stretch max-md:gap-0">
				<div className="flex w-[42%] max-w-[210px] flex-col items-start max-lg:w-full max-lg:max-w-full max-lg:flex-row">
					{tabLabels.map((tab, index) => (
						<button
							key={index}
							className={`items-center justify-between rounded ${
								activeTab === index
									? 'bg-[#FFEBE0]'
									: 'bg-white'
							} flex w-full gap-2 self-stretch px-4 py-2.5`}
							onClick={() => handleButtonClick(index)}
						>
							<div
								className={`${
									activeTab === index
										? 'text-[#EC691F]'
										: 'text-black'
								} text-base font-bold leading-6`}
							>
								{tab.label}
							</div>
							<MdKeyboardArrowRight
								className={`
									max-lg:hidden
									${activeTab === index ? 'text-[#EC691F]' : 'text-black'}`}
							/>
						</button>
					))}
				</div>
				<div className="ml-5 flex flex-grow gap-10 max-md:ml-0 max-md:w-full">
					<NutritionDisplay
						tabContent={tabContent}
						activeTab={activeTab}
						type="quantity"
					/>
					<NutritionDisplay
						tabContent={tabContent}
						activeTab={activeTab}
						type="frequency"
					/>
				</div>
			</div>
		</>
	);
};

export default NutritionComponent;
