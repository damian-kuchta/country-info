import classes from "./CountrySelect.module.css";
import { useContext} from "react";
import AppContext from "../../store/app-context";

const CountrySelect = (props) => {
  const ctx = useContext(AppContext);

  return (
    <section className={classes['select-wrap']}>
      <label htmlFor='countries'>
        {props.label}
      </label>
      <select defaultValue='Select the country' className={classes['select']} id='countries' onChange={(e)=> ctx.getCountryInfo(e)}>
      <option disabled >{props.placeholder}</option>
        {ctx.options}
      </select>
    </section>
  );
};

export default CountrySelect;

