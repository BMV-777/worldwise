import Spinner from "../../Spinner/Spinner";
import CityItem from "../CityItem";

import styles from "./CityList.module.css";
import Message from "../../Message/Message";
import { useCities } from "../../../context/CitiesContext";

// import { useCities } from "../../../context/CitiesContex";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((country) => (
        <CityItem city={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CityList;

CityList.propTypes = [];
