import qs from "qs";
import axios from "axios";
export async function sendSuppliersEmail(contactForm: {
	name: string;
	contactNumber: string;
	department: string;
	email: string;
	location: string;
	message: string;
	sendTo: string;
}) {
	const url =
		"https://japfaindia.in/wp-content/themes/twentytwentyfour/templates/contactformjapfasupplier.php";
	const headers = {
		"Content-Type": "application/x-www-form-urlencoded",
	};
	const bodyData = {
		name: contactForm.name,
		phone: contactForm.contactNumber,
		department: contactForm.department,
		email: contactForm.email,
		location: contactForm.location,
		message: contactForm.message,
		sendTo: contactForm.sendTo,
	};
	const data = qs.stringify(bodyData);
	// console.log(data);

	try {
		const response = await axios.post(url, data, { headers });
		return response.data;
	} catch (error) {
		console.error("Error sending contact form:", error);
		throw error;
	}
}
