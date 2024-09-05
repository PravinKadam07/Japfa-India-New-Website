import React from 'react';

const SavourTheFeastSection = () => {
	return (
		<div>
			<picture className="w-full">
				<img
					src={`${process.env.PUBLIC_URL}/assets/img/food-savour-the-feast.webp`}
					alt="Japfa Best Banner"
					className="mx-auto w-full"
					loading="lazy"
				/>
			</picture>
		</div>
	);
};

export default SavourTheFeastSection;
