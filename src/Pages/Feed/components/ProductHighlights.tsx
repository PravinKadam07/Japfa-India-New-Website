import React from 'react'

interface ProductHighlightsProps {
  productHighlights: {
    image: string;
    description: string;
  }[];
}

const ProductHighlights = ({productHighlights}:ProductHighlightsProps) => {
  return (
    <div className="product-highlights">
				{productHighlights.map((productHighlight, index) => {
					return (
						<div className="product-highlight" key={index}>
							<div className="product-highlight-img">
								<img
									src={`${process.env.PUBLIC_URL}${productHighlight.image}`}
									alt=""
								/>
							</div>
							<div className="product-highlight-description">
								{productHighlight.description}
							</div>
						</div>
					);
				})}
			</div>
  )
}

export default ProductHighlights