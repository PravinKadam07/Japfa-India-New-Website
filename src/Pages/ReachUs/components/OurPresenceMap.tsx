import React, { useEffect } from 'react';
// @ts-ignore
import IndiaMap from '@svg-maps/india';
// @ts-ignore
import { SVGMap } from 'react-svg-map';

interface MapProps {
	handleStateClick: any;
	activeStates: string[];
}
const OurPresenceMap = ({ handleStateClick, activeStates }: MapProps) => {
	useEffect(() => {
		// Get the existing SVG element
		var svg = document.querySelector('.reachus-map');
		svg?.querySelector('#an')?.remove();
		// Loop through each item in activeStates
		activeStates.forEach((item) => {
			// Get the SVG element with the ID from activeStates
			var svgElement = document.querySelector(`#${item}`);

			// Check if the SVG element exists
			if (svgElement) {
				// Apply the gradient to the SVG element
				// @ts-ignore
				svgElement.style.fill = 'url(#active_state_gradient)';
			} else {
				// Handle the case where the SVG element does not exist
				console.error(`SVG element with ID '${item}' not found.`);
			}
		});
		// Check if the SVG already has a <defs> section
		var defs = svg?.querySelector('defs');
		if (!defs) {
			// If <defs> doesn't exist, create it
			defs = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'defs',
			);
			// Append <defs> to the SVG
			svg?.appendChild(defs);
		}

		// Create the linearGradient element
		var linearGradient = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'linearGradient',
		);
		linearGradient.setAttribute('id', 'paint0_linear_10026_8484');
		linearGradient.setAttribute('x1', '107.158');
		linearGradient.setAttribute('y1', '0');
		linearGradient.setAttribute('x2', '107.158');
		linearGradient.setAttribute('y2', '163.361');
		linearGradient.setAttribute('gradientUnits', 'userSpaceOnUse');

		// Create the first stop element
		var stop1 = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'stop',
		);
		stop1.setAttribute('stop-color', '#FFEBE0');
		linearGradient.appendChild(stop1);

		// Create the second stop element
		var stop2 = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'stop',
		);
		stop2.setAttribute('offset', '1');
		stop2.setAttribute('stop-color', '#FFD0B6');
		linearGradient.appendChild(stop2);

		// Append the linearGradient to the <defs> element
		defs.appendChild(linearGradient);
		// Create the second linearGradient element
		var linearGradient2 = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'linearGradient',
		);
		linearGradient2.setAttribute('id', 'active_state_gradient');
		linearGradient2.setAttribute('x1', '108.217');
		linearGradient2.setAttribute('y1', '1.74219');
		linearGradient2.setAttribute('x2', '108.217');
		linearGradient2.setAttribute('y2', '208.224');
		linearGradient2.setAttribute('gradientUnits', 'userSpaceOnUse');

		// Create the stops for the second linearGradient
		var stop2_1 = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'stop',
		);
		stop2_1.setAttribute('stop-color', '#FFBA93');
		linearGradient2.appendChild(stop2_1);

		var stop2_2 = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'stop',
		);
		stop2_2.setAttribute('offset', '1');
		stop2_2.setAttribute('stop-color', '#FF9356');
		linearGradient2.appendChild(stop2_2);

		// Append the second linearGradient to the <defs> element
		defs.appendChild(linearGradient2);
	}, []);
	function handleHover(e: Event) {
		// @ts-ignore
		e.target.style.filter = 'drop-shadow(0 0 6px #ff9356)';
	}
	function handleHoverOut(e: Event) {
		// @ts-ignore
		e.target.style.filter = 'unset';
	}
	return (
		<>
			<SVGMap
				className={'reachus-map'}
				locationClassName={'reachus-map--state'}
				map={IndiaMap}
				onLocationClick={handleStateClick}
				onLocationMouseOver={handleHover}
				onLocationMouseOut={handleHoverOut}
			/>
		</>
	);
};
export default OurPresenceMap;
