import DashboardRequests from "../Requests/dashboard.request";
import { ActiveStationInterface } from "../../interfaces/station";
import { ParamInterface } from "../../interfaces/param";

export default async function handlerDashboardData(apiResponse: {
	station: ActiveStationInterface;
	parameterTypes: ParamInterface[];
}) {
	let options: any = [];
	let error = 0;

	for (let param in apiResponse.parameterTypes) {
		const paramData = await DashboardRequests.getDashboardData(
			apiResponse.station.id,
			apiResponse.parameterTypes[param].type
		);

		if (paramData === "error") {
			error = 1;
		} else {
			options.push(_newOption(apiResponse.parameterTypes[param], paramData));
		}
	}
	if (error != 0) {
		alert("Não foi possível carregar todos os dados");
	}
	return options;
}

function _newOption(paramInfos: ParamInterface, paramData: any) {
	const values: any = [];

	paramData.forEach((value: any) => {
		values.push([value.moment * 1000, value.value * paramInfos.factor]);
	});

	const newOption = {
		title: paramInfos.name,
		options: {
			chart: {
				type: "spline",
			},
			title: {
				text: "",
			},
			yAxis: {
				title: {
					text: `${paramInfos.unit}`,
				},
				labels: {
					format: "{value} " + paramInfos.unit,
				},
				tickInterval: 1,
			},
			xAxis: {
				type: "datetime",
				dateTimeLabelFormats: {
					weekly: "%e. %b %y",
					twicemonthly: "%e. %b %y",
					monthly: "%b %y",
					twomonths: "%b %y",
					threemonths: "%b %y",
					fourmonths: "%b %y",
					sixmonths: "%b %y",
					yearly: "%Y",
				},
				labels: {
					format: "{value:%b}",
					align: "left",
					x: 3,
				},
			},
			series: [
				{
					name: `${paramInfos.unit} captados pela estação`,
					color: "#AA55DD",
					data: values,
				},
			],
		},
	};

	return newOption;
}
