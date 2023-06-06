import { ClimateStatsResponse } from "../Types/ClimateTypes";
import { FoodSecurityResponse } from "../Types/FCSTypes";

export function chooseIcon(type: string) {
  const hazards = [
    {
      type: "Flood",
      url: "https://static.hungermapdata.org/hungermap/img/pdc_Flood.png",
    },
    {
      type: "Earthquake",
      url: "https://static.hungermapdata.org/hungermap/img/pdc_Earthquake.png",
    },
    {
      type: "Volcano",
      url: "https://static.hungermapdata.org/hungermap/img/pdc_Volcanic_Activity.png",
    },
    {
      type: "Wildfire",
      url: "https://static.hungermapdata.org/hungermap/img/pdc_Wildfire.png",
    },
    {
      type: "Drought.",
      url: "https://static.hungermapdata.org/hungermap/img/pdc_Drought.png",
    },
    {
      type: "Biomedical",
      url: "https://static.hungermapdata.org/hungermap/img/pdc_Biomedical.png",
    },
  ];
  const icon = hazards?.filter(
    (hazard) => hazard.type.toLocaleLowerCase() === type.toLocaleLowerCase()
  )[0];
  if (icon?.url) return icon["url"];
  else
    return "https://static.hungermapdata.org/hungermap/img/pdc_Volcanic_Activity.png";
}

export function generateTable(
  dataType: string,
  dataObject: any,
  iso3Code: any
) {
  if (dataType === "food" && dataObject) {
    return `
      <table class="wfp--table" style="width: 100%">
        <tbody>
          <tr>
            <th>FCS</th>
            <td>${dataObject.metrics.fcs.people} people affected (${(
      dataObject.metrics.fcs.prevalence * 100
    ).toFixed(2)}% prevalence)</td>
          </tr>
          <tr>
            <th>RCSI</th>
            <td>${dataObject.metrics.rcsi.people} people affected (${(
      dataObject.metrics.rcsi.prevalence * 100
    ).toFixed(2)}% prevalence)</td>
          </tr>
          <tr>
            <th>Health Access</th>
            <td>${dataObject.metrics.healthAccess.people} people affected (${(
      dataObject.metrics.healthAccess.prevalence * 100
    ).toFixed(2)}% prevalence)</td>
          </tr>
          <tr>
            <th>Market Access</th>
            <td>${dataObject.metrics.marketAccess.people} people affected (${(
      dataObject.metrics.marketAccess.prevalence * 100
    ).toFixed(2)}% prevalence)</td>
          </tr>
        </tbody>
      </table>
    `;
  } else if (dataType === "climate" && dataObject) {
    const climateCountry = dataObject.countries.filter(
      (country: { country: { iso3: any } }) => country.country.iso3 === iso3Code
    )[0];

    return `
    <table class="wfp--table" style="width: 100%">
      <tbody>
        <tr>
          <th>Start Date</th>
          <td>${climateCountry.dataPoints[0].dekadStart}</td>
        </tr>
        <tr>
          <th>In Season</th>
          <td>${climateCountry.dataPoints[0].inSeason ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <th colspan="4">Rainfall</th>
        </tr>
        <tr>
          <th>People Dry</th>
          <td>${climateCountry.dataPoints[0].rainfall.peopleDry}</td>
          <td>${(
            climateCountry.dataPoints[0].rainfall.prevalenceDry * 100
          ).toFixed(2)}%</td>
        </tr>
        <tr>
          <th>People Wet</th>
          <td>${climateCountry.dataPoints[0].rainfall.peopleWet}</td>
          <td>${(
            climateCountry.dataPoints[0].rainfall.prevalenceWet * 100
          ).toFixed(2)}%</td>
        </tr>
        <tr>
          <th>People Anomaly</th>
          <td>${climateCountry.dataPoints[0].rainfall.peopleAnomaly}</td>
          <td>${(
            climateCountry.dataPoints[0].rainfall.prevalenceAnomaly * 100
          ).toFixed(2)}%</td>
        </tr>
        <tr>
          <th colspan="4">NDVI</th>
        </tr>
        <tr>
          <th>People Dry</th>
          <td>${climateCountry.dataPoints[0].ndvi.peopleDry}</td>
          <td>${(climateCountry.dataPoints[0].ndvi.prevalenceDry * 100).toFixed(
            2
          )}%</td>
        </tr>
        <tr>
          <th>People Anomaly</th>
          <td>${climateCountry.dataPoints[0].ndvi.peopleAnomaly}</td>
          <td>${(
            climateCountry.dataPoints[0].ndvi.prevalenceAnomaly * 100
          ).toFixed(2)}%</td>
        </tr>
        <tr>
          <th colspan="4">Overall</th>
        </tr>
        <tr>
          <th>People Dry</th>
          <td>${climateCountry.dataPoints[0].overall.peopleDry}</td>
          <td>${(
            climateCountry.dataPoints[0].overall.prevalenceDry * 100
          ).toFixed(2)}%</td>
        </tr>
        <tr>
          <th>People Wet</th>
          <td>${climateCountry.dataPoints[0].overall.peopleWet}</td>
          <td>${(
            climateCountry.dataPoints[0].overall.prevalenceWet * 100
          ).toFixed(2)}%</td>
        </tr>
        <tr>
          <th>People Anomaly</th>
          <td>${climateCountry.dataPoints[0].overall.peopleAnomaly}</td>
          <td>${(
            climateCountry.dataPoints[0].overall.prevalenceAnomaly * 100
          ).toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>`;
  } else {
    return "Data not available.";
  }
}
