import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../utils/scrollAnimations";
import fundamentalImage from '../../assets/fundamental_block.png';
import "./FundamentalBuildingSection.css";

const FundamentalBuildingSection = () => {
	const sectionData = {
		title: "The fundamental building",
		content:
			"Leveraging our stringent procurement processes and technology-enabled framework, we take meticulous care to ensure that only qualitative inputs find their way into the value chain, which thereby leads to the best output through our high-quality protein offerings.",
		imageSrc1: process.env.PUBLIC_URL + "/assets/img/blocks.webp",
		imageSrc2:
			process.env.PUBLIC_URL + "/assets/img/fundamental-block1.webp",
		ctaText: "Our Approach",
	};
	const navigate = useNavigate();
	const navigateTo = (path) => {
		const navigateRoute = `${path}`;
		navigate(navigateRoute);
		window.scrollTo(0, 0);
	};
	return (
		<section className="default-padding">
			<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="fundamental-row">
								<motion.div
									className="fundamental-content"
									variants={fadeLeft}
									initial="hidden"
									whileInView="visible"
								>
									<div className="fundamental-title">
										The fundamental <br /> building
									</div>
									<img
										src={sectionData.imageSrc1}
										className="img-fluid"
										alt=""
									/>
								</motion.div>
								<motion.div
									className="fundamental-image"
									variants={fadeRight}
									initial="hidden"
									whileInView="visible"
								>
									<img
										src={sectionData.imageSrc2}
										className="img-fluid"
										alt=""
									/>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fundamental-big-image">
				<motion.div
					className="big-image-container"
					variants={fadeLeft}
					initial="hidden"
					whileInView="visible"
				>
					<img
						src={
							window.innerWidth >= 1512 ? fundamentalImage : fundamentalImage
							// 	? process.env.PUBLIC_URL +
							// 	  "/assets/img/fundamental-block2-1512.webp"
							// 	: process.env.PUBLIC_URL +
							// 	  "/assets/img/fundamental-block2.webp"
						}
						className="img-fluid"
						alt=""
					/>
				</motion.div>
				<div className="big-image-content max-mediumScreen:pr-14 max-lg:pr-8">
					<motion.div
						className="big-image-title"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
					>
						Breathing life into our purpose:
						<hr />
					</motion.div>

					<motion.div
						className="big-image-details"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
					>
						{sectionData.content}
					</motion.div>
					<hr />
					<motion.div
						className="section-cta"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
					>
						<div
							className="cta-block"
							onClick={() => navigateTo("/ourapproach")}
						>
							<span>{sectionData.ctaText}</span>{" "}
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/icons/next-arrow-circle.svg"
								}
								alt=""
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default FundamentalBuildingSection;
