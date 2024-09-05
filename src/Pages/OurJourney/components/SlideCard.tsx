interface SlideCardProps {
	month: string;
	year: string;
	title?: string;
	description?: string;
	imageSrc: string;
}

const SlideCard: React.FC<SlideCardProps> = ({
	month,
	year,
	title,
	description,
	imageSrc,
}) => {
	return (
		<div className="slide-card flex h-full w-full">
			<div className="flex w-full items-start max-tabletMedium:flex-col md:gap-5 tabletMedium:my-auto tabletMedium:items-center lg:justify-between xl:gap-16">
				<div className="flex flex-col max-lg:max-w-[480px] lg:max-w-[380px] xl:max-w-[420px]">
					<div className="text-2xl font-extrabold text-[#EC691F] max-tabletMedium:text-[24px]">
						{month}
					</div>
					<div className="max-w-[255px] text-[88px] font-extrabold leading-tight text-black max-tabletMedium:mb-1 max-tabletMedium:text-[72px]">
						{year}
					</div>
					{/* title */}
					{title && (
						<div className="text-[32px] font-extrabold leading-tight text-black max-tabletMedium:text-[24px] tabletMedium:mb-[24px] lg:mb-1 lg:mt-[16px]">
							{title}
						</div>
					)}
					{/* description */}
					{description && (
						<div className="text-xl font-normal text-black max-sm:text-[16px] lg:text-[20px]">
							{description}
						</div>
					)}
				</div>
				{/* image */}
				<div className="w-full max-tabletMedium:mt-[24px] max-tabletMedium:max-h-[364px] lg:max-w-[520px] 2xl:max-w-[684px]">
					<img
						src={imageSrc}
						alt={title}
						className="w-full rounded-[40px_0_0_0] max-tabletMedium:h-full max-tabletMedium:object-cover max-tabletMedium:object-center md:rounded-[60px_0_0_0]"
					/>
				</div>
			</div>
		</div>
	);
};
export default SlideCard;
