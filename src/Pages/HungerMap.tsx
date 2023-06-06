import { ModuleBody } from "@wfp/ui";
import { loadModules } from "esri-loader";
import { useEffect, useRef, useState } from "react";
import WFPSwitcher from "../Shared/WFPSwitcher";
import {
  iconWfpHumBeneficariesPos,
  iconWfpHumEarthquakePos,
  iconWfpHumMonsoonPos,
} from "@wfp/icons";
import {
  useGetClimateStatsQuery,
  useGetCountryInfoQuery,
  useGetFoodSecurityQuery,
  useGetHazardsQuery,
  useGetIpcPeaksQuery,
} from "../API/api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { ButtonValueProps } from "../Types/WFPSwitcherTypes";
import { chooseIcon, generateTable } from "../Shared/functions";
import CountryTable from "../Shared/Table";
import PhaseLineChart from "../Shared/Phases";

const EsriMap: React.FC<any> = () => {
  // Initial setup of the map, options, and API hooks
  const mapEl = useRef(null); // Create a reference to the DOM element that will contain the map
  const [iso3Code, setIso3Code] = useState<string>(); // Store the selected ISO3 country code
  const [selected, setSelected] = useState<ButtonValueProps>("food"); // Store the currently selected filter type (initially set to 'food')
  const [view, setView] = useState<any>(null); // Store the map view

  // Data fetching hooks from RTK Query
  // This is where data is being fetched from various API endpoints
  const { data: IpcPeakData } = useGetIpcPeaksQuery();
  const { data: climateStatsData } = useGetClimateStatsQuery();
  const { data: countryStatsData } = useGetCountryInfoQuery();
  const { data: hazardStatsData } = useGetHazardsQuery();
  const { data: foodSecurityData, isLoading } = useGetFoodSecurityQuery(
    iso3Code || skipToken
  );

  // Filters for data specific to the selected country
  const countryData =
    countryStatsData?.countries?.filter(
      (country) =>
        country.country.iso3?.toLocaleLowerCase() ===
        iso3Code?.toLocaleLowerCase()
    )[0] || {};

  const phasesData =
    IpcPeakData?.ipc_peaks?.filter(
      (peak) => peak.iso3?.toLocaleLowerCase() === iso3Code?.toLocaleLowerCase()
    ) || [];

  // This effect runs once on initial mount to load the ArcGIS map
  useEffect(() => {
    // Map setup goes here...
    let mapTable = document.getElementById("tableDiv");
    const options = {
      latitude: 7.1881,
      longitude: 21.0938,
      zoom: 3,
    };
    mapTable && (mapTable.innerText = "");

    loadModules(
      [
        "esri/views/MapView",
        "esri/WebMap",
        "esri/widgets/Print",
        "esri/layers/FeatureLayer",
        "esri/widgets/Home",
      ],
      {
        css: true,
      }
    )
      .then(async ([MapView, WebMap, Print, FeatureLayer, Home]) => {
        const layer = new FeatureLayer({
          portalItem: {
            id: "44feee9774f6498b8617a05a3355f426",
          },
          opacity: 1,
        });

        const webmap = new WebMap({
          basemap: {
            portalItem: {
              id: "8d91bd39e873417ea21673e0fee87604", // Replace with the id of your custom basemap
            },
          },
          layers: [layer],
          attribution: "", // Set the attribution to an empty string to remove the ArcGIS Esri footer
        });

        const view = new MapView({
          map: webmap,
          zoom: options.zoom,
          center: [options.longitude, options.latitude],
          container: mapEl.current,
          popup: {
            dockEnabled: true,
            dockOptions: {
              position: "top-right",
              breakpoint: false,
            },
          },
          constraints: {
            minZoom: 2,
          },
        });

        // Remove the reference layer to remove labels
        view.when(() => {
          view.map.basemap.baseLayers.forEach((layer: any) => {
            if (layer.id.includes("reference")) {
              view.map.basemap.baseLayers.remove(layer);
            }
          });
        });
        view.when(() => {
          const homeWidget = new Home({
            view,
          });

          view.ui.add(homeWidget, "top-left");
          const print = new Print({
            view,
            printServiceUrl:
              "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
          });

          const elementOpen = document.createElement("div");
          elementOpen.className =
            "esri-icon-printer esri-widget--button esri-widget esri-interactive";
          const elementClose = document.createElement("div");
          elementClose.className =
            "esri-icon-close esri-widget--button esri-widget esri-interactive";
          elementOpen.addEventListener("click", function () {
            view.ui.remove(elementOpen, "top-left");
            view.ui.add(elementClose, "top-left");
            view.ui.add(print, "top-left");
          });
          elementClose.addEventListener("click", function () {
            view.ui.add(elementOpen, "top-left");
            view.ui.remove(elementClose, "top-left");
            view.ui.remove(print, "top-left");
          });
          view.ui.add(elementOpen, "top-left");
        });

        setView(view);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  // This effect runs when 'selected', 'hazardStatsData', 'view', or 'isLoading' state changes.
  // It updates the map view with hazard graphics depending on the selected state and if the data is loaded.
  useEffect(() => {
    loadModules(["esri/Graphic", "esri/symbols/PictureMarkerSymbol"], {
      css: true,
    })
      .then(async ([Graphic, PictureMarkerSymbol]) => {
        if (isLoading) {
          return "Loading...";
        } else if (selected === "hazard" && hazardStatsData && view) {
          view.graphics.removeAll(); // Clear existing graphics

          hazardStatsData.hazards.forEach((hazard) => {
            const point = {
              type: "point",
              longitude: hazard.longitude,
              latitude: hazard.latitude,
            };

            const symbol = new PictureMarkerSymbol({
              url: chooseIcon(hazard.type),
              width: "64px",
              height: "64px",
            });

            const pointGraphic = new Graphic({
              geometry: point,
              symbol: symbol,
            });

            view.graphics.add(pointGraphic);
          });
        } else {
          view && view.graphics.removeAll(); // Clear existing graphics when switch off the 'hazard' button
        }
      })
      .catch((err) => console.error(err));
  }, [selected, hazardStatsData, view, isLoading]);

  // This effect runs when 'iso3Code', 'view', or 'isLoading' state changes.
  // It updates the map layer's popup template with data based on the selected state, country, and if the data is loaded.
  useEffect(() => {
    // Popup template updating code here...
    if (view && !isLoading) {
      const layer = view.map.allLayers.find(
        (layer: any) =>
          layer.portalItem.id === "44feee9774f6498b8617a05a3355f426"
      );
      if (layer) {
        layer.popupTemplate = {
          title: "{Name} ({ISO_3DIGIT})",
          content: (graphic: any) => {
            const iso3 = graphic.graphic.attributes["ISO_3DIGIT"];
            if (!!iso3 && iso3 !== iso3Code) setIso3Code(iso3);
            if (!!iso3 && selected === "food" && foodSecurityData) {
              return generateTable("food", foodSecurityData, iso3);
            } else if (!!iso3 && selected === "climate" && climateStatsData) {
              return generateTable("climate", climateStatsData, iso3);
            } else {
              return "Data not available.";
            }
          },
        };
      }
    }
  }, [iso3Code, view, isLoading]);

  return (
    <>
      <div style={{ height: "80px", backgroundColor: "#dfe3e6" }}>
        <WFPSwitcher
          setValue={setSelected}
          buttons={[
            { icon: iconWfpHumEarthquakePos, value: "hazard" },
            { icon: iconWfpHumBeneficariesPos, value: "food" },
            { icon: iconWfpHumMonsoonPos, value: "climate" },
          ]}
          defaultValue="food"
        />
      </div>
      <ModuleBody
        style={{
          backgroundColor: "#dfe3e6",
        }}
      >
        <div
          ref={mapEl}
          style={{
            width: "100%",
            height: !(window.innerWidth < 750) && iso3Code ? "75vh" : "85vh",
          }}
        ></div>
      </ModuleBody>
      {iso3Code && <CountryTable countryData={countryData} />}
      {iso3Code && <PhaseLineChart data={phasesData} />}
    </>
  );
};

export default EsriMap;
