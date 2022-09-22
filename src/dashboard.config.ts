import DashboardConfigInterface from "./interfaces/dashboardConfig";

const consfigDashboard: DashboardConfigInterface = {
  possibleParams: [
    {
      dataVariable: "pluvValue",
      unitVariable: "pluvUnit",
    },
    {
      dataVariable: "heatValue",
      unitVariable: "heatUnit",
    },
    {
      dataVariable: "atmPresValue",
      unitVariable: "atmPresUnit",
    },
    {
      dataVariable: "humidityValue",
      unitVariable: "humidityUnit",
    },
    {
      dataVariable: "WindDirectionValue",
      unitVariable: "WindDirectionUnit",
    },
    {
      dataVariable: "WindVelocityValue",
      unitVariable: "WindVelocityUnit",
    },
  ],

  index: ["pluv", "heat", "atm", "humidity", "WindDirection", "WindVelocity"],

  chartsTitles: {
    pluvValue: "título",
    heatValue: "título",
    atmPresValue: "título",
    humidityValue: "título",
    WindDirectionValue: "título",
    WindVelocityValue: "título",
  },
};

export default consfigDashboard;
