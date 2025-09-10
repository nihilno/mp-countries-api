import { Link } from "react-router-dom";

function Country({ country }) {
  const { name, population, region, capital, flags } = country;
  const formattedPopulation = population.toLocaleString("en-US");

  return (
    <section className="border max-w-70 w-full flex flex-col h-85 hover hover:scale-105">
      <Link to={`/details/${name}`}>
        <div className="w-full h-40 shrink-0">
          <img
            src={flags}
            alt={`${name} Flag`}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="flex flex-col px-6 py-6 gap-4 grow">
          <h2 className="font-extrabold text-lg">{name}</h2>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">
              Population: <span></span>
              <span className="font-light">{formattedPopulation || "-"}</span>
            </p>
            <p className="font-semibold">
              Region: <span></span>
              <span className="font-light">{region || "-"}</span>
            </p>
            <p className="font-semibold">
              Capital: <span></span>
              <span className="font-light">{capital || "-"}</span>
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Country;
