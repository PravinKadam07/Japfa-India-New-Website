import HomeBanner from '../FeedHome/components/HomeBanner';
import CSR from './components/CSR/CSR';
import ForKids from './components/ForKids/ForKids';
import JapfaNeeti from './components/JapfaNeeti/JafpaNeeti';
import PlanetOnePeople from './components/OnePlanetPeople/OnePlanetPeople';
import OurAbouts from './components/OurAbouts/OurAbouts';

const OurCommitments = () => {
	const homeBannerData = {
		imageUrl: `${process.env.PUBLIC_URL}/assets/img/our_commitments.webp`,
		title: ['', 'Responsible by choice. Sustainable by design'],
		content:
			"At JAPFA India, our dedication to sustainability transcends corporate objectives; it's a collective responsibility. Our sustainability goals harmoniously align with our global mission of mutual prosperity. We irrevocably uphold four core promises, each resonating with our greater commitment to the well-being of our consumers, communities, employees, and the environment.",
	};

	return (
		<>
			<HomeBanner
				imageUrl={homeBannerData.imageUrl}
				title={homeBannerData.title}
				content={homeBannerData.content}
			/>
			<PlanetOnePeople />
			<OurAbouts />
			<JapfaNeeti />
			<CSR />
			<ForKids />
		</>
	);
};

export default OurCommitments;
