import { useState, useEffect } from 'react';
import SingleMediaCard from './SingleMediaCard';
import { fetchMediaPageArticles } from '../../../utils/fetchFromApi';
import { PresenceContext, motion } from 'framer-motion';
import { fadeLeft } from '../../../utils/scrollAnimations';

interface CardsData {
	id: number;
	title: string;
	date: string;
	imgSrc: string;
	articleLink: string;
}
const MediaCards = () => {
	const [activeYearArticles, setactiveYearArticles] = useState<CardsData[]>(
		[],
	);
	const [allArticles, setallArticles] = useState<CardsData[]>([]);

	const [activeYear, setActiveYear] = useState<number | string | null>('All');

	const handleItemClick = (year: number | string | null) => {
		setActiveYear(year);
		filterArticlesByYear(year);
	};

	const [years, setYears] = useState<string[]>([]);

	useEffect(() => {
		const currentYear = new Date().getFullYear();
		const prevYears = Array.from({ length: 5 }, (v, k) => currentYear - k);
		const allYears = ['All', ...prevYears, 'Older'];
		// @ts-ignore
		setYears(allYears);
	}, []);
	const filterArticlesByYear = (selectedYear: number | string | null) => {
		console.log(selectedYear);
		let activeArticles: CardsData[] = [];
		if (selectedYear === 'Older') {
			activeArticles = allArticles.filter((article) => {
				const articleYear = new Date(article.date).getFullYear();
				return articleYear < 2020;
			});
		} else if (selectedYear === 'All') {
			activeArticles = allArticles;
		} else {
			activeArticles = allArticles.filter((article) => {
				const articleDate = article.date.split('/');
				console.log(`selected:`, selectedYear);
				console.log(`converted:`, articleDate[2]);
				console.log(`actual:`, article.date);
				return articleDate[2].toString() === selectedYear?.toString();
			});
		}
		setactiveYearArticles(activeArticles);
	};

	// use effect to fetch api
	useEffect(() => {
		fetchMediaPageArticles()
			.then((data) => {
				console.log(data);
				const allArticles = data.map((item: any, index: number) => {
					const returnObject = {
						id: item.id,
						title: item.acf['article-card-title'],
						date: item.acf['article_date'],
						imgSrc: item.acf['thumbnail'],
						articleLink: item.acf['article_link'],
					};
					return returnObject;
				});
				setallArticles(allArticles);
				if (activeYear === 'All') setactiveYearArticles(allArticles);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="mx-auto my-[100px] max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8 mediumScreen:pb-16">
			<motion.div
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				<ul className="mb-10 flex cursor-pointer  flex-wrap gap-6">
					{/* <li
						className={`min-w-[75px] rounded-lg px-4 py-2 text-center text-xl md:text-2xl ${
							activeYear === null
								? 'bg-[#EC691F] text-white'
								: 'bg-[#F6F6F6] text-[#BEBEBE]'
						}`}
						onClick={() => handleItemClick(null)}
					>
						<a href="#">All</a>
					</li> */}
					{years.map((year) => (
						<li
							key={year}
							className={` min-w-[75px] rounded-lg px-4 py-2 text-xl md:text-2xl ${
								activeYear === year
									? 'bg-[#EC691F] text-white'
									: 'bg-[#F6F6F6] text-[#BEBEBE]'
							}`}
							onClick={() => handleItemClick(year)}
						>
							{year}
						</li>
					))}
				</ul>
				<div className="mb-[60px] h-[1px] w-full bg-[#DEDEDE]"></div>
			</motion.div>
			{activeYearArticles.length > 0 ? (
				<div className="grid-cols-12 gap-[72px] gap-y-24 md:grid">
					{activeYearArticles.map((item, index) => {
						return <SingleMediaCard data={item} key={item.id} />;
					})}
				</div>
			) : (
				<div className="w-full p-4">
					<img
						src={`${process.env.PUBLIC_URL}/assets/img/no-articles-found.svg`}
						alt=""
						className="mx-auto w-full max-w-[300px]"
					/>
				</div>
			)}
		</div>
	);
};

export default MediaCards;
