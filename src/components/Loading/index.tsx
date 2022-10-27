import Lottie from "react-lottie";
import animationData from "../../assets/loading.json";

interface LoadingPros {
	width?: number;
	height?: number;
}

export default function Loading({ width, height }: LoadingPros) {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={height ? height : 400} width={width ? width : 400} />
		</div>
	);
}
