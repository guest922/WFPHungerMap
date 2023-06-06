import React from "react";
import { Table } from "@wfp/ui";
import { CountryData } from "../Types/CountryTypes";

const CountryTable = (props: any) => {
  const { countryData } = props;

  let headers = [];
  let values = [];

  for (let key in countryData) {
    if (
      typeof countryData[key as keyof CountryData] === "object" &&
      countryData[key as keyof CountryData] !== null
    ) {
      for (let innerKey in countryData[key as keyof CountryData]) {
        let formattedKey = innerKey.replace(/_/g, " ");
        let splittedKey = formattedKey.split(" ");
        if (splittedKey.length > 1) {
          formattedKey = splittedKey.join("<br />");
        }
        headers.push(
          <td
            key={`${key}-${innerKey}-header`}
            dangerouslySetInnerHTML={{ __html: formattedKey.toUpperCase() }}
          />
        );
        values.push(
          <td key={`${key}-${innerKey}-value`}>
            {(countryData as any)[key][innerKey as keyof CountryData]}
          </td>
        );
      }
    } else {
      headers.push(<td key={`${key}-header`}>{key.toLocaleUpperCase()}</td>);
      values.push(
        <td key={`${key}-value`}>{countryData[key as keyof CountryData]}</td>
      );
    }
  }

  return (
    <Table
      className="mobile-hidden"
      style={{
        alignItems: "center",
        maxWidth: "100%",
        backgroundColor: "#021121",
        color: "white",
        opacity: "0.5",
        tableLayout: "fixed",
      }}
    >
      <tbody>
        <tr style={{ backgroundColor: "#021121", color: "white" }}>
          {headers}
        </tr>
        <tr
          style={{ backgroundColor: "#021121", color: "white", opacity: "0.5" }}
        >
          {values}
        </tr>
      </tbody>
    </Table>
  );
};

export default CountryTable;
