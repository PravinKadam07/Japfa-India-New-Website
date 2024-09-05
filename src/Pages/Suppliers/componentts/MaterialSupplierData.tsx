interface MaterialSupplyData {
	acf: {
		category: string;
		material: string;
		character: string;
		acceptable: string;
	};
}

const data: MaterialSupplyData[] = [
	{
		acf: {
			category: 'Grains',
			material: 'Corn Yellow - local',
			character: 'AFT(PPB)',
			acceptable: 'MAX 75',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Corn Yellow - local',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 12',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Corn Yellow - local',
			character: 'MOULDY(%)',
			acceptable: 'MAX 5',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Corn Yellow - local',
			character: 'INSECT HOLE(%)',
			acceptable: 'MAX 4',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Corn Yellow - local',
			character: 'FM(%)',
			acceptable: 'MAX 2',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Jawar (Sorghum)',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 12',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Bajara',
			character: 'MOISTURE(%)',
			acceptable: 'Max12',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Broken Rice param',
			character: 'FIBRE(%)',
			acceptable: 'MAX5',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Broken Rice param',
			character: 'MOISTURE(%)',
			acceptable: 'MAX10',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Broken Rice param',
			character: 'S & S(%)',
			acceptable: 'MAX3',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Broken Rice -  Harvest',
			character: 'FIBRE(%)',
			acceptable: 'MAX  5',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Broken Rice -  Harvest',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 12',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Broken Rice -  Harvest',
			character: 'S & S(%)',
			acceptable: 'MAX 3',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Wheat Grade II',
			character: 'FM(%)',
			acceptable: 'Max 1',
		},
	},
	{
		acf: {
			category: 'Grains',
			material: 'Wheat Grade II',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 12',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'St. Fish Meal 50%',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'St. Fish Meal 50%',
			character: 'PHOS(%)',
			acceptable: 'MIN 2.5',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'St. Fish Meal 50%',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 50',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'St. Fish Meal 50%',
			character: 'S & S(%)',
			acceptable: 'MAX 2',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'St. Fish Meal 50%',
			character: 'SALT(%)',
			acceptable: 'MAX 3',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'Fish Meal Local 45%',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 13',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'Fish Meal Local 45%',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 45',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'Fish Meal Local 45%',
			character: 'S & S(%)',
			acceptable: 'MAX 5',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'Fish Meal Local 45%',
			character: 'SALT(%)',
			acceptable: 'MAX 5',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'St. Fish Meal 58%',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'St. Fish Meal 58%',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 58',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'St. Fish Meal 58%',
			character: 'S & S(%)',
			acceptable: 'MAX 2',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'St. Fish Meal 58%',
			character: 'SALT(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'FISH SOLUBLE PASTE',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 40',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'FISH SOLUBLE PASTE',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 50',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'FISH SOLUBLE PASTE',
			character: 'FAT(%)',
			acceptable: 'MIN 3',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'BLOOD MEAL PFS',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'BLOOD MEAL PFS',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 87',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'BLOOD MEAL PFS',
			character: 'S & S(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY MEAT MEAL',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 9',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY MEAT MEAL',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 55',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY MEAT MEAL',
			character: 'S & S(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY MEAT MEAL',
			character: 'CALCIUM(%)',
			acceptable: 'MIN 2',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY MEAT MEAL',
			character: 'PHOSPHORUS(%)',
			acceptable: 'MIN 1',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY MEAT MEAL',
			character: 'FIBRE(%)',
			acceptable: 'MAX 3',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY MEAT MEAL',
			character: 'FAT(%)',
			acceptable: 'MIN 22',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE I',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE I',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 45',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE I',
			character: 'S & S(%)',
			acceptable: 'MAX 2.5',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE I',
			character: 'CALCIUM(%)',
			acceptable: 'MIN 10',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE I',
			character: 'PHOSPHORUS(%)',
			acceptable: 'MIN 5',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE I',
			character: 'SALT(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE I',
			character: 'PEPSIN(%)',
			acceptable: 'MIN 75',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE I',
			character: 'ADULTRANT(%)',
			acceptable: 'ABSENT',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE II',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE II',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 45',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE II',
			character: 'S & S(%)',
			acceptable: 'MAX 2.5',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE II',
			character: 'CALCIUM(%)',
			acceptable: 'MIN 10',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE II',
			character: 'PHOSPHORUS(%)',
			acceptable: 'MIN 5',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE II',
			character: 'SALT(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE II',
			character: 'PEPSIN(%)',
			acceptable: 'MIN 70',
		},
	},
	{
		acf: {
			category: 'Animal Protein',
			material: 'POULTRY FEED SUPPLEMENT GRADE II',
			character: 'ADULTRANT(%)',
			acceptable: 'ABSENT',
		},
	},

	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India)50%',
			character: 'FIBRE(%)',
			acceptable: 'MAX 4',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India)50%',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 11',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India)50%',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 50',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India)50%',
			character: 'S & S(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India)50%',
			character: 'U.A(mgNlgm/min)',
			acceptable: 'MAX 0.3',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India) 46',
			character: 'FIBRE(%)',
			acceptable: 'MAX 6',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India) 46',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 11',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India) 46',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 46',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India) 46',
			character: 'S & S',
			acceptable: 'MAX 1.5',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SBM (India) 46',
			character: 'U.A(mgNlgm/min)',
			acceptable: 'MAX 0.3',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'FULL FAT SOYA',
			character: 'FIBRE',
			acceptable: 'MAX 5',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'FULL FAT SOYA',
			character: 'MOISTURE',
			acceptable: 'MAX 9',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'FULL FAT SOYA',
			character: 'PROTEIN',
			acceptable: 'MIN 38',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'FULL FAT SOYA',
			character: 'S & S',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'FULL FAT SOYA',
			character: 'U.A(mgNlgm/min)',
			acceptable: 'MAX 0.3',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'FULL FAT SOYA',
			character: 'OIL %',
			acceptable: 'MIN18',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'CGM Local 60%',
			character: 'FIBRE(%)',
			acceptable: 'MAX 3',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'CGM Local 60%',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'CGM Local 60%',
			character: 'O & A(%)',
			acceptable: 'MAX 60',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'CGM Local 60%',
			character: 'S & S(%)',
			acceptable: 'MAX 2.5',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-46%',
			character: 'FIBRE(%)',
			acceptable: 'MAX 7',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-46%',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-46%',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 46',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-46%',
			character: 'S & S(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-50%',
			character: 'FIBRE(%)',
			acceptable: 'MAX 7',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-50%',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-50%',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 50',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-50%',
			character: 'S & S(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'COTTON SEED MEAL 38%',
			character: 'FIBRE(%)',
			acceptable: 'MAX 14',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'COTTON SEED MEAL 38%',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'COTTON SEED MEAL 38%',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 38',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'COTTON SEED MEAL 38%',
			character: 'S & S(%)',
			acceptable: 'MAX 3',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-44%',
			character: 'FIBRE(%)',
			acceptable: 'MAX 8',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-44%',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-44%',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 44',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Cotton seed meal-44%',
			character: 'S & S(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Groundnut DOC',
			character: 'FIBRE(%)',
			acceptable: 'MAX 14',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Groundnut DOC',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Groundnut DOC',
			character: 'O & A(%)',
			acceptable: 'MIN 45',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Groundnut DOC',
			character: 'S & S(%)',
			acceptable: 'MAX 2.5',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'RSM-India',
			character: 'FIBRE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'RSM-India',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'RSM-India',
			character: 'O & A(%)',
			acceptable: 'MIN 37',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'RSM-India',
			character: 'S & S(%)',
			acceptable: 'MAX 2.5',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SFSM (India) Hi Pro',
			character: 'FIBRE(%)',
			acceptable: 'MAX 24',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SFSM (India) Hi Pro',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SFSM (India) Hi Pro',
			character: 'O & A(%)',
			acceptable: 'MIN 28',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'SFSM (India) Hi Pro',
			character: 'S & S(%)',
			acceptable: 'MAX 2',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Til Cake (Sesame Meal)',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Til Cake (Sesame Meal)',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 28',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'TOASTED GUAR KORMA 48 %',
			character: 'FIBRE(%)',
			acceptable: 'MAX 6',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'TOASTED GUAR KORMA 48 %',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 8',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'TOASTED GUAR KORMA 48 %',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 48',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'TOASTED GUAR KORMA 48 %',
			character: 'S & S(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'TOASTED GUAR KORMA 48 %',
			character: 'U.A(%)',
			acceptable: 'MAX 0.1',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'CORN DDGS LOCAL',
			character: 'O & A(%)',
			acceptable: 'MIN 33',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'CORN DDGS LOCAL',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 13',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'CORN DDGS LOCAL',
			character: 'S & S(%)',
			acceptable: 'MAX 2.5',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'COFEED',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'COFEED',
			character: 'PROTEIN(%)',
			acceptable: 'MAX 19',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'COFEED',
			character: 'S & S(%)',
			acceptable: 'MAX 2',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'RICE DDGS',
			character: 'FIBRE(%)',
			acceptable: 'MAX 8',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'RICE DDGS',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 13',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'RICE DDGS',
			character: 'PROTEIN(%)',
			acceptable: 'MIN 44',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'RICE DDGS',
			character: 'S & S(%)',
			acceptable: 'MAX 2.5',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'Mango Kernal',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Plant Protein',
			material: 'MANGO DOC',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Rice Bran -  Solv.Extr.(DORB)',
			character: 'FIBRE',
			acceptable: '14.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Rice Bran -  Solv.Extr.(DORB)',
			character: 'MOISTURE',
			acceptable: '10.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Rice Bran -  Solv.Extr.(DORB)',
			character: 'O & A',
			acceptable: '16.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Rice Bran -  Solv.Extr.(DORB)',
			character: 'S & S',
			acceptable: '5.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Wheat Bran',
			character: 'FIBRE',
			acceptable: '10.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Wheat Bran',
			character: 'MOISTURE',
			acceptable: '10.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Wheat Bran',
			character: 'O & A',
			acceptable: '16.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Wheat Bran',
			character: 'S & S',
			acceptable: '2.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Sal Seed Extraction',
			character: 'FIBRE',
			acceptable: '3.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Sal Seed Extraction',
			character: 'MOISTURE',
			acceptable: '10.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Sal Seed Extraction',
			character: 'O & A',
			acceptable: '10.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Sal Seed Extraction',
			character: 'S & S',
			acceptable: '2.50',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'URID CHUNI',
			character: 'MOISTURE',
			acceptable: '8.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'URID CHUNI',
			character: 'PROTEIN',
			acceptable: '16.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'URID CHUNI',
			character: 'FIBRE',
			acceptable: '14.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'URID CHUNI',
			character: 'S & S',
			acceptable: '3.00',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Moong Chuni',
			character: 'MOISTURE',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Gram Chuni',
			character: 'MOISTURE',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Tuar Chuni',
			character: 'MOISTURE',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'HALLER KONDA',
			character: 'MOISTURE',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'HALLER KONDA',
			character: 'PROTEIN',
			acceptable: 'MAX 5',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'HALLER KONDA',
			character: 'FIBRE',
			acceptable: 'MAX32',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'HALLER KONDA',
			character: 'S & S',
			acceptable: 'MAX 5',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Rice Bran - Grade I',
			character: 'HULLS',
			acceptable: 'MAX 12',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Rice Bran - Grade I',
			character: 'MOISTURE',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Rice Bran - Grade I',
			character: 'OIL',
			acceptable: 'MAX 16',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Rice Bran - Grade I',
			character: 'S & S',
			acceptable: 'MAX 5',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'RICE POLISH(RRB)',
			character: 'HULLS',
			acceptable: 'MAX 12',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'RICE POLISH(RRB)',
			character: 'MOISTURE',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'RICE POLISH(RRB)',
			character: 'OIL',
			acceptable: 'MAX 16',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'RICE POLISH(RRB)',
			character: 'S & S',
			acceptable: 'MAX 4',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'RICE POLISH(RRB)',
			character: 'FIBRE',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Soya Hulls',
			character: 'Fiber',
			acceptable: 'MAX 43',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Soya Hulls',
			character: 'Moisture',
			acceptable: 'MAX 11',
		},
	},
	{
		acf: {
			category: 'Cereal Byproduct',
			material: 'Soya Hulls',
			character: 'Protein',
			acceptable: 'MIN 11',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Fish Oil (Crude)',
			character: 'FFA(%)',
			acceptable: 'MAX 3',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Fish Oil (Crude)',
			character: 'MIV(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Soya Oil  (Crude)',
			character: 'FFA(%)',
			acceptable: 'MAX 1.5',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Tallow',
			character: 'FFA(%)',
			acceptable: 'MAX 2.5',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Tallow',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Bergafat - DLN2',
			character: 'FFA(%)',
			acceptable: 'MAX 20',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Biofat',
			character: 'FFA(%)',
			acceptable: 'MAX 18',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Brofat',
			character: 'FFA(%)',
			acceptable: 'MAX 19',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Royal Fat',
			character: 'FFA(%)',
			acceptable: 'MAX 18',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Turmeric Oil',
			character: 'FFA(%)',
			acceptable: 'MAX 3.5',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Turmeric Oil',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'BYPASS FAT',
			character: 'FAT(%)',
			acceptable: 'MIN 99',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'BYPASS FAT',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Rice Bran oil',
			character: 'FFA(%)',
			acceptable: 'MAX 4',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Rice Bran oil',
			character: 'MIV(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Rice Bran oil 9%',
			character: 'FFA(%)',
			acceptable: 'MAX 7',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Rice Bran oil 9%',
			character: 'MIV(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Energy & Oil',
			material: 'Molasses Cane',
			character: 'Density in Brix',
			acceptable: 'MIN 85',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'Lime Stone Fine',
			character: 'CALCIUM(%)',
			acceptable: 'MIN 37',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'Lime Stone Fine',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 5',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'Lime Stone Fine',
			character: 'S & S(%)',
			acceptable: 'MAX 3',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'Shell Grit',
			character: 'CALCIUM(%)',
			acceptable: 'MIN 37',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'Shell Grit',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 10',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'Shell Grit',
			character: 'S & S(%)(%)',
			acceptable: 'MIN 2.5',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'DCP -R',
			character: 'CALCIUM(%)',
			acceptable: 'MIN 23',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'DCP -R',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 7',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'DCP -R',
			character: 'PHOS(%)',
			acceptable: 'MIN 18',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'DCP -R',
			character: 'S & S(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'DCP -A',
			character: 'CALCIUM(%)',
			acceptable: 'MIN 23',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'DCP -A',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 7',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'DCP -A',
			character: 'PHOS(%)',
			acceptable: 'MIN 18',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'DCP -A',
			character: 'S & S(%)',
			acceptable: 'MAX 1',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'Marble Chips',
			character: 'CALCIUM(%)',
			acceptable: 'MIN 37',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'Marble Chips',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 5',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'Marble Chips',
			character: 'S & S(%)',
			acceptable: 'MAX 3',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'LSP GRIT',
			character: 'CALCIUM(%)',
			acceptable: 'MAX 37',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'LSP GRIT',
			character: 'MOISTURE(%)',
			acceptable: 'MIN 5',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'LSP GRIT',
			character: 'S & S(%)',
			acceptable: 'MAX 3',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'MCP',
			character: 'PHOS(%)',
			acceptable: 'MIN 22',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'MCP',
			character: 'CALCIUM(%)',
			acceptable: 'MIN 13',
		},
	},
	{
		acf: {
			category: 'Minerals',
			material: 'MCP',
			character: 'MOISTURE(%)',
			acceptable: 'MAX 4',
		},
	},
];

export default data;
