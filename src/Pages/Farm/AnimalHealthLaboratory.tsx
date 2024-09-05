import AnimalHealthAccordion from './AnimalHealthAccordion/AnimalHealthAccordion';
import AccordionContentTemplate from './AnimalHealthAccordion/AccordionContentTemplate';

const AnimalHealthLaboratory = () => {
	// accordionContent
	const content1 = {
		imagePath: '/assets/img/farm_pathogen-test.webp',
		content: [
			'Employing state-of-the-art techniques proactively for early detection and mitigate potential pathogens for ensuring a healthy and disease-resistant poultry population.',
			'This helps us for guaranteeing the safety of our product Chicken meat.',
		],
	};
	const content2 = {
		imagePath: '/assets/img/farm_macrobial-test.webp',
		content: [
			'Rigorously screening and analyzing feed for microbial contaminants to guarantee the production of safe and high-quality poultry feed offered to our Poultry population.',
		],
	};
	const content3 = {
		imagePath: '/assets/img/farm_safety-test.webp',
		content: [
			'The screening for foodborne pathogens to detect and prevent contamination safeguarding consumers from potential health issues.',
			'With our dedication to excellence, we contribute to the assurance of safe and high-quality animal protein products for consumers.',
		],
	};
	const items = [
		{
			title: 'Pathogen detection and disease surveillance through different microbial tests.',
			content: <AccordionContentTemplate data={content1} />,
		},
		{
			title: 'Feed Microbial Screening',
			content: <AccordionContentTemplate data={content2} />,
		},
		{
			title: 'Microbial screening of chicken meat for ensuring food safety:',
			content: <AccordionContentTemplate data={content3} />,
		},
	];
	return (
		<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
			<h4 className="mb-4 text-xl font-normal sm:mb-7 md:mb-10 md:text-2xl lg:mb-16 lg:text-[32px] xl:mb-[60px]">
				This commitment to quality extends to:
			</h4>
			<AnimalHealthAccordion items={items} />
		</div>
	);
};

export default AnimalHealthLaboratory;
