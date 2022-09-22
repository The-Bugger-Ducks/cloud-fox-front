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
    pluvValue: "Dados pluviométrico captados pela estação",
    heatValue: "Dados de temperatura captados pela estação",
    atmPresValue: "Dados de velocidade do vento captados pela estação",
    humidityValue: "Dados de humidade captados pela estação",
    WindDirectionValue: "Dados de direção do vento captados pela estação",
    WindVelocityValue: "Dados de velocidade do vento captados pela estação",
  },
};

export default consfigDashboard;
