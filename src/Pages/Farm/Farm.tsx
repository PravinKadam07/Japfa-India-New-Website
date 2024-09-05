import { motion } from 'framer-motion';
import HomeBanner from '../FeedHome/components/HomeBanner';
import IndustryStandards from '../FeedHome/components/IndustryStandards/IndustryStandards';
import Testing from '../FeedHome/components/Testing';
import AnimalHealthLaboratory from './AnimalHealthLaboratory';
import BigTitleImageSection from './BigTitleImageSection';
import FarmFeatureSection from './FarmFeatureSection';
import MakeGoodAlways from './MakeGoodAlways';
import PoultryExcellence from './PoultryExcellence';
import { fadeUp } from '../../utils/scrollAnimations';

const Farm = () => {
	const homeBannerData = {
		imageUrl: `${process.env.PUBLIC_URL}/assets/img/farm_banner-img.webp`,
		title: ['India’s premier integrated', 'poultry powerhouse'],
		content:
			"Our integrated poultry business spans from parent farms to hatcheries and contract farming, coupled with efficient in-house feed production. Our assets boast top-notch biosecurity protocols, vaccination programs, and the adoption of global best practices at our breeder farms and hatcheries. /n /nToday, our livestock farming division in India significantly contributes to our business. In anticipation of a growing nation's increasing demand, we have set our sights on doubling the productivity by 2025",
	};
	// Industry Standards data
	const industryStandardColumns = [
		{
			id: 1,
			iconUrl: '/assets/img/global-hygiene-icon.svg',
			bgImageClass: 'farm-1',
			title: 'Global Hygiene standards',
			text: 'All our assets follow utmost global health and hygiene standards',
		},
		{
			id: 2,
			iconUrl: '/assets/img/bio-security-icon.svg',
			bgImageClass: 'farm-2',
			title: 'Best in class Bio-Security',
			text: 'Unmatched protection ensuring ultimate safety and health',
		},
		{
			id: 3,
			iconUrl: '/assets/img/cutting-edge-genetics-icon.svg',
			bgImageClass: 'farm-3',
			title: 'Cutting-Edge Genetics and Nutrition',
			text: 'Advanced breeding techniques & precision nutrition for superior livestock quality',
		},
	];
	//
	const productHighlightsData = [
		{
			image: '/assets/img/farm_breeder-1.svg',
			description: 'Natural mating process',
		},
		{
			image: '/assets/img/farm_breeder-2.svg',
			description: 'Advance male and female feeder system',
		},
		{
			image: '/assets/img/farm_breeder-3.svg',
			description: 'Cage - free farms',
		},
	];
	const productHighlightsDataHatcheries = [
		{
			image: '/assets/img/farm_hatcheries-icon-1.svg',
			description: 'State-of-the-art hatcheries',
		},
		{
			image: '/assets/img/farm_hatcheries-icon-2.svg',
			description: 'Stringent bio- security measures',
		},
		{
			image: '/assets/img/farm_hatcheries-icon-3.svg',
			description: 'Vaccinated chicks',
		},
	];
	const productHighlightsContract = [
		{
			image: '/assets/img/farm_contract-icon-1.svg',
			description: 'Global technical support',
		},
		{
			image: '/assets/img/farm_contract-icon-2.svg',
			description: 'Farmer training programs',
		},
		{
			image: '/assets/img/farm_contract-icon-3.svg',
			description: 'Advance machinery',
		},
	];
	// data for Beyond Diagnostic component
	const beyondDiagnosticData = {
		mainTitle: 'Beyond diagnostics',
		mainDescription:
			'At our Animal Health Laboratory, we go beyond diagnostics.',
		leftColumnImage: '/assets/img/farm_beyond-diagnostic.webp',
		leftColumnText: 'Animal Health Laboratory',
		rightColumnText: [
			'Our experts conduct thorough biosecurity audits on poultry farms, evaluating current practices and providing tailored guidelines for continuous improvement.',
			'This proactive approach aims to develop a poultry environment that is not only disease-free but also promotes responsible antibiotic use.',
			'Educational Outreach: Sharing knowledge and insights to promote awareness and understanding of Poultry health among our stakeholders Poultry Farmers.',
			'Collaboration: Building strong partnerships with Poultry Farm owners and organisation to collectively enhance health status of poultry population.',
		],
	};

	return (
		<>
			<HomeBanner
				imageUrl={homeBannerData.imageUrl}
				title={homeBannerData.title}
				content={homeBannerData.content}
			/>
			<motion.div className="mx-auto mb-[60px] mt-[120px] flex justify-center max-md:max-w-[500px] max-sm:mt-[80px] max-sm:max-w-[320px]">
				<motion.img
					src={`${process.env.PUBLIC_URL}/assets/img/happy-birds.svg`}
					alt=""
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
				/>
			</motion.div>
			<IndustryStandards
				industryStandardColumns={industryStandardColumns}
			/>
			<BigTitleImageSection
				title="JAPFA"
				shadowTitle="Poultry"
				dividerAfterText={true}
				image="/assets/img/farm_poultry.webp"
				subTitle="Nurturing an ecosystem of Excellence"
			/>
			<FarmFeatureSection
				productHighlightsData={productHighlightsData}
				mainImage="/assets/img/farm_breeder-main-img.webp"
				mainTitle="Parent farm / Breeder"
				mainDescription="At JAPFA India, our farm ecosystem seamlessly integrates superior breeders, or parent birds, with our state-of-the-art hatcheries./n These parent birds are specially bred in bio-secure environments, they receive optimal nutrition, and are expertly managed to consistently
					produce high-quality hatching eggs. These eggs yield excellent Day-Old Chicks (DOC). Our entire end-to-end meticulous nurturing processes ensure that JAPFA's chicken is known for its juicy taste, excellent quality of protein and tenderness. /n/n  Today our two Breeder Farms in Shirasgaon Kata and Ajnuj has the capacity to produce 1.5 lakhs + birds every month."
			/>
			<FarmFeatureSection
				productHighlightsData={productHighlightsDataHatcheries}
				mainImage="/assets/img/farm_hatcheries.webp"
				mainTitle="Hatcheries"
				mainDescription="Our commitment to quality begins with the premium hatching eggs sourced from our Parent Farms. These eggs then undergo a stringent and closely monitored incubation process in a highly Bio-secured environment. /n/n A standard egg grading technology ensures that we select only the best eggs for incubation to maintain optimal chicks quality fertility. These Day-Old Chicks (DOC), which are known for rapid growth as an and exceptional genetic potential, receives global-standard vaccines for safety which also guarantees excellent livability post-hatch in farms. /n/n Today, with hatcheries in Maharashtra and Hyderabad, our total yield capacity is 1.3 million DOCs per month."
			/>

			<FarmFeatureSection
				productHighlightsData={productHighlightsContract}
				mainImage="/assets/img/farm_contract-main.webp"
				mainTitle="Integration-Contract farming"
				mainDescription="At JAPFA India, we adopt a holistic approach to enhance mutual growth and increase revenue for our partner farmers. With a network of over 1000 partner farmers across India, including 200+ in Maharashtra, we empower farmers through global technological support and together are shaping the future of poultry farming in India./n/n
					JAPFANEETI is one such initiative that educates, informs and connects farmers to the best in sustainable practices, bridging modern technology with traditional wisdom for stronger farmer-livestock relationships."
				hasCta={true}
				ctaText="JAPFANEETI"
				ctaLink='/sustainability#japfaneeti'
			/>
			<PoultryExcellence />
			{/* Animal Health Section */}
			<BigTitleImageSection
				image="/assets/img/farm_animal-health.webp"
				dividerAfterText={false}
				strongTitle="Animal Health laboratory"
				longText={`At Animal Health Laboratory, our commitment to excellence in Poultry Health extends from the farm to the table, ensuring <b>a safe and wholesome poultry production.</b> /n/n Our laboratory conducts rigorous tests to ensure the food safety of animal protein products.`}
			/>
			<AnimalHealthLaboratory />
			<Testing data={beyondDiagnosticData} />

			<MakeGoodAlways />
		</>
	);
};

export default Farm;
