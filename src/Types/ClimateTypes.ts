import { Country } from "./CountryTypes";

export interface DataPoint {
  dekadStart: string;
  inSeason: boolean;
  ndvi: NDVIData;
  overall: OverallData;
  rainfall: RainfallData;
}

export interface NDVIData {
  peopleDry: number;
  peopleAnomaly: number;
  prevalenceDry: number;
  prevalenceAnomaly: number;
}

export interface OverallData {
  peopleDry: number;
  peopleWet: number;
  peopleAnomaly: number;
  prevalenceDry: number;
  prevalenceWet: number;
  prevalenceAnomaly: number;
}

export interface RainfallData {
  peopleDry: number;
  peopleWet: number;
  peopleAnomaly: number;
  prevalenceDry: number;
  prevalenceWet: number;
  prevalenceAnomaly: number;
}

export interface ClimateStatsData {
  country: Country;
  dataPoints: DataPoint[];
}

export interface ClimateStatsResponse {
  countries: ClimateStatsData[];
}
