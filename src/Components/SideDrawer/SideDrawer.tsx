import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import { IoChevronUp, IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
interface SideDrawerProps {
	toggleDrawer: any;
	drawerOpen: any;
	isActive: any;
}

const SideDrawer: React.FC<SideDrawerProps> = ({
	toggleDrawer,
	drawerOpen,
	isActive,
}) => {
	const closeDrawer = () => {
		toggleDrawer();
	};
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const socialIcons = [
		{
			img: 'facebook-icon.svg',
			path: 'https://www.facebook.com/JAPFAIndia/',
		},
		{
			img: 'linkedin-icon.svg',
			path: 'https://www.linkedin.com/company/japfa-comfeed-india-pvt-ltd/',
		},
		{
			img: 'youtube-icon.svg',
			path: 'https://www.youtube.com/@japfaindia4324',
		},
		// 'twitter-icon.svg',
	];

	const drawerItemsDesktop = [
		{ title: 'Discover', path: '/discover' },
		{ title: 'Mission-Vision', path: '/missionvision' },
		{ title: 'Our Journey', path: '/ourjourney' },
		{ title: 'Leadership', path: '/leadership' },
		{ title: 'News and media', path: '/media' },
		{ title: 'Downloads', path: '/downloads' },
		{ title: 'Suppliers', path: '/suppliers' },
	];
	const drawerItemsMobile2 = [
		{ title: 'Our Approach', path: '/ourapproach' },
		{ title: 'Our Commitments', path: '/sustainability' },
		{ title: 'Life @ JAPFA', path: '/career' },
		{ title: 'News and media', path: '/media' },
		{ title: 'Downloads', path: '/downloads' },
		{ title: 'Suppliers', path: '/suppliers' },
	];
	const drawerItemsMobile = [
		{
			mainTitle: 'What we do?',
			dataItems: [
				{
					title: 'Feed',
					path: '/feed',
				},
				{
					title: 'Farm',
					path: '/farm',
				},
				{
					title: 'Food',
					path: '/food',
				},
			],
		},
		{
			mainTitle: 'Who are we?',
			dataItems: [
				{ title: 'Discover', path: '/discover' },
				{ title: 'Mission-Vision', path: '/missionvision' },
				{ title: 'Our Journey', path: '/ourjourney' },
				{ title: 'Leadership', path: '/leadership' },
			],
		},
	];

	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		const checkScreenSize = () => {
			if (window.innerWidth < 1024) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);

		return () => {
			window.removeEventListener('resize', checkScreenSize);
		};
	}, []);

	const navigate = useNavigate();
	const navigateTo = (path: string) => {
		const navigateRoute = `${path}`;
		closeDrawer();
		navigate(navigateRoute);
		window.scrollTo(0, 0);
	};

	return (
		<div
			className={`sideDrawer animate-fade-left bg-white shadow-[-4px_0px_40px_0px_rgba(0,0,0,0.08)] animate-duration-100 animate-ease-in-out ${drawerOpen ? 'drawerOpen' : 'drawerClose'}`}
		>
			{/* side drawer header */}
			<div className="flex items-center justify-end border border-solid border-b-[#807B78] px-4 py-5">
				<button
					className="flex items-center gap-3 border-none bg-none outline-none"
					onClick={() => closeDrawer()}
				>
					<span className="text-xl leading-8 text-[#181818]">
						Close
					</span>
					<IoClose className="text-xl" />
				</button>
			</div>
			{/* side drawer items */}
			<div className="my-10 flex flex-col">
				{isMobile &&
					drawerItemsMobile.map((item, index) => (
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className="flex items-center py-2">
										<div
											key={index}
											className="sideDrawer-item cursor-pointer py-4 pl-[100px] pr-4 text-2xl text-[#181818] transition-all hover:scale-105 max-sm:pl-[60px]"
										>
											{item.mainTitle}
										</div>
										<IoChevronUp
											className={`${
												open
													? ''
													: 'rotate-180 transform'
											} h-5 w-5 `}
										/>
									</Disclosure.Button>

									<Disclosure.Panel className="text-gray-500">
										{item.dataItems.map(
											(subItem, subIndex) => (
												<div
													key={subIndex}
													className={`sideDrawer-item cursor-pointer border-b-[#DDD] bg-[#fafafa] py-[12px] pl-[124px] pr-4 text-xl text-[#181818] transition-all hover:scale-105 max-sm:pl-[84px] ${isActive(subItem.path)}`}
													onClick={() =>
														navigateTo(subItem.path)
													}
												>
													{subItem.title}
												</div>
											),
										)}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					))}
				{isMobile &&
					drawerItemsMobile2.map((item, index) => (
						<div
							key={index}
							className={`sideDrawer-item cursor-pointer py-4 pl-[100px] pr-4 text-2xl text-[#181818] transition-all hover:scale-105 max-sm:pl-[60px] ${isActive(item.path)}`}
							onClick={() => navigateTo(item.path)}
						>
							{item.title}
						</div>
					))}
				{/* Drawer items for Desktop > 1024 */}
				{!isMobile &&
					drawerItemsDesktop.map((item, index) => (
						<div
							key={index}
							className={`sideDrawer-item cursor-pointer py-4 pl-[100px] pr-4 text-2xl text-[#181818] transition-all hover:scale-105 max-sm:pl-[60px] ${isActive(item.path)}`}
							onClick={() => navigateTo(item.path)}
						>
							{item.title}
						</div>
					))}
			</div>
			{/* footer  */}
			<div className="flex items-center justify-start gap-6 pl-[100px]  max-sm:pl-[60px]">
				{socialIcons.map((item, index) => (
					<button
						key={index}
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<a href={item.path}>
							<img
								src={`${process.env.PUBLIC_URL}/assets/img/${item.img}`}
								alt=""
								style={{
									transition: 'filter 0.2s ease',
									filter:
										hoveredIndex === index
											? 'brightness(60%)'
											: 'brightness(100%)',
								}}
							/>
						</a>
					</button>
				))}
			</div>
		</div>
	);
};

export default SideDrawer;
