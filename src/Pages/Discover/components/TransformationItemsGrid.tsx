import { motion } from 'framer-motion';
import TransformationItem from './TransformationItem';
import { fadeLeft } from '../../../utils/scrollAnimations';
interface TransformationItemsGridProps {
	data: {
		id: number;
		figure: string;
		description: string;
	}[];
	useRedTheme?: boolean;
}

const TransformationItemsGrid = ({
	data,
	useRedTheme,
}: TransformationItemsGridProps) => {
	return (
		<div className="grid grid-cols-12 justify-between lg:gap-y-20">
			{data.map((item) => (
				<motion.div
					className="col-span-12 mb-6 sm:col-span-6 md:col-span-4 lg:mb-10"
					key={item.id}
					initial="hidden"
					whileInView="visible"
					variants={fadeLeft}
				>
					<TransformationItem
						figure={item.figure}
						description={item.description}
						useRedTheme={useRedTheme}
					/>
				</motion.div>
			))}
		</div>
	);
};

export default TransformationItemsGrid;
