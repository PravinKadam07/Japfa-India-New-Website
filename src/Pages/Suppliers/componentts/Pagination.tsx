import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface TableItemProps {
	tableItem: {
		category: string;
		material: string;
		character: string[];
		acceptable: string[];
	}[];
	itemsPerPage: number;
	pageNo: number;
	setPageNo: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
	tableItem,
	itemsPerPage,
	pageNo,
	setPageNo,
}: TableItemProps) => {
	const totalPages = Math.ceil(tableItem.length / itemsPerPage);
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	// console.log(pages)
	const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
		window.innerWidth <= 768,
	);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handlePrev = () => {
		setPageNo((prevPageNo) => Math.max(prevPageNo - 1, 1));
	};

	const handleNext = () => {
		setPageNo((prevPageNo) => Math.min(prevPageNo + 1, totalPages));
	};

	const scollTop = () => {
		window.scrollTo({ top: 1020, behavior: 'smooth' });
	};

	const visiblePages = isSmallScreen ? 5 : 7;

	// Calculate the range of pages to display based on the current page
	const startPage = Math.max(pageNo - Math.floor(visiblePages / 2), 1);
	const endPage = Math.min(startPage + visiblePages - 1, totalPages);

	return (
		<div className="my-10 flex items-center justify-center gap-1 ">
			<button onClick={handlePrev}>
				<IoIosArrowBack
					className={`rounded-full border border-[#807B78] p-2 text-4xl text-[#807B78] `}
				/>
			</button>
			<div>
				{pages.slice(startPage - 1, endPage).map((page) => (
					<button
						key={page}
						onClick={() => {
							scollTop();
							setPageNo(page);
						}}
						className={`enableBorder mx-1 w-10 cursor-pointer rounded-md !border-[1px] px-3 py-2 ${
							page === pageNo
								? '!border-[#EC691F] !bg-[#EC691F] text-white'
								: '!border-[#807B78] !bg-transparent text-[#807B78]'
						}`}
					>
						{page}
					</button>
				))}
			</div>
			<button onClick={handleNext}>
				<IoIosArrowForward
					className={`rounded-full border border-[#807B78] p-2 text-4xl text-[#807B78] `}
				/>
			</button>
		</div>
	);
};

export default Pagination;
