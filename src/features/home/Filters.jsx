import { useMain } from "../../contexts/MainContext";
import Search from "../../images/search.png";

function Filters({ regions, filteredCount }) {
  const {
    selectedRegion,
    setSelectedRegion,
    searchedCountry,
    setSearchedCountry,
    mode,
  } = useMain();

  return (
    <div className="flex flex-col mt-10 gap-8 sm:flex-row sm:justify-between">
      <div className="sm:w-full sm:max-w-90 relative">
        <input
          type="text"
          placeholder="Search for a country..."
          className="input w-full py-3.5 pl-14 pr-6 border hover"
          value={searchedCountry}
          onChange={(e) => setSearchedCountry(e.target.value)}
        />
        <img
          src={Search}
          className="absolute top-[50%] left-6 w-4 translate-y-[-50%] "
        ></img>
      </div>
      <div className="w-full flex justify-end items-center gap-4">
        <span className="hidden sm:block">{filteredCount} found</span>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className={`input max-w-70 w-[60%] py-3.5 px-4 border sm:max-w-40 md:max-w-50 hover ${
            mode ? "bg-white" : "bg-gray-800"
          }`}
        >
          <option value="" disabled>
            Filter by Region
          </option>
          {regions?.map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
