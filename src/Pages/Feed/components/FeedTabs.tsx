import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { fadeRight, fadeUp, zoomIn } from '../../../utils/scrollAnimations';
import '../Feed.css';
import NutritionComponent from './Nutrition/NutritionComponent';

interface FeedTabsProps {
	topTabs?: boolean;
	feedType?: 'Poultry' | 'Cattle' | 'Aqua' | 'Swine';
	feedTabs: {
		title: string;
		description: string;
		isActive?: boolean;
	}[];
	tabContent: {
		title: string;
		description: string[];
		tabImage?: string;
	}[];
	tabsComponent?: boolean;
}

const FeedTabs = (props: FeedTabsProps) => {
	
	const [activeTab, setActiveTab] = useState(0);
	// const [scrollPosition, setScrollPosition] = useState(0);

	// const scrollTabs = (direction: any) => {
	// 	const tabContainer = document.querySelector('.tab-header');
	// 	const scrollAmount = tabContainer?.clientWidth ?? 0;

	// 	if (direction === 'left') {
	// 		setScrollPosition(scrollPosition - scrollAmount);
	// 	} else {
	// 		setScrollPosition(scrollPosition + scrollAmount);
	// 	}

	// 	tabContainer!.scrollLeft = scrollPosition;
	// };
	const [animationClassImage, setAnimationClassImage] = useState('');
	const [animationClassContent, setAnimationClassContent] = useState('');
	React.useEffect(() => {
		setAnimationClassImage('');
		setAnimationClassContent('');
		const timer = setTimeout(() => {
			setAnimationClassImage('animate-fade animate animate-duration-800');
			setAnimationClassContent(
				'animate-fade-left animate animate-duration-800',
			);
		}, 10);

		return () => clearTimeout(timer);
	}, [activeTab]);

	return (
		<>
			{/* feed tabs for large screen */}
			<section className="feed-tabs-section hidden lg:block">
				{props.topTabs && (
					<motion.div
						className={`tab-header justify-between`}
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
					>
						{props.feedTabs.map((feedTab, index) => (
							<div
								className={`tab-link ${
									index === activeTab ? 'active' : ''
								} ${props.feedType==='Swine' && '!pb-2'}
								`}
								key={index}
								onClick={() => setActiveTab(index)}
							>
								{feedTab.title}
								<span>{feedTab.description}</span>
							</div>
						))}
					</motion.div>
				)}
				<div className="feed-tabs">
					<div className="feed-tab-img">
						<motion.img
							src={`${process.env.PUBLIC_URL}${props.tabContent[activeTab].tabImage}`}
							alt="Poultry Pack"
							className={`${props.feedType === 'Poultry'
									? 'max-w-unset'
									: ''} ${animationClassImage} ${(props.feedType==='Cattle' || props.feedType==='Swine' || props.feedType === 'Aqua') ? '!w-[66%]' : 'w-full'} ${(props.feedType === 'Swine' && activeTab === 3)  && '!w-full'}`}
							variants={zoomIn}
							initial="hidden"
							whileInView="visible"
						></motion.img>
					</div>

					<div className={`feed-tab-container ${props.feedType==='Cattle' && 'flex flex-col'}`}>
						{!props.topTabs && (
							<div
								className={`tab-header ${
									props.feedType === 'Aqua'
										? 'justify-start gap-14'
										: 'justify-between gap-10'
								} `}
							>
								{props.feedTabs.map((feedTab, index) => (
									<motion.div
										variants={fadeRight}
										initial="hidden"
										whileInView="visible"
										className={`tab-link ${
											index === activeTab ? 'active' : ''
										} ${props.feedType === 'Cattle' && '!text-[24px]'}
										`}
										key={index}
										onClick={() => setActiveTab(index)}
									>
										{feedTab.title}
										<span
											className={`${props.feedType === 'Cattle' && '!text-[20px]'}`}
										>
											{feedTab.description}
										</span>
									</motion.div>
								))}
							</div>
						)}

						<div className={`tab-body ${animationClassContent} ${props.feedType==='Cattle' && '!w-full flex flex-col !h-full'}`}>
							<motion.div
								className="tab-body-title"
								variants={fadeUp}
								initial="hidden"
								whileInView="visible"
							>
								{props.tabContent[activeTab].title}
							</motion.div>
							<motion.ul
								variants={fadeRight}
								initial="hidden"
								whileInView="visible"
							>
								{props.tabContent[activeTab].description.map(
									(description, index) => (
										<li key={index}>{description}</li>
									),
								)}
							</motion.ul>
							{props.tabsComponent && <NutritionComponent />}
							{/* cattle technical support */}
							{props.feedType === 'Cattle' && (
								<motion.div
									className="customer-support"
									variants={fadeRight}
									initial="hidden"
									whileInView="visible"
								>
									<h2>
										Cattle Feed Customer Technical Support
									</h2>
									<ul>
										<li>
											1. Regular visit to farm by
											technical experts
										</li>
										<li>
											2. Install sophisticated milk
											testing machine for customer samples
										</li>
									</ul>
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* accordian for medium devices */}
			<section className="lg:hidden max-w-[568px] mx-auto">
				{props.feedTabs.map((accordian, index) => (
					<div key={index} onClick={() => setActiveTab(index)}>
						<div className="mb-3 flex w-full items-center  justify-between border-b border-[#b4b4b4] pb-3">
							<div>
								<p className="text-[1.5rem] font-extrabold">
									{accordian.title}
								</p>
								<span className="text-[1.3rem] font-normal">
									{accordian.description}
								</span>
							</div>
							<div className="text-[2rem]">
								{activeTab === index ? '-' : '+'}
							</div>
						</div>

						{activeTab === index && (
							<div className="tab-body w-[100%!important] animate-fade-right animate-normal animate-once animate-ease-out">
								<motion.div
									className="tab-body-title leading-[145%!important] "
									variants={fadeUp}
									initial="hidden"
									whileInView="visible"
								>
									{props.tabContent[activeTab].title}
								</motion.div>
								<motion.ul
									variants={fadeRight}
									initial="hidden"
									whileInView="visible"
								>
									{props.tabContent[
										activeTab
									].description.map((description, index) => (
										<li
											key={index}
											className="accordian-li"
										>
											{description}
										</li>
									))}
								</motion.ul>

								<div className="feed-tab-img-mobile mb-8 mt-6 flex">
									<motion.img
										src={`${process.env.PUBLIC_URL}${props.tabContent[activeTab].tabImage}`}
										alt="Poultry Pack"
										className={props.feedType === 'Poultry'? 'max-w-unset': ''
										}
										variants={zoomIn}
										initial="hidden"
										whileInView="visible"
									></motion.img>
								</div>
							</div>
						)}
					</div>
				))}
			</section>
		</>
	);
};

export default FeedTabs;
