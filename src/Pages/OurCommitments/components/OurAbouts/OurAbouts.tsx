import { useState } from 'react';
import InfoAccordion from './InfoAccordion';

const OurAbouts = () => {
	const items = [
		{
			title: 'Our Environment',
			help_text: 'Breeding sustainability through animal agriculture',
			imageSrc: '/assets/img/our_environment.webp',
			content:
				'Our promise to the environment is grounded in innovation and responsibility. We consistently strive to lead the way in pioneering solutions that significantly reduce our carbon footprint while championing the cause of environmental sustainability./n/n We assess the environmental impact of everything we do, which could be right from installing solar panels within our communities to help them generate clean energy or following responsible animal-agro practices. At JAPFA India, we ensure that our contribution to the planet plays a catalytic role, whereby making good always results in doing good for the earth.',
		},
		{
			title: 'Our Employees',
			help_text: 'JAPFAITIES- One family!',
			imageSrc: '/assets/img/our_employees.webp',
			content:
				"The promise we make to our employees is also a promise we make to the heart of our organization. Both, their vigor as well as well-being, are paramount to us. We maintain the highest standards of health, safety, and labor practices for our employees, fostering a work culture where their lives, livelihoods, and welfare are prioritized./n/nNevertheless, this commitment extends beyond the workplace since it's a promise we make to enhance their quality of life.",
		},
		{
			title: 'Our Consumers & Products',
			help_text: 'Customer delight through product safety',
			imageSrc: '/assets/img/our_consumers_products.webp',
			content:
				'To our consumers, our promise transcends beyond delivering the highest standards of quality; it encompasses trust, value, and product safety. We are dedicated to delivering products that instill unwavering trust. By setting unprecedented standards of quality and hygiene in all our processes, products and the entire value chain, we offer products that are superior, healthy and wholesome./n/nAt JAPFA India, we are fully committed towards our customers’ interests through competitive pricing, rigorous testing and vigilant monitoring to ensure product safety, thereby reaffirming our promise to enhance and prioritize ultimate consumer satisfaction.',
		},
		{
			title: 'Our Communities',
			help_text: 'Thriving through co-existence',
			imageSrc: '/assets/img/our_communities.webp',
			content:
				'At JAPFA India, we acquire motivation from the positive socio-economic impact we bring back to our communities. While rejuvenating impacted neighborhoods through various social and community development initiatives, we also endeavor to give back multifold to society, not only by way of rehabilitation, but by a vision for their bright future and ushering in lasting positive change./n/nWe invest in essential facilities such as schools to nurture young minds, hospitals to provide essential healthcare facilities, clean energy solutions to minimize carbon footprint, and infrastructure that improves overall quality of life, besides promotes growth and well-being. Through these efforts, we aim to create vibrant, thriving communities that are resilient and sustainable, besides having a low carbon footprint.',
		},
	];

	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const handleClick = (index: number) => {
		setActiveIndex(index === activeIndex ? null : index);
		setTimeout(() => {
			window.scrollTo({
				top:
					(document.getElementById(`aboutSection-${index}`)?.offsetTop ||
						0) - 100,
				behavior: 'smooth',
			});
		}, 0);
	};

	return (
		<section className="xl:[61px] flex flex-col bg-[#1E140F] py-[100px] text-white max-mediumScreen:px-14 max-sm:px-[24px] md:py-[80px] xl:py-[100px]">
			{items.map((item, index) => {
				const props = {
					...item,
					isActive: index === activeIndex,
					isLast: index === items.length - 1,
					index: index,
					handleClick: handleClick,
				};
				return <InfoAccordion props={props} key={index} />;
			})}
		</section>
	);
};

export default OurAbouts;
