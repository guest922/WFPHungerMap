import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountryInfoResponse } from "../Types/CountryTypes";
import { FoodSecurityResponse } from "../Types/FCSTypes";
import { ClimateStatsResponse } from "../Types/ClimateTypes";
import { HazardsDataResponse } from "../Types/HazardTypes";
import { IPCResponse } from "../Types/IPCTypes";

export const hungermapApi = createApi({
  reducerPath: "hungermapApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API}` }),
  endpoints: (builder) => ({
    getCountryInfo: builder.query<CountryInfoResponse, void>({
      query: () => "v2/info/country",
    }),
    getIpcPeaks: builder.query<IPCResponse, void>({
      query: () => "v1/ipc/peaks",
    }),
    getFoodSecurity: builder.query<FoodSecurityResponse, string>({
      query: (iso3Code) => `v1/foodsecurity/country/${iso3Code}`,
    }),
    getClimateStats: builder.query<ClimateStatsResponse, void>({
      query: () => "v2/climate/country",
    }),
    getHazards: builder.query<HazardsDataResponse, void>({
      query: () => "v1/climate/hazards",
    }),
  }),
});

export const {
  useGetCountryInfoQuery,
  useGetFoodSecurityQuery,
  useGetClimateStatsQuery,
  useGetHazardsQuery,
  useGetIpcPeaksQuery,
} = hungermapApi;
