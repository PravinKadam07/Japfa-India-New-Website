import ApproachStepDisplay from './ApproachStepDisplay';
import ApproachStepsGSAP from './ApproachStepsGSAP';

interface ApproachStepWrapperProps {
	stepDisplayData: {
		imageSrc: string;
		stepCount: string;
		stepTitle: string;
		orderReverse?: boolean;
		imgMaxWidth:string;
		sectionType: string;
	};
	cardsData: {
		id: number;
		title: string;
		description?: string;
		imageSrc?: string;
	}[];
}

const ApproachStepWrapper = ({
	stepDisplayData,
	cardsData,
}: ApproachStepWrapperProps) => {
	return (
		<div className="approach-steps-wrapper my-20 lg:my-[120px]">
			<ApproachStepDisplay
				imageSrc={stepDisplayData.imageSrc}
				stepCount={stepDisplayData.stepCount}
				stepTitle={stepDisplayData.stepTitle}
				orderReverse={stepDisplayData.orderReverse}
				imgMaxWidth={stepDisplayData.imgMaxWidth}
				sectionType={stepDisplayData.sectionType}
			/>
			<div className="mx-auto max-w-japfaGrid max-mediumScreen:px-8">
				<ApproachStepsGSAP cardsData={cardsData} />
			</div>
		</div>
	);
};

export default ApproachStepWrapper;
