import React from "react";
import "./JapfaHome.css";
import MainBannerCarousel from "./MainBannerCarousel";
import WelcomeSection from "./WelcomeSection";
import JourneySection from "./Journey/JourneySection";
import GrowJapfaSection from "./GrowJapfaSection";
import FundamentalBuildingSection from "./FundamentalBuildingSection";
import SustainabilitySection from "./SustainabilitySection";
import TrendingSection from "./TrendingSection";

const JapfaHome = () => {
	// React.useEffect(() => {
	// 	const fetchBannerData = async () => {
	// 		try {
	// 			const bannerData = await fetchHomePageBannerData();
	// 			console.log(bannerData);
	// 		} catch (error) {
	// 			console.error('Error fetching home page banner data:', error);
	// 		}
	// 	};

	// 	fetchBannerData();
	// }, []);

	return (
		<div className="overflow-x-hidden">
			<MainBannerCarousel />
			<WelcomeSection />
			<JourneySection />
			<GrowJapfaSection />
			<FundamentalBuildingSection />
			<SustainabilitySection />
			<TrendingSection />
		</div>
	);
};

export default JapfaHome;
