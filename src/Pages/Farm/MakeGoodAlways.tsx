import ShadowText from '../../Components/ShadowText';
import BigTitleImageSection from './BigTitleImageSection';

const MakeGoodAlways = () => {
	const titleDescription =
		'Innovating to increase poultry farm produce and ensuring superior returns';
	return (
		<>
			<div className="mx-auto max-w-japfaGrid pt-32 max-md:pt-[80px]">
				{/* Make Good Always shadow text */}
				<div className="mb-7 flex flex-wrap items-center justify-center gap-10 max-sm:gap-3">
					<ShadowText text="Make" classes="!text-[#6A0600]" />
					<ShadowText text="Good." classes="!text-[#6A0600]" />
					<ShadowText
						text="Always."
						originalTextClasses="textClipGradient"
					/>
				</div>
				{/* Description */}
				<h3 className="mx-auto mb-20 max-w-[684px] text-center text-3xl font-normal  leading-10 text-black max-md:mb-[0px]">
					{titleDescription}
				</h3>
			</div>
			{/* Image with title block */}
			<BigTitleImageSection
				dividerBeforeText={true}
				reverseOrder={true}
				image={`/assets/img/farm_make-good-image.webp`}
				longText={`With a steadfast commitment to maintaining high biosecurity standards and embracing environmentally friendly global practices, we consistently produce high-quality poultry products.  /n At JAPFA, we understand that different breeds have unique needs, and we leverage cutting-edge technology and best-in-class biosecurity measures to deliver value-driven and outcome-oriented products.`}
				lessSectionSpacing={true}
			/>
		</>
	);
};

export default MakeGoodAlways;
