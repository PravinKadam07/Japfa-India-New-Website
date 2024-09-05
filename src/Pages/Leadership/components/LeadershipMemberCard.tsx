interface LeadershipMemberCardProps {
	id: number;
	imageSrc: string;
	name: string;
	about: string;
	handleModal: Function;
}
const LeadershipMemberCard = ({
	id,
	imageSrc,
	name,
	about,
	handleModal,
}: LeadershipMemberCardProps) => {
	return (
		<div
			className="leadership-member-card mb-5 flex cursor-pointer flex-col md:mb-0"
			onClick={() => handleModal(id, true)}
		>
			<img src={imageSrc} alt={name} className="profile-img w-full" />
			<div className="flex-grow bg-[#F7F9FC] p-5 md:min-h-[102px]">
				<p className="mb-2 text-xl font-extrabold leading-[120%]">
					{name}
				</p>
				<p className="text-[14px] leading-[120%] md:text-[12px] lg:text-[14px]">
					{about}
				</p>
			</div>
		</div>
	);
};

export default LeadershipMemberCard;
