import styles from "./productsCard.module.css";

const ProductsCard = ({ card }) => {
  console.log(card);
  return (
    <figure className={styles.card}>
      {card.discountInPercent > 0 && (
        <div className={styles.discount}>{card.discountInPercent}%</div>
      )}
      <img src={card.image} alt={card.name} />
      <figcaption className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{card.title}</h2>
        <h3 className={styles.cardDescription}>{card.description}</h3>
        <p className={styles.cardPrice}>{card.price} kr</p>
      </figcaption>
    </figure>
  );
};

export default ProductsCard;
