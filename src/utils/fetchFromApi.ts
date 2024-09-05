const baseUrl = `https://cms.japfaindia.com/wp-json/wp/v2/`;
// HomePageBannerDataAPI: https://13.200.190.169/wp-json/wp/v2/home-banner?order=asc&orderby=date
// HomePageTestimonialDataAPI : https://13.200.190.169/wp-json/wp/v2/testimonial
// HomePageArticlesAPI: https://13.200.190.169/wp-json/wp/v2/media-gallery Fetch first 3 from here
// CareerLifeAtJapfaAPI: https://13.200.190.169/wp-json/wp/v2/life-at-japfa
// CareerTeamTestimonialsAPI: https://13.200.190.169/wp-json/wp/v2/japfa-team
// DiscoverTrailblazersAPI: https://13.200.190.169/wp-json/wp/v2/trailblazers
// DiscoverGlobalFootprintsAPI: https://13.200.190.169/wp-json/wp/v2/global-footprint
// SuppliersTncAPI: https://13.200.190.169/wp-json/wp/v2/supplier-tandc
// MediaPageArticlesAPI: https://13.200.190.169/wp-json/wp/v2/media-gallery
// MediaVideosAPI: https://13.200.190.169/wp-json/wp/v2/media-videos
// NewslettersAPI: https://13.200.190.169/wp-json/wp/v2/newsletters3108020df4313ed13cf8888c7956269f
// LeadershipTeamAPI: https://13.200.190.169/wp-json/wp/v2/leadership-team
// LeadershipTestimonialsAPI: https://13.200.190.169/wp-json/wp/v2/leaders-testimonial
// LeadershipVideoAPI: https://13.200.190.169/wp-json/wp/v2/leadership-video
// CommitmentsCsrAPI: https://13.200.190.169/wp-json/wp/v2/csr

const fetchHomePageBannerData = async () => {
	const response = await fetch(
		`${baseUrl}home-banner?order=asc&orderby=date`,
	);
	if (!response.ok) {
		throw new Error("Fetching Home Page Banner Data failed");
	}
	return response.json();
};

const fetchHomePageTestimonialData = async () => {
	const response = await fetch(`${baseUrl}testimonial`);
	if (!response.ok) {
		throw new Error("Fetching Home Page Testimonial Data failed");
	}
	return response.json();
};

const fetchHomePageArticles = async () => {
	const response = await fetch(`${baseUrl}media-gallery?per_page=3`);
	if (!response.ok) {
		throw new Error("Fetching Home Page Articles failed");
	}
	return response.json();
};

const fetchCareerLifeAtJapfa = async () => {
	const response = await fetch(`${baseUrl}life-at-japfa`);
	if (!response.ok) {
		throw new Error("Fetching Career Life At Japfa failed");
	}
	return response.json();
};

const fetchCareerTeamTestimonials = async () => {
	const response = await fetch(`${baseUrl}japfa-team`);
	if (!response.ok) {
		throw new Error("Fetching Career Team Testimonials failed");
	}
	return response.json();
};

const fetchDiscoverTrailblazers = async () => {
	const response = await fetch(`${baseUrl}trailblazers`);
	if (!response.ok) {
		throw new Error("Fetching Discover Trailblazers failed");
	}
	return response.json();
};

const fetchDiscoverGlobalFootprints = async () => {
	const response = await fetch(`${baseUrl}global-footprint`);
	if (!response.ok) {
		throw new Error("Fetching Discover Global Footprints failed");
	}
	return response.json();
};

const fetchSuppliersTnc = async () => {
	const response = await fetch(`${baseUrl}supplier-tandc`);
	if (!response.ok) {
		throw new Error("Fetching Suppliers T&C failed");
	}
	return response.json();
};
const fetchSuppliersData = async (
	per_page: number,
	order: "asc" | "desc",
	offset: number,
) => {
	const response = await fetch(
		`${baseUrl}supplier-material?per_page=${per_page}&order=${order}&offset=${offset}`,
	);
	if (!response.ok) {
		throw new Error("Fetching Suppliers T&C failed");
	}
	return response.json();
};

const fetchMediaPageArticles = async () => {
	const response = await fetch(`${baseUrl}media-article`);
	if (!response.ok) {
		throw new Error("Fetching Media Page Articles failed");
	}
	return response.json();
};

const fetchMediaVideos = async () => {
	const response = await fetch(`${baseUrl}media-videos`);
	if (!response.ok) {
		throw new Error("Fetching Media Videos failed");
	}
	return response.json();
};

const fetchNewsletters = async () => {
	const response = await fetch(`${baseUrl}newsletters`);
	if (!response.ok) {
		throw new Error("Fetching Newsletters failed");
	}
	return response.json();
};

const fetchLeadershipTeam = async () => {
	const response = await fetch(`${baseUrl}leadership-team`);
	if (!response.ok) {
		throw new Error("Fetching Leadership Team failed");
	}
	return response.json();
};

const fetchLeadershipTestimonials = async () => {
	const response = await fetch(`${baseUrl}leaders-testimonial`);
	if (!response.ok) {
		throw new Error("Fetching Leadership Testimonials failed");
	}
	return response.json();
};

const fetchLeadershipVideo = async () => {
	const response = await fetch(`${baseUrl}leadership-video`);
	if (!response.ok) {
		throw new Error("Fetching Leadership Video failed");
	}
	return response.json();
};

const fetchCommitmentsCsr = async () => {
	const response = await fetch(`${baseUrl}csr`);
	if (!response.ok) {
		throw new Error("Fetching Commitments CSR failed");
	}
	return response.json();
};
const fetchPolicyPdfs = async () => {
	const response = await fetch(`${baseUrl}policy-documents`);
	if (!response.ok) {
		throw new Error("Fetching policy documents failed");
	}
	return response.json();
};
// fetch department list for Contact form
const fetchDepartmentList = async () => {
	const response = await fetch(`${baseUrl}department`);
	if (!response.ok) {
		throw new Error("Fetching department list failed");
	}
	return response.json();
};
// fetch our journey
const fetchOurJourney = async () => {
	const response = await fetch(`${baseUrl}our-journey`);
	if (!response.ok) {
		throw new Error("Fetching our journey failed");
	}
	return response.json();
};
export {
	fetchHomePageBannerData,
	fetchHomePageTestimonialData,
	fetchHomePageArticles,
	fetchCareerLifeAtJapfa,
	fetchCareerTeamTestimonials,
	fetchDiscoverTrailblazers,
	fetchDiscoverGlobalFootprints,
	fetchSuppliersTnc,
	fetchMediaPageArticles,
	fetchMediaVideos,
	fetchNewsletters,
	fetchLeadershipTeam,
	fetchLeadershipTestimonials,
	fetchLeadershipVideo,
	fetchCommitmentsCsr,
	fetchPolicyPdfs,
	fetchSuppliersData,
	fetchDepartmentList,
	fetchOurJourney,
};

export {};

export const modifyPath = (path: string): string => {
	return path
		.toString()
		.replace(
			"http://ec2-13-200-190-169.ap-south-1.compute.amazonaws.com",
			"https://japfaindia.in",
		)
		.replace("http://japfaindia.in", "https://japfaindia.in");
};
export const modifyPathHtml = (path: string): string => {
	return path
		.toString()
		.replaceAll(
			"http://ec2-13-200-190-169.ap-south-1.compute.amazonaws.com",
			"https://japfaindia.in",
		)
		.replace("http://japfaindia.in", "https://japfaindia.in");
};
export const extractYoutubeVideoId = (url: string): string => {
	const videoId = url.split("v=")[1];
	const ampersandPosition = videoId.indexOf("&");
	if (ampersandPosition !== -1) {
		return videoId.substring(0, ampersandPosition);
	}
	return videoId;
};
