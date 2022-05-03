import classes from "./CountryDetails.module.css";
import FlagBox from "../FlagBox/FlagBox";
import InfoBox from "../InfoBox/InfoBox";
import { useContext } from "react";
import AppContext from "../../../store/app-context";
import Loader from "../../UI/Loader/Loader";

const CountryDetails = (props) => {
  const ctx = useContext(AppContext);

  return ctx.loaderIsShown ? (
    <Loader />
  ) : (
    <section className={classes["country-details"]}>
      <FlagBox flagImg={ctx.selectedCountry.flag} />
      <div>
        <InfoBox title="Country" value={ctx.selectedCountry.country} />
        <InfoBox title="Region" value={ctx.selectedCountry.region} />
        <InfoBox title="Capital" value={ctx.selectedCountry.capital} />
        <InfoBox title="Population" value={ctx.selectedCountry.population} />
        <InfoBox title="Area" value={ctx.selectedCountry.area} />
        <InfoBox title="Density" value={ctx.selectedCountry.density} />
        <InfoBox title="Currency" value={ctx.selectedCountry.currency} />
      </div>
    </section>
  );
};

export default CountryDetails;
