export interface Hazard {
  name: string;
  type: string;
  severity: number;
  latitude: number;
  longitude: number;
  created: string;
  lastUpdate: string;
}

export interface HazardsDataResponse {
  hazards: Hazard[];
}
