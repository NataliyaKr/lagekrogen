import useFetchProducts from "../../hook/useFetchProducts";
import ProductsCard from "../productsCard/ProductsCard";
import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./recommended.module.css";

const Recommended = () => {
  const { recommended } = useFetchProducts();

  return (
    <section className={styles.recommended}>
      <SectionHeader titleTop="Et udpluk af vores" subtitle="legetøj" />
      <div className="grid">
        {recommended.map((card) => (
          <ProductsCard key={card._id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
