import React from 'react';
import '../FeedHome.css';
import CustomParagraph from '../../Farm/CustomParagraph';

interface HomeBannerProps {
	imageUrl: string;
	title: string[];
	content: string;
	useRedTheme?: boolean;
}

const HomeBanner = ({
	imageUrl,
	title,
	content,
	useRedTheme,
}: HomeBannerProps) => {
	return (
		<section
			className={`${
				useRedTheme ? 'bg-[#f7f7f7]' : 'bg-[#160700]'
			} pt-10 max-md:pb-10 md:px-6 md:pt-12 xl:pt-16`}
		>
			<div
				className={`mx-auto ${
					useRedTheme
						? 'max-w-[920px] xl:max-w-[1236px]'
						: 'max-w-[920px] xl:max-w-[1140px]'
				}`}
			>
				<div
					className={`animate-fade-right font-bold animate-normal animate-duration-[900ms] animate-ease-in ${
						useRedTheme ? 'text-[#CD202F]' : 'text-white'
					} max-md:px-7 max-md:text-5xl md:text-6xl xl:text-[72px] semiMediumScreen:text-[88px]`}
				>
					{title[0]}
					<div className="mt-4">
						{title[1]}
					
					</div>
				</div>

				<div className="mt-20 max-md:mr-0.5 max-md:mt-10">
					<div className="flex justify-between gap-5  max-sm:flex-col max-sm:gap-0 md:items-stretch xl:items-center">
						<div className="w-full max-w-[566px] max-md:px-6 md:w-[50%]">
							<img
								src={imageUrl}
								className="h-full animate-fade-right rounded-tr-[60px] animate-normal animate-duration-[900ms] animate-fill-forwards animate-once animate-ease-in max-sm:w-full"
								alt=""
							/>
						</div>
						<div className=" w-[90%] animate-fade-left animate-normal animate-duration-[900ms] animate-ease-in max-md:ml-0 max-md:mt-10 max-md:w-full max-md:px-6 md:w-[40%]">
							<div
								className={`max-w-full whitespace-pre-line text-base ${
									useRedTheme
										? 'text-[#1E140F]'
										: 'text-white'
								} max-sm:pb-8 md:pb-8 lg:text-xl xl:pb-0`}
							>
								<CustomParagraph
									text={content}
									classes="leading-[160%]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;
