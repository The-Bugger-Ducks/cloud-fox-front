export interface DashboardInterface {
  id: string;
  moment?: string;

  pluvValue?: number | number[];
  pluvUnit?: string;

  heatValue?: number | number[];
  heatUnit?: string;

  atmPresValue: number | number[];
  atmPresUnit?: string;

  humidityValue?: number | number[];
  humidityUnit?: string;

  WindDirectionValue?: number | number[];
  WindDirectionUnit?: string;

  WindVelocityValue?: number | number[];
  WindVelocityUnit?: string;
}
