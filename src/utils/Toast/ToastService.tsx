import { toast, ToastOptions, TypeOptions } from 'react-toastify';

interface IToastContent {
	title: string;
	message: string;
	options?: {}
}

class ToastService {

	private defaultOptions: ToastOptions;

	constructor() {
		this.defaultOptions = {
			position: toast.POSITION.BOTTOM_RIGHT,
			closeButton: false,
			hideProgressBar: false,
			progressClassName: "toast-bottom-left",
			autoClose: 5000,
			pauseOnHover: true,
		};
	}

	success(content: IToastContent) {
		this.notify("success", content.message, content.title, content.options);
	}

	error(content: IToastContent) {
		this.notify("error", content.message, content.title, content.options);
	}

	warning(content: IToastContent) {
		this.notify("warning", content.message, content.title, content.options);
	}

	info(content: IToastContent) {
		this.notify("info", content.message, content.title, content.options);
	}

	private notify(type: TypeOptions, message: string, title: string, options?: {}) {
		let mergedOptions: ToastOptions = Object.assign({}, this.defaultOptions, options);

		mergedOptions = {...mergedOptions, type }

		return toast((
			<>
				<h3>{title}</h3>
				<p>{message}</p>
			</>
		), mergedOptions);
	}
}

export default new ToastService();
