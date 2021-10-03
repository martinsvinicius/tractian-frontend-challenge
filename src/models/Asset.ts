export interface Asset {
  id: number;
  sensors: string[];
  model: string;
  status: string;
  healthscore: number;
  name: string;
  image: string;
  specifications: AssetSpecifications;
  metrics: AssetMetrics;
  unitId: number;
  companyId: number;
}

export interface AssetSpecifications {
  maxTemp: number;
  power: number;
  rpm: number;
}

export interface AssetMetrics {
  totalCollectsUptime: number;
  totalUptime: number;
  lastUptimeAt: string;
}
