import React, { useEffect, useRef, useState } from 'react';
import SecondaryPagesBanner from '../Leadership/components/SecondaryPagesBanner';
import SuppliersTable from './componentts/SuppliersTable';
import './Suppliers.css';
interface MaterialSupplyData {
	acf: {
		category: string;
		material: string;
		character: string;
		acceptable: string;
	};
}
interface GrainGroup {
	character: string[];
	acceptable: string[];
	category: string;
}
const Suppliers = () => {
	const bannerData = {
		subtitle: 'Superiority begins at the source',
		imageSrc: `${process.env.PUBLIC_URL}/assets/img/supplier-banner-img.webp`,
	};
	const [supplierMaterialList, setsupplierMaterialList] = useState([]);
	const [groupedByMaterial, setGroupedByMaterial] = useState<
		Record<string, GrainGroup>
	>({});
	const pageOffset = useRef(0);
	const [showTable, setShowTable] = useState(false);
	// function to fetch suppliers list from cms
	const fetchSuppliers = async (offset: number) => {
		const response = await fetch(
			`https://japfaindia.in/wp-json/wp/v2/supplier-material?per_page=100&order=asc&offset=${offset}`,
		);
		if (!response.ok) {
			throw new Error('Fetching Suppliers T&C failed');
		}
		return response.json();
	};
	// function to group by material
	function groupByMaterial(
		data: MaterialSupplyData[],
	): Record<string, GrainGroup> {
		const groupedData: Record<string, GrainGroup> = {};
		data.forEach((item) => {
			const material = item.acf.material;
			if (!groupedData[material]) {
				groupedData[material] = {
					character: [],
					acceptable: [],
					category: item.acf.category,
				};
			}
			groupedData[material].character.push(item.acf.character);	
			groupedData[material].acceptable.push(item.acf.acceptable);
		});
		return groupedData;
	}
	useEffect(() => {
		fetchSuppliers(0).then((data) => {
			const supplierData = [...supplierMaterialList, ...data];
			fetchSuppliers(100).then((data2) => {
				const supplierData2 = [...supplierData, ...data2];
				fetchSuppliers(200).then((data3) => {
					const supplierData3 = [...supplierData2, ...data3];
					// @ts-ignore
					setsupplierMaterialList(supplierData3);
					const groupedData = groupByMaterial(supplierData3);
					setGroupedByMaterial(groupedData);
					setShowTable(true);
				});
			});
			// @ts-ignore
		});
	}, []);

	return (
		<div>
			<SecondaryPagesBanner data={bannerData} />
			{showTable ? (
				<SuppliersTable groupedByMaterial={groupedByMaterial} />
			) : (
				<div className="min-h-screen">Loading</div>
			)}
		</div>
	);
};

export default Suppliers;
