import { Country } from "./CountryTypes";

export interface FCSData {
  people: number;
  prevalence: number;
}

export interface RCSIData {
  people: number;
  prevalence: number;
}

export interface HealthAccessData {
  people: number;
  prevalence: number;
}

export interface MarketAccessData {
  people: number;
  prevalence: number;
}

export interface FoodSecurityData {
  fcs: FCSData;
  rcsi: RCSIData;
  healthAccess: HealthAccessData;
  marketAccess: MarketAccessData;
}

export interface FoodSecurityResponse {
  country: Country;
  date: string;
  dataType: string;
  metrics: FoodSecurityData;
}
