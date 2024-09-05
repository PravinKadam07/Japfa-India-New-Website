import { motion } from 'framer-motion';
import { fadeUp } from '../../../../utils/scrollAnimations';
import IndustryStandardsColumn from './IndustryStandardsColumn';
interface IndustryStandardsProps {
	industryStandardColumns: {
		id: number;
		iconUrl: string;
		title: string;
		text: string;
		bgImageClass: string;
	}[];
	title?: string;
	useRedTheme?: boolean;
}
const IndustryStandards = ({
	industryStandardColumns,
	title,
	useRedTheme,
}: IndustryStandardsProps) => {
	const titleSplit = title && title.split('/n');
	return (
		<div
			className={`mx-auto ${
				title && 'mt-36 lg:mt-[200px] max-sm:mt-[80px]'
			} max-w-japfaGrid max-mediumScreen:px-2 `}
		>
			{title && (
				<motion.div
					className="add-heading-icon industry-standard-icon max-md:text-[48px] add-heading-icon-2 mx-auto w-fit whitespace-pre-line text-center text-5xl font-light text-stone-900 max-md:mt-10 max-sm:text-[32px] lg:text-7xl max-sm:px-8"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
				>
					{titleSplit &&
						titleSplit.map((item, index) => (
							<div key={index} className="mx-auto w-fit">
								{item}
							</div>
						))}
				</motion.div>
			)}
			<div className="scrollable-container mt-[60px] flex justify-center max-sm:flex-nowrap max-sm:justify-start max-sm:overflow-x-scroll sm:flex-wrap">
				{industryStandardColumns.map((column) => (
					<IndustryStandardsColumn
						key={column.id}
						{...column}
						fourColumnLayout={industryStandardColumns.length === 4}
						useRedTheme={useRedTheme}
					/>
				))}
			</div>
		</div>
	);
};

export default IndustryStandards;
