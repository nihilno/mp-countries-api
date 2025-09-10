export async function getCountries() {
  const res = await fetch("/data.json");

  if (!res.ok) throw Error("Failed getting Countries");

  const countries = await res.json();

  const filteredCountries = countries.map((country) => ({
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital,
    flags: country.flags.svg,
  }));

  const uniqueRegions = [...new Set(countries.map((country) => country.region))]
    .filter((region) => region)
    .slice(0, 5)
    .sort();

  return { countries: filteredCountries, regions: uniqueRegions };
}

export async function getCountryByName(countryName) {
  const res = await fetch("/data.json");

  if (!res.ok) throw Error("Failed getting Country data");

  const countries = await res.json();
  const country = countries.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    throw new Error(`Country ${countryName} not found`);
  }

  return country;
}
