import { motion } from 'framer-motion';
import { modifyPath } from '../../../../utils/fetchFromApi';
import { fadeLeft } from '../../../../utils/scrollAnimations';

type CSRSecProps = {
	data: {
		title: string;
		desc: string;
		items: string[];
	};
	index: number;
};

const CSRSec = ({ data, index }: CSRSecProps) => {
	return (
		<div className="flex flex-col gap-[24px] xl:gap-[40px]">
			<motion.div
				className="flex w-full  gap-[12px] md:gap-[16px]  xl:gap-[20px] max-sm:flex-col max-sm:gap-[4px]"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				<div className="text-[24px] text-[#FFFFFF99] md:text-[32px] xl:text-[40px]">
					{'0' + (index+1)}
				</div>
				<div>
					<h4
						className="!bg-clip-text text-[24px] font-extrabold text-[#00000000] md:text-[32px] xl:text-[40px]"
						style={{
							background:
								'var(--Gradient-1, linear-gradient(315deg, #FF2525 -0.01%, #FF8743 100%))',
						}}
					>
						{data.title}
					</h4>
					<p className="mt-[8px] text-[16px] md:text-[20px] xl:mt-[12px] xl:text-[24px]">
						{data.desc}
					</p>
				</div>
			</motion.div>
			<motion.div
				className="flex flex-col gap-[6px] md:flex-row xl:gap-[12px]"
				variants={fadeLeft}
				initial={'hidden'}
				whileInView={'visible'}
			>
				{data.items.map((item, index) => {
					const url =
						item;
					const widthClass =
						index === 0 && data.items.length === 2
							? 'md:w-2/3'
							: 'md:w-1/3';

					return (
						<div className={widthClass} key={index}>
							<img
								src={modifyPath(url)}
								className="h-[240px] w-full object-cover md:h-full"
								key={index}
								alt=""
							/>
						</div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default CSRSec;
