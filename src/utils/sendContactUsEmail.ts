import qs from "qs";
import axios from "axios";

export async function sendContactUsEmail(contactForm: {
	name: string;
	contactNumber: string;
	department: string;
	email: string;
	message: string;
	sendTo: string;
}) {
	const url =
		"https://japfaindia.in/wp-content/themes/twentytwentyfour/templates/contactformjapfa.php";
	const headers = {
		"Content-Type": "application/x-www-form-urlencoded",
	};
	const bodyData = {
		name: contactForm.name,
		phone: contactForm.contactNumber,
		department: contactForm.department,
		email: contactForm.email,
		message: contactForm.message,
		sendTo:contactForm.sendTo,
	};
	const data = qs.stringify(bodyData);
	// console.log(data);
	// debugger;
	try {
		const response = await axios.post(url, data, { headers });
		return response.data;
	} catch (error: any) {
		if (error.response) {
			// Server responded with a status other than 200 range
			console.error("Error response:", error.response.data);
		} else if (error.request) {
			// Request was made but no response received
			console.error("Error request:", error.response.data);
		} else {
			// Something else happened
			console.error("Error message:", error.message);
		}
		throw error;
	}
}
