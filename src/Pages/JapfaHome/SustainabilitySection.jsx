import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fade, fadeLeft, fadeRight } from "../../utils/scrollAnimations";
import "./SustainabilitySection.css";

const SustainabilitySection = () => {
	const navigate = useNavigate();
	const navigateTo = (path) => {
		const navigateRoute = `${path}`;
		navigate(navigateRoute);
		window.scrollTo(0, 0);
	};
	return (
		<motion.section
			className="sustainability-top-padding max-mediumScreen:px-14 max-lg:px-8"
			variants={fade}
			initial="hidden"
			whileInView="visible"
		>
			<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<motion.div
								className="rays-title flex justify-center"
								variants={fadeRight}
								initial="hidden"
								whileInView="visible"
							>
								{/* <img
									src={
										window.innerWidth >= 1512
											? `${process.env.PUBLIC_URL}/assets/img/reimagining-sustainability.webp`
											: `${process.env.PUBLIC_URL}/assets/img/reimagining-sustainability-390.webp`
									}
									className="img-fluid"
									alt=""
								/> */}
								<h3 className="add-heading-icon add-heading-icon-reimagine font-extrabold text-[24px] md:text-[32px] xl:text-[40px]">Reimagining sustainability</h3>
							</motion.div>
							<motion.div
								className="rays-sub-title"
								variants={fadeLeft}
								initial="hidden"
								whileInView="visible"
							>
								JAPFA India is a part of a socially responsible
								business that believes in giving back to the
								society. Aligned with our global objective
								“Growing towards mutual prosperity,” we make
								some core pledges.
							</motion.div>
							<motion.div
								className="planet-one-img"
								variants={fadeRight}
								initial="hidden"
								whileInView="visible"
							>
								<img
									src={`${process.env.PUBLIC_URL}/assets/img/planet-one-people.svg`}
									className="img-fluid"
									alt=""
								/>
							</motion.div>
							<motion.div
								className="we-care"
								variants={fadeLeft}
								initial="hidden"
								whileInView="visible"
							>
								<div className="we-care-title">
									We care for –
								</div>
								<ul>
									<li>Environmental Sustainability</li>
									<li>Labour Practices, Health & Safety</li>
									<li>Consumer & Product Safety</li>
									<li>Social & Community Development</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
			<div className="box-layout-container">
				<div className="box-layout-row">
					<motion.div
						className="box-layout-col box-col-1"
						variants={fadeLeft}
						initial="hidden"
						whileInView="visible"
					>
						<div className="box-img">
							<img
								src={
									window.innerWidth <= 475
										? `${process.env.PUBLIC_URL}/assets/img/sustainability1-390.webp`
										: window.innerWidth <= 1600
										? `${process.env.PUBLIC_URL}/assets/img/sustainability1-1512.webp`
										: `${process.env.PUBLIC_URL}/assets/img/sustainability1.webp`
								}
								alt=""
							/>
						</div>
						<div className="box-content">
							<div className="box-layout-title">
								Our Environment
							</div>
							<div className="box-layout-desc">
								Pioneering solutions that minimize our carbon
								footprint and promote environmental
								sustainability.
							</div>
						</div>
					</motion.div>
					<motion.div
						className="box-layout-col box-col-2"
						variants={fadeLeft}
						initial="hidden"
						whileInView="visible"
					>
						<div className="box-img">
							<img
								src={
									window.innerWidth <= 475
										? `${process.env.PUBLIC_URL}/assets/img/sustainability2-390.webp`
										: window.innerWidth <= 1600
										? `${process.env.PUBLIC_URL}/assets/img/sustainability2-1512.webp`
										: `${process.env.PUBLIC_URL}/assets/img/sustainability2.webp`
								}
								alt=""
							/>
						</div>
						<div className="box-content">
							<div className="box-layout-title">
								Our Employees
							</div>
							<div className="box-layout-desc">
								We ensure adherence to the highest standards of
								health, safety, and labour practices.
							</div>
						</div>
					</motion.div>
				</div>
				<div className="box-layout-row">
					<motion.div
						className="box-layout-col box-col-3"
						variants={fadeLeft}
						initial="hidden"
						whileInView="visible"
					>
						<div className="box-img">
							<img
								src={
									window.innerWidth <= 475
										? `${process.env.PUBLIC_URL}/assets/img/sustainability3-390.webp`
										: window.innerWidth <= 1600
										? `${process.env.PUBLIC_URL}/assets/img/sustainability3-1512.webp`
										: `${process.env.PUBLIC_URL}/assets/img/sustainability3.webp`
								}
								alt=""
							/>
						</div>
						<div className="box-content">
							<div className="box-layout-title">
								Our Consumers
							</div>
							<div className="box-layout-desc">
								Our promise to our consumers extends far beyond
								quality, to include product safety.
							</div>
						</div>
					</motion.div>
					<motion.div
						className="box-layout-col box-col-4 [991px]:ml-[2px]"
						variants={fadeLeft}
						initial="hidden"
						whileInView="visible"
					>
						<div className="box-img">
							<img
								src={
									window.innerWidth <= 475
										? `${process.env.PUBLIC_URL}/assets/img/sustainability4-390.webp`
										: window.innerWidth <= 1600
										? `${process.env.PUBLIC_URL}/assets/img/sustainability4-1512.webp`
										: `${process.env.PUBLIC_URL}/assets/img/sustainability4.webp`
								}
								alt=""
							/>
						</div>
						<div className="box-content">
							<div className="box-layout-title">
								Our Communities
							</div>
							<div className="box-layout-desc">
								While rehabilitating communities, we strive to
								return manifold through schools, hospitals,
								clean energy solutions and more.
							</div>
						</div>
					</motion.div>
				</div>
			</div>
			<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<motion.div
								className="japfa-neeti-row"
								variants={fade}
								initial="hidden"
								whileInView="visible"
							>
								<div className="japfa-neeti-col">
									<div className="japfa-neeti-title">
										Educating and connecting with farmers
									</div>
								</div>
								<div className="japfa-neeti-col">
									<div className="japfa-neeti-content">
										<p>
										For over a decade, JAPFA India has been dedicated to fostering community building, promoting social welfare, and fulfilling its corporate social responsibility through JAPFANEETI.
										</p>
										<p>
										Educating, informing and connecting our partner farmers, while also providing support for their families, ensuring their growth and prosperity.
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
			<motion.div
				className="japfa-neeti-img-content"
				variants={fade}
				initial="hidden"
				whileInView="visible"
			>
				<div className="japfa-neeti-left">
					<img
						src={`${process.env.PUBLIC_URL}/assets/img/japfa-neeti1.svg`}
						alt=""
					/>
				</div>
				<div className="japfa-neeti-img">
					<img
						src={
							window.innerWidth < 575
								? `${process.env.PUBLIC_URL}/assets/img/japfa-neeti2-390.webp`
								: `${process.env.PUBLIC_URL}/assets/img/japfa-neeti2-1512.webp`
						}
						alt=""
					/>
				</div>
			</motion.div>
			<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8">
				<hr className="mb-[24px] mt-[40px]" />
				<motion.div
					className="section-cta"
					variants={fade}
					initial="hidden"
					whileInView="visible"
				>
					<div
						className="cta-block"
						onClick={() => navigateTo("/sustainability")}
					>
						<span className="inline-block">Our Commitments</span>{" "}
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/icons/next-arrow-circle.svg`}
							alt=""
						/>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default SustainabilitySection;
