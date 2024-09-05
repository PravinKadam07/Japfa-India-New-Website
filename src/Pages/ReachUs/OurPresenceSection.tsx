import { useEffect, useRef, useState } from 'react';
import LocationDetails from './components/LocationDetails';
import OurPresenceMap from './components/OurPresenceMap';
import { useInView } from 'react-intersection-observer';

interface LocationData {
	name: string;
	address: string;
}
const OurPresenceSection = () => {
	const [currentLocationData, setCurrentLocationData] = useState<
		LocationData[]
	>([]);
	const [selectedStateName, setSelectedStateName] = useState('');
	const stateWithPresence = ['up', 'br', 'wb', 'mh', 'tg'];
	const stateFullName = {
		up: 'Uttar Pradesh (East)',
		br: 'Bihar (East)',
		wb: 'West Bengal (East)',
		mh: 'Maharashtra (West)',
		tg: 'Telangana (South)',
	};
	const statePresenceData = {
		up: [
			{
				name: `Jagdishpur feed mill`,
				address: `Plot No. A1, B2, B3 & B4, Jagdishpur industrial area, Village- Utewala, Paragana Jagdishpur, Tahsil- Musafirnaka, Dist- Sultanpur- 227817`,
			},
		],
		br: [
			{
				name: `Vaishali feed mill`,
				address: `Village- Chakjoda, Near NH 28, P.O.- Kabadih, P.S. - Baligaon, Subdivision- Hazipur, Dist- Vaishali 843104 (Bihar).`,
			},
		],
		wb: [
			{
				name: `Kharagpur feed mill`,
				address: `Plot no. 04, Sector B, Industrial growth centre, WBIIDC, Nimpura, Dist- Pashchim medinapur, 721301 (West Bengal)`,
			},
		],
		mh: [
			{
				name: `Supa feed mill`,
				address: `A-11, MIDC, Supa Parner Growth Ventre, Pune Nagar Road, Tal.Parner, Dist. Ahmednagar-424 101 (Maharashtra).`,
			},
			{
				name: `Registered office`,
				address: `Plot No. 91, Sakore Nagar, Viman Nagar, Pune - 411014`,
			},
			{
				name: `PS farm- 1 (S.K.) `,
				address: `Survey No. 209, Gat No. 184, Shirasgoan Kata, Tal- Shirur, Dist- Pune- 412210`,
			},
			{
				name: `Pedgoan daund slaughter house `,
				address: `Gut No. 199 & 202, (Pedgoan) Tal- Daund, Dist- Pune-413801`,
			},
			{
				name: `Central hatchery pisavare`,
				address: `Gat No. 662, Village Pisavare, Taluka Bhor, District Pune - 412206`,
			},
		],
		tg: [
			{
				name: 'Kondamadugu feed mill',
				address: `Plot no. 04, Sector B, Industrial
				growth centre, WBIIDC, Nimpura,
				Dist- Pashchim medinapur,
				721301 (West Bengal)`,
			},
			{
				name: `Edulabad hatchery
				Telangana (South)`,
				address: `Survey No. 16,17 & 18, Edulabad ghatkesar mandal, Dist- Ranga reddy, Hyderabad- 501301`,
			},
		],
	};
	const handleStateClick = (e: any) => {
		const loc = e.target.id;
		setCurrentLocationData(
			// @ts-ignore
			statePresenceData[loc] ? statePresenceData[loc] : [],
		);
		setSelectedStateName(stateFullName[loc as keyof typeof stateFullName]);
		// const locationTag = sdocument.querySelector('.locationTag');
		// // @ts-ignore
		// locationTag.style.visibility = 'visible';
		// // @ts-ignore
		// let leftPos = `calc(${e.clientX}px - ${locationTag.offsetWidth / 2}px)`;
		// // @ts-ignore
		// let topPos = `calc(${e.clientY}px - ${locationTag.offsetHeight}px)`;
		// // @ts-ignore
		// locationTag.style.left = leftPos;
		// // @ts-ignore
		// locationTag.style.top = topPos;
		// // @ts-ignore
		// document.addEventListener('scroll', () => {
		// 	// @ts-ignore
		// 	document.querySelector('.locationTag').style.visibility = 'hidden';
		// 	document.removeEventListener('scroll', () => {
		// 		return;
		// 	});
		// });
	};
	useEffect(() => {
		setSelectedStateName(stateFullName['mh']);
		setCurrentLocationData(
			statePresenceData['mh'] ? statePresenceData['mh'] : [],
		);
	}, []);
	return (
		<div className="relative mx-auto my-[80px] max-w-japfaGrid max-mediumScreen:px-14 max-lg:px-8 lg:my-[120px]">
			<h2 className="text-5xl font-extrabold text-black lg:text-7xl">
				Our Presence
			</h2>
			<p className="mb-16 ml-2 text-sm italic lg:mb-20">
				Click on the active states to view location details.
			</p>
			<div className="locationMarker fixed">
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/map-marker.svg`}
					alt=""
				/>
			</div>
			{/* <div className="locationTag fixed">
				<LocationDetails
					name="Jagdishpur feed mill
Uttar pradesh (East)"
					address="Plot No. A1, B2, B3 & B4, Jagdishpur industrial area, Village- Utewala, Paragana Jagdishpur, Tahsil- Musafirnaka, Dist- Sultanpur- 227817"
				/>
			</div> */}
			<div className="map-wrapper grid grid-cols-6 items-center lg:gap-x-12">
				<div className="col-span-6 sm:col-span-3">
					<OurPresenceMap
						handleStateClick={handleStateClick}
						activeStates={stateWithPresence}
					/>
				</div>
				<div
					className="col-span-6 sm:col-span-3"
					id="locationDetailsList"
				>
					{currentLocationData.length > 0 && (
						<div className="flex max-w-[450px] flex-col gap-6 rounded-[20px] p-[16px] shadow-[1px_1px_20px_0px_rgba(0,0,0,0.08)] md:p-[24px] lg:p-[40px]">
							<div className="text-[20px] font-extrabold text-black md:text-[24px] lg:text-[32px]">
								{selectedStateName}
							</div>
							{currentLocationData.map((item, index) => (
								<>
									<LocationDetails
										name={item.name}
										address={item.address}
										key={index}
									/>
								</>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default OurPresenceSection;
