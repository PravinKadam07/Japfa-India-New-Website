import HomeBanner from '../FeedHome/components/HomeBanner';
import './OurApproach.css';
import ApproachStepWrapper from './components/ApproachStepWrapper';

const OurApproach = () => {
	const bannerData = {
		content:
			'Our journey to excellence is powered by a dynamic synergy of procurement, cutting-edge infrastructure, state-of-the-art technology, and unwavering commitment to quality. These key elements form the foundation upon which we continue to grow, innovate, and deliver outstanding products to our valued customers./n/n  Our success story is crafted through a harmonious interplay of these essential components that shape our mission “make good always” and sets us apart as a trusted name in the industry.',
		title: ['','Nurturing excellence in every Endeavor'],
		imageUrl: `${process.env.PUBLIC_URL}/assets/img/approach-home-banner-img.webp`,
	};

	// Approach step 1 stub
	const procurementStep = {
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-procurement-main.webp`,
		stepCount: '01',
		stepTitle: 'Procurement',
		orderReverse: false,
		imgMaxWidth: '500px',
		sectionType: 'procure'
	};
	// Approach step 2 stub
	const technologyStep = {
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-technology-main.webp`,
		stepCount: '02',
		stepTitle: 'Technology',
		orderReverse: true,
		imgMaxWidth: '870px',
		sectionType: 'tech'
	};

	// Approach step 4 stub
	const qualityStep = {
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-quality-main.png`,
		stepCount: '03',
		stepTitle: 'Quality',
		orderReverse: false,
		imgMaxWidth: '870px',
		sectionType: 'quality'
	};
	// Approach step 3 stub
	const infrastructureStep = {
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-infrastructure-main.webp`,
		stepCount: '04',
		stepTitle: 'Infrastructure',
		orderReverse: true,
		imgMaxWidth: '870px',
		sectionType: 'infra'
	};

	// Approach procurement card
	const approachProcurementData = [
		{
			id: 1,
			title: 'Sowing the seeds of success',
			description:
				' Procurement is a vital cornerstone of our business lifecycle. We believe that meticulous supplier selection and rigorous quality control processes, from ingredient testing to sourcing the highest quality ingredients globally, are essential for delivering the best possible product. Our deep expertise in raw material procurement ensures that we leave no room for compromise when it comes to ingredient quality.',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-procurement-seedsOfSuccess.webp`,
		},
		{
			id: 2,
			title: 'Breeding the best',
			description:
				'At the source, our breeder farms and hatcheries, deploy state-of-the-art equipment and adhere to the highest levels in biosecurity, aligning with global standards. These processes and global best practices enable us to maintain an environment that is second to none in terms of health and hygiene. We firmly believe that happy birds deliver the best eggs and similarly, across our cage-free breeder farms, a natural mating process is followed to ensure best outcomes',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-procurement-breedingTheBest.webp`,
		},
		{
			id: 3,
			title: 'Fresh from farm to plate',
			description:
				'Our meticulous process of procurement leads to ‘making good always’. Through JAPFA BEST, we deliver the highest quality meat products to the doorsteps of Indian homes and enterprises. Raised on our own bio-secure farms with state-of-the-art equipment, and processed & packed in-house at our advanced facilities, we take pride in delivering to our promise of offering fresh cuts of nutritious meat of the highest quality, quickly and affordably.',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-procurement-farm2plate.webp`,
		},
	];
	// Approach technology cardf
	const approachTechnologyData = [
		{
			id: 1,
			title: 'Propelling our leap into the future',
			description: `JAPFA India is dedicated to the seamless integration of technology and infrastructure, recognizing their essential synergy. With a firm commitment to digital transformation, the company utilizes cutting-edge solutions such as Hyper Converged Infrastructure, Virtualization, Cloud Computing, Edge Computing, Mobile Apps, IoT, and Automation. This strategic embrace of technology enhances efficiencies and propels JAPFA India towards becoming a dynamic, agile, and innovative presence in its industry, fostering collaboration with customers, vendors, employees, and banking partners.`,
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-technology-future.webp`,
		},
		{
			id: 2,
			title: 'Paving the path with IOT',
			description: `As a conscious part of our advanced digital transformation strategy, we have cohesively enmeshed IoT into our infrastructure, to seamlessly integrated smart sensor solutions and data analytics. This integration empowers us to continuously monitor the well-being of our animals, fine-tune feed consumption to ensure precise nutrition for each breed, and enhance overall farm efficiency, all in real-time.`,
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-technology-IOT.webp`,
		},
	];
	// Approach quality card
	const approachQualityData = [
		{
			id: 1,
			title: 'Making good always',
			description: `Intangible as it may seem, quality is at the heart of everything we do. Right from adhering to the highest standards in certifications to best-in-class bio-security measures, to employing inflexible QC processes to sharing technical support and knowledge with our partner farmers regarding feed, chick and medicine.`,
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-quality-good.webp`,
		},
		{
			id: 2,
			title: 'Delivering quality to your doorstep',
			description: `Long before our premium cuts of meat reach our consumers at their doorsteps, through JAPFA BEST, we subject them to comprehensive quality checks. After a careful grading process at our farms, high quality eggs are sent to our hatcheries with the most advanced machinery and equipment, to obtain Day Old Chicks (DOC). We follow a systematic vaccination program with vaccines sourced from renowned manufacturers. Post grading, these Day-Old Chicks are subsequently sent to our broiler farms.`,
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-quality-doorstep.webp`,
		},
	];
	// Approach Infrastructure card
	const approachInfrastructureData = [
		{
			id: 1,
			title: 'Sound foundation for scalability and efficiency',
			description:
				'To ensure a reliable, smooth and secure execution, our state-of-the-art IT Infrastructure is strongly underlined by a well-maintained software stack. Besides building this reliable software for operations, we’ve also designed our network with an emphasis on scalability, redundancy and security.',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-quality-good.webp`,
		},
		{
			id: 2,
			title: 'Secure all that matters most',
			description:
				'These efforts are secure and bolstered by a robust cybersecurity strategy to safeguard our data, applications, and networks from the evolving threat landscape.',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-infrastructure-secure.webp`,
		},
		{
			id: 3,
			title: 'Future-ready',
			description:
				'Moving ahead, we are also actively exploring integration of future-enabled platforms leveraging like AI, ML, and Blockchain into the Poultry Industry, thereby aiming to drive innovation and efficiency in this sector.',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/approach-infrastructure-future.webp`,
		},
	];
	// Array for steps
	const stepsData = [
		{
			stepDisplayData: { ...procurementStep },
			stepsData: [...approachProcurementData],
		},
		{
			stepDisplayData: { ...technologyStep },
			stepsData: [...approachTechnologyData],
		},
		{
			stepDisplayData: { ...qualityStep },
			stepsData: [...approachQualityData],
		},
		{
			stepDisplayData: { ...infrastructureStep },
			stepsData: [...approachInfrastructureData],
		},
	];

	return (
		<div>
			<HomeBanner
				content={bannerData.content}
				imageUrl={bannerData.imageUrl}
				title={bannerData.title}
			/>
			{stepsData.map((step, index) => (
				<ApproachStepWrapper
					key={index}
					stepDisplayData={step.stepDisplayData}
					cardsData={step.stepsData}
				/>
			))}
		</div>
	);
};

export default OurApproach;
