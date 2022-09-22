import DashboardRequests from "../Requests/dashboard.request";
import dashboardConfig from "../../dashboard.config";
import { DashboardInterface } from "../../interfaces/dashboard";
import { ActiveStationInterface } from "../../interfaces/station";

export default async function handlerDashboardData(
  stationID: string,
  parameter?: number
) {
  const dashboardParams = await DashboardRequests.getDashboardData(
    stationID,
    parameter && parameter
  );

  let organizedParams = _initializeObjectParams();

  if (dashboardParams)
    organizedParams = _populateObjectParams(organizedParams, dashboardParams);

  const options = _generateOptions(organizedParams);

  return options;
}

function _initializeObjectParams() {
  let organizedParams: any = new Object();

  dashboardConfig.possibleParams.forEach((param) => {
    organizedParams[param.dataVariable] = [];
    organizedParams[param.unitVariable] = [];
  });

  return organizedParams;
}

function _populateObjectParams(
  baseObject: any,
  rawObject: {
    collects: DashboardInterface[];
    station: ActiveStationInterface;
  }
) {
  rawObject.collects.forEach((params: any) => {
    if (params["moment"]) {
      for (let param in params) {
        if (param in baseObject) {
          if (param.includes("Unit")) {
            baseObject[param] = params[param].toUpperCase();
          } else {
            baseObject[param].push([
              parseInt(params["moment"]) * 1000,
              params[param],
            ]);
          }
        }
      }
    }
  });
  return baseObject;
}

function _generateOptions(objectPopulated: any) {
  let options: any = [];
  const titles: any = dashboardConfig.chartsTitles;

  dashboardConfig.index.forEach((key: any) => {
    const valueKey: any = `${key}Value`;
    const unitKey: any = `${key}Unit`;

    if (valueKey in objectPopulated && unitKey) {
      const title: string = titles[valueKey];
      const value: string = objectPopulated[valueKey];
      const unit: string = objectPopulated[unitKey];

      options.push({
        title: title,
        options: {
          chart: {
            type: "spline",
          },
          title: {
            text: title,
          },
          yAxis: {
            title: {
              text: `${unit}`,
            },
            labels: {
              format: "{value} " + unit,
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
              name: `${unit} captados pela estação`,
              color: "#AA55DD",
              data: value,
            },
          ],
        },
      });
    }
  });

  return options;
}
