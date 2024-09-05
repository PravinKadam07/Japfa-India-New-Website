import React from 'react';
import { useState, useEffect } from 'react';
import '../Policy.css';
import pdficon from '../../../assets/Union.png';
import { fetchPolicyPdfs } from '../../../utils/fetchFromApi';
interface Policy {
	title?: string;
	document?: string;
}
const PdfTile = () => {
	const [policyCard, setPolicyCard] = useState([]);
	useEffect(() => {
		fetchPolicyPdfs()
			.then((data) => {
				setPolicyCard(data.map((item: any) => item.acf));
				console.log('clicked', data);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<div className="flex flex-wrap items-start justify-center gap-4 py-[80px] lg:py-[120px]">
			{policyCard.map((item: any, index) => (
				<div className="flex flex-col items-center transition duration-150 hover:scale-105">
					<div
						key={index}
						className="pdf-tile"
						onClick={() => window.open(item['document'], '_blank')}
					>
						<img src={pdficon} alt="" />
					</div>
					<div
						style={{
							width: '60%',
							textAlign: 'center',
						}}
					>
						<div>{item['document-name']}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PdfTile;
