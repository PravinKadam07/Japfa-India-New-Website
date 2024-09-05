import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrendingSection.css";
import { Row, Col } from "react-grid-system";
import {
	fetchHomePageArticles,
	fetchMediaPageArticles,
	modifyPath,
} from "../../utils/fetchFromApi";
import SingleMediaCard from "../Media/components/SingleMediaCard";

const TrendingSection = () => {
	// const articles = [
	// 	{
	// 		id: 1,
	// 		imgSrc: `${process.env.PUBLIC_URL}/assets/img/article1.webp`,
	// 		title: "Annual Farming Summit XIV Highlights: 2022 | Kerela",
	// 		date: "July 4th, 2022",
	// 	},
	// 	{
	// 		id: 2,
	// 		imgSrc: `${process.env.PUBLIC_URL}/assets/img/article2.webp`,
	// 		title: "“Educating India about the new poultry vision is critical” says Chairman.",
	// 		date: "July 4th, 2022",
	// 	},
	// 	{
	// 		id: 3,
	// 		imgSrc: `${process.env.PUBLIC_URL}/assets/img/article3.webp`,
	// 		title: "Towards a sustainable future of poultry farming.",
	// 		date: "July 4th, 2022",
	// 	},
	// ];

	const sectionData = {
		title: "What's trending",
		subTitle:
			"Hear about us from the news and corporate articles published lately.",
		ctaText: "Explore all Articles",
	};
	const [articles, setArticles] = useState([]);
	const navigate = useNavigate();
	const navigateTo = (path) => {
		const navigateRoute = `${path}`;
		navigate(navigateRoute);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		fetchMediaPageArticles()
			.then((data) => {
				const homepageArticles = data
					.filter((item) => item.acf["on-homepage"] && item)
					.map((item, index) => {
						const returnObject = {
							id: item.id,
							title: item.acf["article-card-title"],
							date: item.acf["article_date"],
							imgSrc: item.acf["thumbnail"],
							articleLink: item.acf["article_link"],
						};
						return returnObject;
					});
				setArticles(homepageArticles);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<section className="mb-40 max-md:mb-[80px]">
			<div className="max-w-full">
				<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
					<div className="flex flex-wrap">
						<div className="w-full pt-[60px] max-sm:pt-[40px] semiMediumScreen:pt-[120px]">
							<h2 className="text-[40px] font-bold leading-normal text-black md:text-[72px] semiMediumScreen:text-[88px]">
								{sectionData.title}
							</h2>
							<p className="mt-3 text-xl font-normal leading-9 text-black">
								{sectionData.subTitle}
							</p>
							<hr className="semiMediumScreen:my-15 my-8 opacity-100" />
							<div className="article-container">
								<div className="grid-cols-12 gap-[72px] gap-y-24 md:grid">
									{articles.map((article, index) => (
										<SingleMediaCard
											data={article}
											key={index}
										/>
										// <Col
										// 	xl={4}
										// 	lg={4}
										// 	md={6}
										// 	sm={8}
										// 	xs={12}
										// 	key={article.id}
										// >
										// 	<div className="mb-7.5 last:mb-0">
										// 		<div className="article-img">
										// 			<img
										// 				src={`${modifyPath(
										// 					article.imgSrc,
										// 				)}`}
										// 				className="h-auto w-full "
										// 				alt=""
										// 			/>
										// 		</div>
										// 		<h3 className="leading-7.5 md:my-3.75 lg:w-101 my-5 pr-10 text-lg font-normal md:pr-5">
										// 			{article.title}
										// 		</h3>
										// 		<p className="text-base font-normal leading-6">
										// 			{article.date}
										// 		</p>
										// 	</div>
										// </Col>
									))}
								</div>
								<hr className="mb-[24px] mt-[40px]" />
							</div>
							<div className="section-cta">
								<div
									className="cta-block"
									onClick={() => navigateTo("/media")}
								>
									<span className="inline-block">
										{sectionData.ctaText}
									</span>{" "}
									<img
										src={`${process.env.PUBLIC_URL}/assets/img/icons/next-arrow-circle.svg`}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrendingSection;
