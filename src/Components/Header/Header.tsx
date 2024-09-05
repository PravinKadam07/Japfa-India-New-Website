import { Fragment, useState } from 'react';
import './Header.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SideDrawer from '../SideDrawer/SideDrawer';
import { Menu, Transition } from '@headlessui/react';
export const Header = (props: any) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	// const [dropdownOpen, setDropdownOpen] = useState(false);
	// const [selectedLanguage, setSelectedLanguage] = useState('English');
	// const handleLanguageChange = (language: string) => {
	// 	setDropdownOpen(false);
	// 	setSelectedLanguage(language);
	// };
	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};
	const navigate = useNavigate();
	const location = useLocation();
	const navigateTo = (path: string) => {
		navigate(path);
		window.scrollTo(0, 0);
	};
	const isActive = (path: string) => {
		return location.pathname === path ? 'activePath' : '';
	};

	return (
		<header className="sticky -top-[2px] z-50">
			<SideDrawer
				toggleDrawer={toggleDrawer}
				drawerOpen={drawerOpen}
				isActive={isActive}
			/>

			<div className="logo" onClick={() => navigateTo('/')}>
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/logo.svg`}
					alt="JAPFA Logo"
					style={{ cursor: 'pointer' }}
				></img>
			</div>
			<div className="navigation hidden lg:block">
				<ul>
					<li className="">
						<Menu
							as="div"
							className="relative inline-block text-left"
						>
							<div>
								<Menu.Button className="flex items-center gap-4">
									What we do?
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="10"
											height="6"
											viewBox="0 0 10 6"
											fill="none"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0 1.38618L1.50221 0L5 3.22763L8.49779 0L10 1.38618L5 6L0 1.38618Z"
												fill="white"
											/>
										</svg>
									</span>
								</Menu.Button>
							</div>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className=" absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-[4px] bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active && 'bg-slate-100'
												} font-p flex w-full items-center rounded-md px-5 py-4 text-base text-black ${isActive('/feed')}`}
												onClick={() =>
													navigateTo('/feed')
												}
											>
												Feed
											</button>
										)}
									</Menu.Item>
									<div className="h-[1px] w-full bg-[#807b78]"></div>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active && 'bg-slate-100'
												} font-p flex w-full items-center rounded-md px-5 py-4 text-base text-black ${isActive('/farm')}`}
												onClick={() =>
													navigateTo('/farm')
												}
											>
												Farm
											</button>
										)}
									</Menu.Item>
									<div className="h-[1px] w-full bg-[#807b78]"></div>
									<Menu.Item>
										{({ active }) => (
											<button
												className={`${
													active && 'bg-slate-100'
												} font-p flex w-full items-center rounded-md px-5 py-4 text-base text-black ${isActive('/food')}`}
												onClick={() =>
													navigateTo('/food')
												}
											>
												Food
											</button>
										)}
									</Menu.Item>
								</Menu.Items>
							</Transition>
						</Menu>
						{/* <Link to={'/'}>What we do?</Link> */}
					</li>
					<li>
						<button
							onClick={() => navigateTo('/ourapproach')}
							className={isActive('/ourapproach')}
						>
							Our Approach
						</button>
					</li>
					<li>
						<button
							onClick={() => navigateTo('/sustainability')}
							className={isActive('/sustainability')}
						>
							Our Commitments
						</button>
					</li>
					<li>
						<button
							onClick={() => navigateTo('/career')}
							className={isActive('/career')}
						>
							Life @JAPFA
						</button>
					</li>
				</ul>
			</div>
			<div className="header-right">
				<div
					className="header-icon cursor-pointer"
					title="JAPFA Best"
					onClick={() =>
						window.open('https://japfabest.in/', '_blank')
					}
				>
					<img
						src={`${process.env.PUBLIC_URL}/assets/img/icons/cart-icon.svg`}
						alt=""
					></img>
				</div>
				<div
					className="header-icon cursor-pointer"
					title="JAPFA Global"
					onClick={() => window.open('https://japfa.com/', '_blank')}
				>
					<img
						src={`${process.env.PUBLIC_URL}/assets/img/icons/globe.svg`}
						alt=""
					></img>
				</div>
				<div
					className="header-icon"
					title="Contact us"
					onClick={() => navigateTo('/contactus')}
				>
					<img
						src={`${process.env.PUBLIC_URL}/assets/img/icons/mail.svg`}
						alt=""
					></img>
				</div>
				{/* <div className="dropdown language relative">
					<button
						className="dropdown-toggle"
						type="button"
						onClick={() => setDropdownOpen(!dropdownOpen)}
						aria-expanded={dropdownOpen}
					>
						{selectedLanguage}
					</button>
					{dropdownOpen && (
						<ul className="dropdown-menu absolute z-10 rounded-[4px] bg-white text-black">
							<li className="rounded-[4px] px-5 py-4 hover:bg-slate-100 hover:text-black">
								<button
									className="dropdown-item"
									onClick={() =>
										handleLanguageChange('English')
									}
								>
									English
								</button>
							</li>
							<li className="rounded-[4px] px-5 py-4 hover:bg-slate-100 hover:text-black">
								<button
									className="dropdown-item"
									onClick={() =>
										handleLanguageChange('Spanish')
									}
								>
									Spanish
								</button>
							</li>
							<li className="rounded-[4px] px-5 py-4 hover:bg-slate-100 hover:text-black">
								<button
									className="dropdown-item"
									onClick={() =>
										handleLanguageChange('German')
									}
								>
									German
								</button>
							</li>
						</ul>
					)}
				</div> */}
				<button
					className="login-btn"
					onClick={() =>
						(window.location.href =
							'https://japfaindia.peoplestrong.com//altLogin.jsf')
					}
				>
					<img
						src={`${process.env.PUBLIC_URL}/assets/img/icons/user.svg`}
						alt="w"
					/>
					Login
				</button>
				<div className="hamburger" onClick={() => toggleDrawer()}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
};
