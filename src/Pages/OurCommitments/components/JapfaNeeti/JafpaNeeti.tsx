import { motion } from 'framer-motion';
import {
	fadeRight,
	fadeUp
} from '../../../../utils/scrollAnimations';

const JapfaNeeti = () => {
	const highlights = [
		{
			title: 'Farmer connect programs',
			desc: 'Best practices for best results',
		},
		{
			title: 'Appreciating efforts',
			desc: 'Recognizing excellence',
		},
		{
			title: 'Exploring innovation',
			desc: 'Networking for new tech and innovation',
		},
		{
			title: 'Knowledge empowerment',
			desc: 'Upgrades through digital channels',
		},
	];

	return (
		<>
			<section className="mx-auto max-w-japfaGrid py-[80px] max-mediumScreen:px-8 max-md:pl-0 max-md:pr-8 md:py-[100px] xl:py-[120px]" id='japfaneeti'>
				<motion.div
					className="flex justify-center"
					variants={fadeUp}
					initial={'hidden'}
					whileInView={'visible'}
				>
					<img
						className="hidden md:block md:max-w-[594px] lg:w-[1061px] lg:max-w-[800px]"
						src={`${process.env.PUBLIC_URL}/assets/img/japfa-neeti-title.webp`}
						alt=""
					/>
					<img
						className="w-[290px] md:hidden"
						src={`${process.env.PUBLIC_URL}/assets/img/japfa-neeti-title-sm.webp`}
						alt=""
					/>
				</motion.div>
				<motion.div
					className="mt-[40px] text-center max-md:mb-[28px] max-md:mt-[12px] md:mb-[60px] md:mt-[24px] xl:mt-[40px]"
					variants={fadeUp}
					initial={'hidden'}
					whileInView={'visible'}
				>
					<span className="text-[24px] font-light sm:text-[24px] md:text-[24px] md:leading-[normal] lg:text-[40px]">
						Bridging our sustainability initiatives
					</span>
				</motion.div>

				<div className="flex flex-col gap-[60px] md:gap-[80px]">
					<div className="flex flex-col items-center gap-[40px] sm:flex-row md:gap-[49px] lg:gap-[120px] xl:gap-[123px] 2xl:gap-[145px]">
						<motion.div
							className="h-[366px] w-[366px] md:h-[329px] md:w-[344px] lg:w-[480px] xl:h-[445px] xl:w-[444px] xl:min-w-[566px]"
							variants={fadeUp}
							initial={'hidden'}
							whileInView={'visible'}
						>
							<picture>
								<source
									srcSet={`${process.env.PUBLIC_URL}/assets/img/japfa-neeti-sub1.webp`}
									media="(max-width: 767px)"
								/>
								<source
									srcSet={`${process.env.PUBLIC_URL}/assets/img/japfa-neeti-sub2.webp`}
									media="(min-width: 768px) and (max-width: 1279px)"
								/>
								<source
									srcSet={`${process.env.PUBLIC_URL}/assets/img/japfa-neeti-sub3.webp`}
									media="(min-width: 1280px) and (max-width: 1919px)"
								/>
								<source
									srcSet={`${process.env.PUBLIC_URL}/assets/img/japfa-neeti-sub4.webp`}
									media="(min-width: 1920px)"
								/>
								<img
									src={`${process.env.PUBLIC_URL}/assets/img/japfa-neeti-sub1.webp`}
									className="h-full w-full object-cover md:rounded-[0px_80px_80px_0]"
									alt=""
									loading="lazy"
								/>
							</picture>
						</motion.div>
						<motion.div
							className="w-[342px] xl:w-[563px]"
							variants={fadeRight}
							initial={'hidden'}
							whileInView={'visible'}
						>
							<div className="mb-[16px] h-[2px] w-[94px] bg-black"></div>
							<p className="w-full text-[16px] xl:text-[20px]">
								JAPFANEETI is the common thread that binds all
								our sustainability initiatives. We reach out to
								our community of partner farmers by offering
								access to bleeding-edge knowledge through info
								snippets and tips, and dissemination of
								best-in-class practices in animal agriculture
								and protein production across the value chain.
							</p>
						</motion.div>
					</div>
				</div>
			</section>
			<div className="flex flex-col-reverse items-center justify-between gap-[40px] md:flex-row md:gap-[48px] xl:gap-[123px] 2xl:gap-[142px]">
				<motion.div
					className="flex w-full flex-col gap-[40px] max-md:gap-[24px]  xl:px-0 mediumScreen:ml-[calc((100vw-1352px)/2)]"
					variants={fadeUp}
					initial={'hidden'}
					whileInView={'visible'}
				>
					<h5 className="text-[24px] font-extrabold max-mediumScreen:px-8 lg:w-[566px] xl:text-[32px]">
						Contributing to knowledge, skill, growth and mutual
						prosperity
					</h5>
					<p className="w-full text-[16px] max-mediumScreen:px-8  md:w-[342px] lg:w-[566px] xl:text-[20px]">
						It is a platform created for our farmer partners for
						knowledge upgrades and exchange, besides disseminating
						information online and offline, by partnering industry
						leaders in the animal protein business.
						<br />
						<br />
						As a responsible organization we understand the
						important role we play in not only the upliftment of our
						partner farmers but also making good always, on our
						promises to our employees, the environment, our
						consumers and communities.
					</p>
				</motion.div>
				<motion.div
					className="mediumScreeen:max-w-[calc(100vw/2)] w-full"
					variants={fadeRight}
					initial={'hidden'}
					whileInView={'visible'}
				>
					<img
						src={
							process.env.PUBLIC_URL +
							'/assets/img/japfa-neeti-subb1.webp'
						}
						className="h-full w-full object-fill md:hidden"
						alt=""
					/>
					<img
						src={
							process.env.PUBLIC_URL +
							'/assets/img/japfa-neeti-subb2.webp'
						}
						className="hidden h-full w-full object-fill md:block xl:hidden"
						alt=""
					/>
					<img
						src={
							process.env.PUBLIC_URL +
							'/assets/img/japfa-neeti-subb3.webp'
						}
						className="hidden h-full w-full object-fill xl:block 2xl:hidden"
						alt=""
					/>
					<img
						src={
							process.env.PUBLIC_URL +
							'/assets/img/japfa-neeti-subb4.webp'
						}
						className="hidden h-full w-full object-fill 2xl:block"
						alt=""
					/>
				</motion.div>
			</div>

			<section className="mx-auto max-w-japfaGrid py-[80px] max-mediumScreen:px-8 md:py-[100px] xl:py-[120px]">
				<div className="mt-[40px] md:mt-[80px]">
					<motion.h2
						className="mb-[24px] text-[32px] font-extrabold xl:mb-[40px] xl:text-[40px]"
						variants={fadeUp}
						initial={'hidden'}
						whileInView={'visible'}
					>
						Key highlights
					</motion.h2>
					<motion.div
						className="flex flex-wrap gap-[12px] md:gap-[20px] xl:gap-[24px]"
						variants={fadeUp}
						initial={'hidden'}
						whileInView={'visible'}
					>
						{highlights.map((item, index) => (
							<div
								key={index}
								className="w-full rounded-xl border border-[color:var(--Text-and-divider-divider-colour,#DDD)] p-[20px] md:w-[calc(50%-10px)] xl:w-[calc((100%-72px)/4)]"
							>
								<div className="mb-[24px]">
									<img
										src={`${
											process.env.PUBLIC_URL
										}/assets/img/keyhighlight${index + 1}.webp`}
										className="h-20 w-20 xl:h-[110px] xl:w-[110px]"
										alt=""
									/>
								</div>
								<h5 className="text-[24px] font-extrabold">
									{item.title}
								</h5>
								<p className="text-[20px]">{item.desc}</p>
							</div>
						))}
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default JapfaNeeti;
