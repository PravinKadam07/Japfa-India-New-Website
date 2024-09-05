// @ts-nocheck
import { useCallback, useEffect, useMemo, useState } from 'react';
import ShowAll from '../../../assets/showAll.png';
import Pagination from './Pagination';
import './SuppliersTable.css';
import TermsEnquire from './TermsEnquire';
// import { fetchSupplierMaterialList } from '../../../utils/fetchFromApi';

interface ButtonProps {
	label: string;
	imageUrl?: string;
	backgroundColor?: string;
	onClick?: () => void;
	activeButton?: string;
	setActiveButton?: (label: string) => void;
}
interface GrainGroup {
	character: string[];
	acceptable: string[];
	category: string;
}
const Button = ({
	label,
	imageUrl,
	onClick,
	backgroundColor,
	activeButton,
	setActiveButton,
}: ButtonProps) => {
	const isActive = label === activeButton;

	const handleClick = () => {
		if (setActiveButton) {
			setActiveButton(label);
		}
		if (onClick) {
			onClick();
		}
	};

	const buttonStyles = {
		backgroundImage: `url(${imageUrl || ''})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		width: '40px',
		height: '40px',
	};

	return (
		<div className="flex items-center gap-1 rounded p-1 font-bold">
			<button
				className={`button ${isActive ? 'active' : ''}`}
				onClick={handleClick}
			>
				<div style={buttonStyles}></div>
				{label}
			</button>
		</div>
	);
};
const buttons = [
	{ label: 'Show All', imgUrl: ShowAll },
	{
		label: 'Grains',
		imgUrl: `${process.env.PUBLIC_URL}/assets/img/supplier-grains-img.webp`,
	},
	// {
	// 	label: 'Animal Protein',
	// 	imgUrl: `${process.env.PUBLIC_URL}/assets/img/supplier-animal-protein-img.webp`,
	// },
	{
		label: 'Plant Protein',
		imgUrl: `${process.env.PUBLIC_URL}/assets/img/supplier-plant-protein-img.webp`,
	},
	{
		label: 'Cereal Byproduct',
		imgUrl: `${process.env.PUBLIC_URL}/assets/img/supplier-cereal-byproduct-img.webp`,
	},
	{
		label: 'Energy & Oil',
		imgUrl: `${process.env.PUBLIC_URL}/assets/img/supplier-energyoil-img.webp`,
	},
	{
		label: 'Minerals',
		imgUrl: `${process.env.PUBLIC_URL}/assets/img/supplier-minerals-img.webp`,
	},
	{
		label: 'Amino Acid',
		imgUrl: `${process.env.PUBLIC_URL}/assets/img/supplier-amino-acid-img.webp`,
	},
	{
		label: 'Medicine & Vaccines',
		imgUrl: `${process.env.PUBLIC_URL}/assets/img/supplier-medicine-vaccines-img.webp`,
	},
];
const SuppliersTable = (groupedByMaterial: any) => {
	// const [itemsByCategory, setitemsByCategory] = useState<
	// 	Record<string, GrainGroup>
	// >({});
	const [selectedCategory, setselectedCategory] = useState('Show All');
	const [activeButton, setActiveButton] = useState('Show All');

	const itemsByCategory = useMemo(() => {
		if (selectedCategory === 'Show All') {
			return groupedByMaterial.groupedByMaterial;
		}
		return Object.fromEntries(
			Object.entries(groupedByMaterial.groupedByMaterial).filter(
				// @ts-ignore
				([material, group]) => group.category === selectedCategory,
			),
		);
	}, [selectedCategory, groupedByMaterial]);
	// function to handle category click
	const handleFilterClick = (category: string) => {
		setselectedCategory(category);
	};

	const itemsPerPage = 7;

	const [pageNo, setPageNo] = useState<number>(1);
	const startIdx = Math.min(
		(pageNo - 1) * itemsPerPage,
		Object.keys(itemsByCategory).length,
	);
	const endIdx = itemsPerPage + startIdx;

	// const [currentPageItems, setCurrentPageItems] = useState<string[]>([]);
	const currentPageItems = useMemo(() => {
		return Object.keys(itemsByCategory).slice(startIdx, endIdx);
	}, [itemsByCategory, startIdx, endIdx]);
	return (
		<>
			<div className="mx-auto max-w-japfaGrid pb-[40px] pt-[80px] max-mediumScreen:px-14 max-sm:pt-[60px] lg:pb-[60px] lg:pt-[120px]">
				<h1 className="text-center  text-[40px] font-extrabold leading-tight md:text-[48px] lg:text-7xl">
					Material and specifications
				</h1>
			</div>
			<div className="bg-[#FAFAFA] p-4 md:p-10">
				<div className="mb-10 flex w-full">
					<div className="button-container">
						{buttons.map(({ label, imgUrl }) => (
							<Button
								key={label}
								label={label}
								imageUrl={imgUrl}
								onClick={() =>
									label === 'Energy & Oil'
										? handleFilterClick('Energy')
										: handleFilterClick(label)
								}
								activeButton={activeButton}
								setActiveButton={setActiveButton}
							/>
						))}
					</div>
				</div>
				<div className="bg-white ">
					<div className="grid grid-cols-8 border-b-[0.6px]  border-[#898989] px-4 py-6 text-base font-semibold md:text-xl">
						<div className="col-span-2 md:p-0 ">Material</div>
						<div className="col-span-3 pl-16  md:pl-20">
							Character
						</div>
						<div className="col-span-3 pl-16 md:pl-20">
							Acceptable
						</div>
					</div>
					{currentPageItems.map((material) => (
						<div
							className="mb-2 grid grid-cols-8 border-b-[0.6px] border-[#898989] border-opacity-40 "
							key={material}
						>
							<div className="add-gradient-line-to-left relative col-span-3 my-auto  pl-5 text-xl font-bold md:col-span-2">
								{material}
							</div>
							<ul className=" col-span-3 flex flex-col   md:col-span-3">
								{itemsByCategory[material].character.map(
									(character) => (
										<li
											className="border-b-[0.6px] border-l-[0.6px] border-[#898989] border-opacity-20 p-4 py-2 text-base font-semibold md:pl-20"
											key={character}
										>
											{character}
										</li>
									),
								)}
							</ul>
							<ul className=" col-span-2 flex flex-col  md:col-span-3">
								{itemsByCategory[material].acceptable.map(
									(acceptable) => (
										<li
											className="border-b-[0.6px] border-[#898989] border-opacity-20 p-4 py-2 text-base font-normal md:pl-20"
											key={acceptable}
										>
											{acceptable}
										</li>
									),
								)}
							</ul>
						</div>
					))}
				</div>
				<Pagination
					itemsPerPage={itemsPerPage}
					pageNo={pageNo}
					setPageNo={setPageNo}
					// @ts-ignore
					tableItem={Object.keys(itemsByCategory)}
				/>
			</div>
			<div className="mx-auto max-w-japfaGrid py-[80px] max-mediumScreen:px-8 lg:py-[120px]">
				<TermsEnquire />
			</div>
		</>
	);
};

export default SuppliersTable;
