// src/contexts/CountryContext.js
import { createContext, useContext, useMemo, useState } from "react";
import countriesData from "../../public/data.json";

const MainContext = createContext();

export function MainProvider({ children }) {
  const codeToNameMap = useMemo(() => {
    return Object.fromEntries(
      countriesData.map((country) => [country.alpha3Code, country.name])
    );
  }, []);

  const nameToCountryMap = useMemo(() => {
    return Object.fromEntries(
      countriesData.map((country) => [country.name.toLowerCase(), country])
    );
  }, []);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("");
  const [mode, setMode] = useState(true);

  return (
    <MainContext.Provider
      value={{
        countries: countriesData,
        codeToNameMap,
        nameToCountryMap,
        selectedRegion,
        setSelectedRegion,
        searchedCountry,
        setSearchedCountry,
        mode,
        setMode,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

// eslint-disable-next-line
export function useMain() {
  return useContext(MainContext);
}
