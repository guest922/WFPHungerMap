export interface Country {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
}

export interface Population {
  number: number;
  year: number;
  source: string;
}

export interface ChronicHunger {
  number: number;
  period: string;
  year: number;
  source: string;
}

export interface Malnutrition {
  acute_percent: number;
  chronic_percent: number;
  year: number;
  source: string;
}

export interface IncomeGroup {
  level: string;
}

export interface CountryData {
  country: Country;
  population: Population;
  chronic_hunger: ChronicHunger;
  malnutrition: Malnutrition;
  income_group: IncomeGroup;
}

export interface CountryInfoResponse {
  countries: CountryData[];
}
