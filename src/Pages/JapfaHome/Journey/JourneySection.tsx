import HomeArrow1 from '../../../Components/HomeArrow1';
import HomeArrow2 from '../../../Components/HomeArrow2';
import HomeArrow3 from '../../../Components/HomeArrow3';
import './JourneySection.css';
import JourneySectionCard from './JourneySectionCard';
import JourneySectionTitle from './JourneySectionTitle';

const JourneySection = () => {
	const feedCard = {
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/journey-feed-img.png`,
		title: 'Feed',
		content:
			'Our journey begins with cutting -edge feed solutions tailored to cater to the livestock’s unique nutritional needs. /n/n  We firmly believe that a well-nourished animal is the foundation of a thriving farm, and our state-of-the-art feeds promotes optimal growth, robust health, and increased productivity. ',
	};
	// farm card
	const farmCard = {
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/journey-farm-img.png`,
		title: 'Farm',
		content:'Beyond providing superior feed, we empower farmers with knowledge and support to implement sustainable practices that enhance the overall welfare of their livestock./n/nWe believe in harmonious balance between modern technology and traditional wisdom, we help farmers create environments where animals can thrive and flourish.',
	};

	// food card
	const foodCard = {
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/journey-food-img.png`,
		title: 'Food',
		content:'As we progress from farm to food, our dedication to quality remains unwavering./n/n With advanced processing facilities and stringent quality control measures, we ensure Japfa India delivers safe and nutritious food products to meet the evolving tastes and preferences of Indian consumers.'
	};
	return (
		<section className="relative mx-auto mb-[80px] max-w-japfaGrid max-mediumScreen:px-14 md:mb-[120px]">
			{/* row 1 */}
			<div className="grid grid-cols-12 items-center gap-4">
				{/* text */}
				<div className="hidden xl:col-span-1 xl:block"></div>
				<div className="col-span-12 mx-auto text-[48px] font-light max-sm:order-1 max-sm:w-fit max-sm:text-center sm:col-span-5 sm:max-w-[355px] md:text-[60px] lg:text-[72px] xl:col-span-4">
					<span className="add-heading-icon heading-icon-journey-section">
						Rooted in Rationale
					</span>
				</div>
				{/* Feedjourney card */}
				<div className="col-span-1 max-sm:hidden"></div>
				<div className="col-span-12 max-w-[820px] max-sm:order-3 sm:col-span-6">
					<JourneySectionCard data={feedCard} />
				</div>
				{/*  title*/}
				<div className="relative col-span-12 my-6 max-sm:order-2 sm:mb-[80px] sm:mt-[20px]">
					<JourneySectionTitle />
					{/* Food Arrow */}
					<div className="journeyArrow1 absolute -bottom-[104px] max-md:hidden  md:left-[90%] lg:left-[90%] xl:left-[83%] mediumScreen:left-[80%] ">
						<HomeArrow1 />
					</div>
					{/* farm Arrow */}
					<div className="journeyArrow2 absolute -bottom-[140px] left-[0%] tabletMedium:left-[11%] lg:left-[18%] xl:left-[22%] mediumScreen:left-[25%]  max-md:hidden">
						<HomeArrow2 />
					</div>
					{/* feed Arrow */}
					<div className="journeyArrow3 absolute -bottom-[30px] max-md:hidden left-[35%] lg:left-[30%] lg:-bottom-[10px] xl:left-[33%]">
						<HomeArrow3 />
					</div>
				</div>
				{/* Farm */}
				<div className="col-span-12 max-sm:order-4 sm:col-span-5 xl:col-span-6">
					<JourneySectionCard data={farmCard} />
				</div>
				<div className="sm:col-span-2 xl:hidden"></div>
				{/* Food */}
				<div className="col-span-12 max-sm:order-5 sm:col-span-5 xl:col-span-6">
					<JourneySectionCard data={foodCard} />
				</div>
			</div>
		</section>
	);
};

export default JourneySection;
