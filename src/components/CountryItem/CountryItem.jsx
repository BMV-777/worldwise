import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  // const [emoji, country] = country;

  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

CountryItem.propTypes = "string";
