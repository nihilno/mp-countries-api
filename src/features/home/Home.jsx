import { useLoaderData } from "react-router-dom";
import { getCountries } from "../../services/apiCountries";
import { useMain } from "../../contexts/MainContext";

import Filters from "./Filters";
import Country from "./Country";

function Home() {
  const { countries, regions } = useLoaderData();
  const { searchedCountry, selectedRegion } = useMain();

  const filteredCountries = countries
    .filter((country) => !selectedRegion || country.region === selectedRegion)
    .filter((country) =>
      country.name.toLowerCase().includes(searchedCountry.toLowerCase())
    );

  return (
    <div className="px-4 sm:px-10 md:px-16 pb-10">
      <Filters regions={regions} filteredCount={filteredCountries.length} />
      <div
        className={`flex flex-col items-center mt-10 gap-8 sm:flex-row sm:flex-wrap sm:gap-16 sm:justify-center sm:w-full
        ${
          filteredCountries.length <= 2
            ? "sm:justify-start"
            : "sm:justify-between"
        }
      `}
      >
        {filteredCountries.map((country) => (
          <Country country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
}

// eslint-disable-next-line
export async function loader() {
  const data = await getCountries();
  return data;
}

export default Home;
