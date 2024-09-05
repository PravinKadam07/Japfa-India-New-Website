import { useEffect } from "react";
import lottie from "lottie-web";
const Loader = () => {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#lottie"), // the dom element
			renderer: "svg",
			loop: true,
			autoplay: true,
			path: "./loadingLottie.json", // the path to the animation json
		});
	}, []);

	return <div id="lottie" style={{ width: 200, height: 200 }}></div>;
};

export default Loader;
