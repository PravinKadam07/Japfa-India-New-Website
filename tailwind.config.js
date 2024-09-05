/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.html",
		"./src/**/*.vue",
		"./src/**/*.jsx",
		"./src/**/*.tsx",
	],
	theme: {
		screens: {
			sm: "641px",
			md: "769px",
			lg: "1025px",
			xl: "1281px",
			"2xl": "1537px",
		},
		extend: {
			screens: {
				desktopScreen: "1511px",
				semiMediumScreen:'1380px',
				mediumScreen: "1441px",
				tabletMedium: '900px',
				mobileScreen: "391px",
				"3xl": "1700px",
			},
			colors: {
				foodPrimary: "#CE202F",
			},
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(114deg, #FF845E 23.38%, #FF6332 100%)",
				"custom-gradient-2":
					"var(--Gradient-1, linear-gradient(315deg, #FF2525 -0.01%, #FF8743 100%))",
				foodGradient:
					"linear-gradient(180deg, #CE202F 0%, #75111A 100%)",
			},
			maxWidth: {
				japfaGrid: "1392px",
			},
		},
	},
	plugins: [require("tailwindcss-animated"), require("@tailwindcss/forms")],
};
