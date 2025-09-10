import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useMain } from "../../contexts/MainContext";
import { getCountryByName } from "../../services/apiCountries";

function Detail() {
  const navigate = useNavigate();
  const country = useLoaderData();
  const { codeToNameMap } = useMain();

  const {
    name,
    flags,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders = [],
  } = country;

  const formattedPopulation = population.toLocaleString("en-US");

  return (
    <div className="px-8 mt-6 sm:px-10 md:px-16 lg:mt-14 lg:px-24">
      <div className="space-x-4">
        <button
          onClick={() => navigate(-1)}
          className="border px-6 py-2 text-xs cursor-pointer lg:text-base hover"
        >
          &larr; Back
        </button>

        <button
          onClick={() => navigate("/")}
          className="border px-6 py-2 text-xs cursor-pointer lg:text-base hover"
        >
          Menu
        </button>
      </div>

      <div className="mt-12 lg:flex lg:items-center md: lg:gap-12 xl:gap-24">
        <a
          href={`https://en.wikipedia.org/wiki/${name}`}
          target="_blank"
          className="space-y-4"
        >
          <img
            src={flags.svg}
            alt={`${name} Flag`}
            className="w-full object-cover max-w-80 lg:max-w-100 xl:max-w-130 cursor-pointer"
          />
          <span className="text-sm underline">
            Go to Wikipedia by pressing the flag &rarr;
          </span>
        </a>
        <div className="mt-10 flex flex-col gap-5 lg:gap-8 lg:w-190">
          <h2 className="font-extrabold text-2xl lg:text-4xl">{name || "-"}</h2>

          <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
            <div className="text-sm space-y-1 lg:text-base">
              <p className="font-semibold">
                Native Name: <span></span>
                <span className="font-light">{nativeName || "-"}</span>
              </p>
              <p className="font-semibold">
                Population: <span></span>
                <span className="font-light">{formattedPopulation || "-"}</span>
              </p>
              <p className="font-semibold">
                Region: <span></span>
                <span className="font-light">{region || "-"}</span>
              </p>
              <p className="font-semibold">
                Sub Region: <span></span>
                <span className="font-light">{subregion || "-"}</span>
              </p>
              <p className="font-semibold">
                Capital: <span></span>
                <span className="font-light">{capital || "-"}</span>
              </p>
            </div>

            <div className="text-sm space-y-1 lg:text-base">
              <p className="font-semibold">
                Top Level Domain: <span></span>
                <span className="font-light">
                  {topLevelDomain.map((domain) => (
                    <span key={domain}>{domain}</span>
                  ))}
                </span>
              </p>
              <p className="font-semibold">
                Currencies: <span></span>
                <span className="font-light">
                  {Array.isArray(currencies) && currencies.length > 0 ? (
                    currencies.map((currency, index) => (
                      <span key={currency?.code || index}>
                        [{currency?.symbol || "-"}]{currency?.name || "-"}
                        {index < currencies.length - 1 && ", "}
                      </span>
                    ))
                  ) : (
                    <span>-</span>
                  )}
                </span>
              </p>
              <p className="font-semibold">
                Languages: <span></span>
                <span className="font-light">
                  {languages.map((language, index) => (
                    <span key={language.name}>
                      {language.name || "-"}
                      {index < languages.length - 1 && ", "}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>

          {borders.length > 0 && (
            <div className="text-sm lg:text-base">
              <h3 className="font-bold">Border Countries:</h3>
              <ul className="flex items-center mt-2 mb-6 gap-2 flex-wrap">
                {borders.map((code) => {
                  const borderName = codeToNameMap[code];
                  if (!borderName) return null;

                  return (
                    <Link key={code} to={`/details/${borderName}`}>
                      <li className="borde px-3 py-1 text-[10px] cursor-pointer md:text-sm border hover">
                        {borderName}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line
export async function loader({ params }) {
  const countryName = params.name;
  const country = await getCountryByName(countryName);
  
  return country;
}
export default Detail;
