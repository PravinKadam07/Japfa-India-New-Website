
interface Props {
	tabContent: any;
	activeTab: number;
	type: 'frequency' | 'quantity';
}
const NutritionDisplay = ({ tabContent, activeTab, type }: Props) => {
	return (
		<div className="flex flex-col mt-1.5 max-md:mt-10 w-1/2">
			{type === 'frequency' ? (
				<img
					loading="lazy"
					src={`${process.env.PUBLIC_URL}/assets/img/feed-frequency.svg`}
					className="aspect-square object-contain object-center w-[40px] overflow-hidden max-w-full self-start"
					alt="Feed frequency"
				/>
			) : (
				<img
					loading="lazy"
					src={`${process.env.PUBLIC_URL}/assets/img/feed-quantity.svg`}
					className="aspect-square object-contain object-center w-[40px] overflow-hidden max-w-full self-start"
					alt="Feed Quantity"
				/>
			)}

			<div className="text-stone-900 text-2xl font-extrabold leading-8 mt-3">
				{type === 'frequency'
					? tabContent[activeTab].feedFrequency
					: tabContent[activeTab].feedQuantity}
			</div>
			<div className="text-stone-900 text-base leading-6 self-start whitespace-nowrap mt-2">
				{type === 'frequency' ? 'Feed Frequency' : 'Feed Quantity'}
			</div>
			<div className="text-neutral-500 text-base leading-6 self-start whitespace-nowrap mt-2">
				{type === 'frequency' ? 'a day' : '% of body weight'}
			</div>
		</div>
	);
};

export default NutritionDisplay;
