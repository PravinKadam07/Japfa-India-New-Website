import { motion } from 'framer-motion';
import './Policy.css';
import PdfTile from './components/PolicyPdf';
const Policy = () => {
	return (
		<>
			<section className=" flex justify-center bg-[#160700] py-[60px] ps-8 align-middle lg:ps-14 xl:py-[80px] ">
				<motion.div
					className="my-auto flex items-center justify-center text-5xl font-bold leading-[120%] text-white sm:w-[60%] md:w-[60%] lg:text-[48px] xl:text-[72px] semiMediumScreen:text-[84px]"
					// variants={fadeLeft}
					initial="hidden"
					whileInView={'visible'}
				>
					Policy
				</motion.div>
			</section>
			<div className="PdfTileLayout flex-wrap max-md:mb-[80px] max-md:flex max-md:flex-col">
				<PdfTile />
			</div>
		</>
	);
};
export default Policy;
