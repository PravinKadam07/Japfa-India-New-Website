interface DetailsProps {
	name: string;
	address: string;
}
const LocationDetails = ({ name, address }: DetailsProps) => {
	return (
		<div className="relative w-full rounded-md bg-white md:my-auto">
			<div className="locationText mb-1 pl-[16px] text-[16px] font-extrabold text-black md:text-[20px]">
				{name}
			</div>
			<div className="pl-[16px] text-[14px] text-black md:text-[16px]">
				{address}
			</div>
		</div>
	);
};
export default LocationDetails;
