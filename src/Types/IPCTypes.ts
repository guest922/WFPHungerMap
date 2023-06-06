export interface IPCData {
  iso3: string;
  country_name: string;
  analysis_type: string;
  analysis_date: string;
  analysis_period_from: string;
  analyzed_population_number: string;
  phase_3_number: string;
  phase_3_percent: string;
  phase_4_number: string;
  phase_4_percent: string;
  phase_5_number: string;
  phase_5_percent: string;
  phase_3_plus_number: string;
  phase_4_plus_number: string;
  source: string;
}

export interface IPCResponse {
  ipc_peaks: IPCData[];
  year: string;
}
