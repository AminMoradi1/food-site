import Image from "next/image";
import styles from "./DetailsPage.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function DetailsPage(props) {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = props;
  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
          <Image src={`/images/${id}.jpeg`} width={300} height={180} alt="" />
          <div>
            <h3>{name}</h3>
            <span className={styles.location}>
              <Location />
              {details[0].Cuisine}
            </span>
            <span className={styles.price}>
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {discount ? (
              <span className={styles.discount}>{discount}% OFF</span>
            ) : null}
          </div>
        </div>
        <div className={styles.introduction}>
          <p>{introduction}</p>
        </div>
        <div className={styles.details}>
          <h4>Details</h4>
          <ul>
            {details.map((detail, idx) => (
              <li key={idx}>
                <p>{Object.keys(detail)[0]} : </p>
                <span>{Object.values(detail)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.details}>
          <h4>Ingrediants</h4>
          <ul>
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.recipe}>
          <h4>Recipe</h4>
          {recipe.map((item, idx) => (
            <div key={idx} className={idx % 2 ? styles.odd : styles.even}>
                <span>{idx + 1}</span>
                <p>{item}</p>
            </div>
          ))}
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default DetailsPage;
