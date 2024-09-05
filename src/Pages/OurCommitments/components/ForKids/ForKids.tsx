import { motion } from 'framer-motion';
import {
	fadeLeft,
	fadeRight,
	fadeUp,
} from '../../../../utils/scrollAnimations';

const ForKids = () => {
	return (
		<section className="mx-auto flex max-w-japfaGrid flex-col items-center py-[60px] md:py-[100px] xl:mx-0 xl:max-w-[unset] xl:py-[120px]">
			<motion.div
				className="flex flex-wrap justify-center md:gap-[8px]"
				variants={fadeUp}
				initial={'hidden'}
				whileInView={'visible'}
			>
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/4Kids1.webp`}
					className="w-[322px] md:w-[440px] xl:w-[598px]"
					alt=""
				/>
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/4Kids2.webp`}
					className="h-[74px] w-[127px] md:h-[110px] md:w-[187px] md:translate-y-[13.5px] xl:h-[148px] xl:w-[253px] xl:translate-y-[20px]"
					alt=""
				/>
			</motion.div>
			<motion.p
				className="mb-[40px] mt-[16px] w-[342px] text-center text-[20px] md:mb-[60px] md:mt-[4px] md:w-auto md:text-[24px] xl:mb-[80px] xl:mt-[25px] xl:text-[32px]"
				variants={fadeUp}
				initial={'hidden'}
				whileInView={'visible'}
			>
				Empowering Tomorrow's Leaders Today
			</motion.p>

			<div className="flex w-full items-center max-md:items-center max-md:justify-between max-sm:flex-col max-sm:gap-[24px] md:flex-row md:gap-[40px] lg:gap-[120px] xl:gap-[120px]">
				<div className="h-[355px] w-full md:h-[400px] md:w-[374px] lg:w-[628px] xl:h-[540px] xl:w-[744px] 2xl:w-[613px]">
					<picture>
						<source
							srcSet={`${process.env.PUBLIC_URL}/assets/img/4Kids_sub1.webp`}
							media="(max-width: 767px)"
						/>
						<source
							srcSet={`${process.env.PUBLIC_URL}/assets/img/4Kids_sub2.webp`}
							media="(min-width: 768px) and (max-width: 1279px)"
						/>
						<source
							srcSet={`${process.env.PUBLIC_URL}/assets/img/4Kids_sub3.webp`}
							media="(min-width: 1280px) and (max-width: 1919px)"
						/>
						<img
							src={`${process.env.PUBLIC_URL}/assets/img/4Kids_sub4.webp`}
							className="h-full w-full max-md:object-cover lg:object-cover"
							alt=""
						/>
					</picture>
				</div>
				<motion.div
					className="w-[342px] text-[16px] max-md:w-full max-md:pl-8 max-md:pr-8 md:mr-[32px] md:w-[312px] lg:w-[40%] xl:mr-[61px] xl:w-[469px] xl:text-[20px] 2xl:mr-[58px] 2xl:w-[566px]"
					variants={fadeLeft}
					initial={'hidden'}
					whileInView={'visible'}
				>
					<div className="mb-0 mt-[40px] h-[2px] w-[60px] bg-black md:my-0 xl:w-[94px]"></div>
					<br />
					As an integral part of our community growth and CSR
					initiatives, JAPFA India leaves no stone unturned in taking
					care of its future generations. JAPFA-4-Kids takes care of
					the young minds in its community by supporting their
					infrastructure, hygiene and nutritional needs.
					<br />
					<br />
					To empower them with the knowledge, skill and resources,
					while ensuring academic and overall personal development,
					JAPFA India has constructed schools, offers educational
					support, engages them in cultural activities and much more.
				</motion.div>
			</div>
		</section>
	);
};

export default ForKids;
