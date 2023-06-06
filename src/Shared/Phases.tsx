import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { IPCData } from "../Types/IPCTypes";

const PhaseLineChart = ({ data }: { data: any }) => {
  const transformedData = data.map((item: IPCData) => ({
    name: item.analysis_date,
    phase_3_number: item.phase_3_number,
    phase_3_percent: item.phase_3_percent,
    phase_4_number: item.phase_4_number,
    phase_4_percent: item.phase_4_percent,
    phase_5_number: item.phase_5_number,
    phase_5_percent: item.phase_5_percent,
  }));

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        alignItems: "center",
        top: "50%",
        left: "15%",
        transform: "translate(-50%, 10%)",
      }}
      className="mobile-hidden"
    >
      <LineChart
        width={500}
        height={300}
        data={transformedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="phase_3_number"
          stroke="#8884d8"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="phase_4_number"
          stroke="#82ca9d"
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="phase_5_number"
          stroke="#ffc658"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="phase_3_percent"
          stroke="#8884d8"
          dot={false}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="phase_4_percent"
          stroke="#82ca9d"
          dot={false}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="phase_5_percent"
          stroke="#ffc658"
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default PhaseLineChart;
