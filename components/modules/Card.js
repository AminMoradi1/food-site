import Image from "next/image";
import styles from "./Card.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";

function Card(props) {
  const { id, name, price, details, discount } = props;
  return (
    <div className={styles.container}>
      <Image
        src={`/images/${id}.jpeg`}
        alt=""
        width={400}
        height={130}
        className={styles.image}
      />
      <div className={styles.details}>
        <h4>{name}</h4>
        <div>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        {discount ? (
          <span className={styles.discount}>
            {(price * (100 - discount)) / 100}
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={styles.badge}>{discount}%</div> : null}
      </div>
      <Link href={`/menu/${id}`}>See Details</Link>
    </div>
  );
}

export default Card;
