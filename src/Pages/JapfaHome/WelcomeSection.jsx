import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./WelcomeSection.css";
import { fadeUp, fadeRight } from "../../utils/scrollAnimations";

const welcomeData = {
	title: "Welcome to the world of",
	imgSrc: `${process.env.PUBLIC_URL}/assets/img/japfa-india.svg`,
	description: [
		"We are a pioneering industrial agri-food company with a mission to nourish and empower emerging India with essential proteins.",
		"We are proud advocates of sustainable animal agriculture and responsible food production, offering an integrated solution that spans from feed to farm to food.",
	],
};

const WelcomeSection = () => {
	const navigate = useNavigate();
	const navigateTo = (path) => {
		const navigateRoute = `${path}`;
		navigate(navigateRoute);
		window.scrollTo(0, 0);
	};
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Define different image sources for different screen sizes
	const imageSrc =
		screenWidth > 1920
			? `${process.env.PUBLIC_URL}/assets/img/welcome-japfa-1920.webp`
			: screenWidth >= 1512
			? `${process.env.PUBLIC_URL}/assets/img/welcome-japfa.webp`
			: `${process.env.PUBLIC_URL}/assets/img/welcome-japfa.webp`;

	return (
		<section className="welcome-top-padding">
			<div className={`welcome-japfa`}>
				<div className="welcome-right mobile">
					<motion.div
						className="welcome-title"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
					>
						{welcomeData.title}
					</motion.div>
					<motion.div
						className="welcome-img"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
					>
						<img src={welcomeData.imgSrc} alt="" />
					</motion.div>
				</div>
				<motion.div
					className="welcome-left"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
				>
					<img src={imageSrc} className="img-fluid" alt="" />
				</motion.div>
				<div className="welcome-right desktop">
					<motion.div
						className="welcome-title"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
					>
						{welcomeData.title}
					</motion.div>
					<motion.div
						className="welcome-img"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
					>
						<img src={welcomeData.imgSrc} alt="" />
					</motion.div>
					<motion.div
						className="welcome-desc"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
					>
						{welcomeData.description.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</motion.div>
				</div>
			</div>
			<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
				<hr className="mx-auto mb-[24px] mt-[40px] max-sm:mb-[16px]" />
				<div
					className="section-cta"
					onClick={() => navigateTo("/discover")}
				>
					<div className="cta-block">
						<span className="inline-block">About us</span>{" "}
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/icons/next-arrow-circle.svg`}
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WelcomeSection;
