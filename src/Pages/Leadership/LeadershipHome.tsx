import { useEffect, useState } from 'react';
import { fetchLeadershipTeam } from '../../utils/fetchFromApi';
import './Leadership.css';
import TanYongNang from './components/FeatureVideoSection';
import Leadership from './components/Leadership';
import LeadershipTestimonials from './components/LeadershipTestimonials';
import SecondaryPagesBanner from './components/SecondaryPagesBanner';
import './Leadership.css';

type LeadershipMembersType = {
	id: number;
	img: string;
	name: string;
	about: string;
	description: string;
};
const LeadershipHome = () => {
	const bannerData = {
		title: 'Leading with purpose:',
		subtitle: 'Meet our leadership',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/leadership-home-banner.webp`,
	};

	const [leadershipMembers, setLeadershipMembers] = useState<
		LeadershipMembersType[]
	>([
		{
			id: 0,
			img: '',
			name: '',
			about: '',
			description: '',
		},
	]);

	useEffect(() => {
		fetchLeadershipTeam()
			.then((data) => {
				setLeadershipMembers(
					data.map((item: any, index: number) => ({
						id: index + 1,
						img: item.acf['profile_image'],
						name: item.acf.name,
						about: item.acf.designation,
						description: item.acf.profile_summary,
					})),
				);
			})
			.catch((error) => console.log(error));
		console.log('🚀 ~ useEffect ~ ̥', leadershipMembers);
	}, []);
	return (
		<>
			<SecondaryPagesBanner data={bannerData} />
			<TanYongNang />
			{leadershipMembers && (
				<Leadership leadershipMembers={leadershipMembers} />
			)}
			<LeadershipTestimonials />
		</>
	);
};

export default LeadershipHome;
