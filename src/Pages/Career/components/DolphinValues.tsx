import { useState } from 'react';
import { motion } from 'framer-motion';
import ShadowText from '../../../Components/ShadowText';
import '../Career.css';
import DolphinValuesCard from './DolphinValuesCard';
import { fade, fadeRight } from '../../../utils/scrollAnimations';
const DolphinValues = () => {
	const [activeValue, setActiveValue] = useState(0);
	const dolphinText = 'DOLPHIN'.split('');
	// const dolphin values data
	const dolphinValues = [
		{
			title: 'Drive',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/career-values-drive.webp`,
			description:
				'At JAPFA, we value self-driven individuals who are passionate, motivated, and committed to their roles.',
		},
		{
			title: 'Organizational Thinking',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/career-values-orgthinking.webp`,
			description:
				'We seek creative thinkers who can innovate and bring fresh perspectives to our team.',
		},
		{
			title: 'Leadership',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/career-values-leadership.webp`,
			description:
				'Leadership is essential at JAPFA, even in non-managerial positions. We value those who inspire and take initiative.',
		},
		{
			title: 'Professionalism',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/career-values-professionalism.webp`,
			description:
				'Professionalism is key in all aspects of our work, encompassing reliability and accountability.',
		},
		{
			title: 'Honesty',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/career-values-honesty.webp`,
			description:
				'We highly value integrity, truthfulness, and transparency in our interactions and responsibilities.',
		},
		{
			title: 'Innovative',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/career-values-innovative.webp`,
			description:
				'Innovation is at our core, leading to problem-solving and transformation.',
		},
		{
			title: 'Nurturing',
			imageSrc: `${process.env.PUBLIC_URL}/assets/img/career-values-nurturing.webp`,
			description:
				'We foster positive relationships, effective collaboration, and growth, demonstrating a cooperative mindset.',
		},
	];

	return (
		<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8 ">
			<div
				className="mb-10 flex items-baseline justify-center gap-5"
				style={{
					position: 'sticky',
					top: '50px',
					background: 'white',
					paddingTop: '50px',
					zIndex: 10,
				}}
			>
				<motion.div
					className="flex"
					variants={fade}
					initial={'hidden'}
					whileInView={'visible'}
				>
					{dolphinText.map((item, index) => (
						<ShadowText
							text={item}
							key={index}
							classes={`farmText !text-6xl md:!text-[80px] lg:!text-[100px] tracking-wide transition-all duration-500 ease-in-out ${
								activeValue === index
									? 'scale-110'
									: 'scale-100'
							}`}
							originalTextClasses={
								activeValue === index
									? 'dark-gradient-text'
									: ''
							}
						/>
					))}
				</motion.div>
				<motion.div
					className="text-3xl font-light md:text-[40px] lg:text-7xl"
					variants={fadeRight}
					initial={'hidden'}
					whileInView={'visible'}
				>
					Values
				</motion.div>
			</div>
			<div className="">
				{dolphinValues.map((value, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true, amount: 0.5 }}
						onViewportEnter={() => setActiveValue(index)}
					>
						<DolphinValuesCard
							title={value.title}
							imageSrc={value.imageSrc}
							description={value.description}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default DolphinValues;
