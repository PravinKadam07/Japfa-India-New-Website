import { useState, useEffect } from 'react';
import { Header } from '../src/Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Poultry from './Pages/Feed/Poultry/Poultry';
import Cattle from './Pages/Feed/Cattle/Cattle';
import Aqua from './Pages/Feed/Aqua/Aqua';
import Swine from './Pages/Feed/Swine/Swine';
import FeedHome from './Pages/FeedHome/FeedHome';
import './index.css';
import Farm from './Pages/Farm/Farm';
import JapfaHome from './Pages/JapfaHome/JapfaHome';
import Food from './Pages/Food/Food';
import LeadershipHome from './Pages/Leadership/LeadershipHome';
import ReachUs from './Pages/ReachUs/ReachUs';
import Discover from './Pages/Discover/Discover';
import OurApproach from './Pages/OurApproach/OurApproach';
import MissionVision from './Pages/MissionVision/MissionVision';
import Career from './Pages/Career/Career';
import Download from './Pages/Download/Download';
import OurCommitments from './Pages/OurCommitments/OurCommitments';
import Media from './Pages/Media/Media';
import Suppliers from './Pages/Suppliers/Suppliers';
import OurJourney from './Pages/OurJourney/OurJourney';
import Loader from './utils/Loader';
import VideoBannerHome from './Pages/JapfaHome/VideoBannerHome';
import Article from './Pages/Media/Article/Article';
import Policy from './Pages/Policy/Policy';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" Component={JapfaHome} />
					<Route
						path="/videobannerhome"
						Component={VideoBannerHome}
					/>
					<Route path="/feed" Component={FeedHome} />
					<Route path="/farm" Component={Farm} />
					<Route path="/food" Component={Food} />
					<Route path="/poultry" Component={Poultry} />
					<Route path="/cattle" Component={Cattle} />
					<Route path="/aqua" Component={Aqua} />
					<Route path="/swine" Component={Swine} />
					<Route path="/leadership" Component={LeadershipHome} />
					<Route path="/contactus" Component={ReachUs} />
					<Route path="/discover" Component={Discover} />
					<Route path={`/ourapproach`} Component={OurApproach} />
					<Route path={`/missionvision`} Component={MissionVision} />
					<Route path={`/career`} Component={Career} />
					<Route path="/media" Component={Media} />
					<Route path="/downloads" Component={Download} />
					<Route path="/sustainability" Component={OurCommitments} />
					<Route path="/suppliers" Component={Suppliers} />
					<Route path="/ourjourney" Component={OurJourney} />
					<Route path="/media/article/:articleId" Component={Article} />
					<Route path="/policy" Component={Policy} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
