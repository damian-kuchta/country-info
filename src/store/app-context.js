import ctxUtils from "./context-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { createContext, useState, useEffect } from "react";
import defaultCountry from "./defaultCountry";
const countryAPI = "https://restcountries.com/v2/all";

const AppContext = createContext({
  options: {},
  selectedCountry: {},

  fetchCountries: () => {},
  getCountryInfo: () => {},
});

export const AppContextProvider = (props) => {
  const [options, setOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

  let optionsList;

  const fetchCountriesHandler = async () => {
    try {
      const response = await fetch(countryAPI);

      if (response.ok) {
        const data = await response.json();
        optionsList = data.map((item) => {
          return (
            <option key={item.alpha2Code} value={item.alpha2Code}>
              {item.name}
            </option>
          );
        });
        setOptions(optionsList);

      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCountryInfoHandler = async (e) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${e.target.value}`
      );

      if (response.ok) {
        const data = await response.json();

        const density = ctxUtils.calculateDensity(data.population, data.area);

        const countryData = {
          country: data.name,
          region: data.region,
          capital: data.capital,
          population: `${ctxUtils.formatNumber(data.population)}`,
          area: `${ctxUtils.formatNumber(data.area)} km2`,
          density: `${density} / km2`,
          currency: data.currencies[0].name,
          flag: data.flag
        };
        
        setSelectedCountry(countryData);
        await wait(500);
        //pokaz panel
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        selectedCountry: selectedCountry,
        options: options,

        fetchCountries: fetchCountriesHandler,
        getCountryInfo: getCountryInfoHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
