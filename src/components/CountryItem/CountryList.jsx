import Spinner from "../Spinner/Spinner";
import CountryItem from "./CountryItem";
// import CityItem from "../CityItem/CityItem";

import Message from "../Message/Message";

import styles from "./CountryList.module.css";
import { useCities } from "../../context/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;

CountryList.propTypes = [];

//18/229
