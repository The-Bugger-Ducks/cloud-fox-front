export interface DashboardInterface {
  id: string;
  moment: string;

  pluvValue?: number;
  pluvUnit?: string;

  heatValue?: number;
  heatUnit?: string;

  atmPresValue: number;
  atmPresUnit?: string;

  humidityValue?: number;
  humidityUnit?: string;

  WindDirectionValue?: number;
  WindDirectionUnit?: string;

  WindVelocityValue?: number;
  WindVelocityUnit?: string;
}
