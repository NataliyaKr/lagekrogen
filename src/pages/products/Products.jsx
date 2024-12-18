import PageHeader from "../../components/pageHeader/PageHeader";
import ProductsCard from "../../components/productsCard/ProductsCard";
import useFetchProducts from "../../hook/useFetchProducts";
import styles from "./products.module.css";
import headerImg from "../../assets/heros/produkter.jpg";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import Member from "../../components/member/Member";

const Products = () => {
  const { products } = useFetchProducts();
  return (
    <section>
      <div className={styles.containerProducts}>
        <PageHeader
          title="På udkig efter nyt"
          subTitle="LEGETØJ?"
          headerImg={headerImg}
        />
        <SectionHeader titleTop="Alt vores" subtitle="legetøj" />
        <div className="grid">
          {products.map((card) => (
            <ProductsCard key={card._id} card={card} />
          ))}
        </div>
        <Member />
      </div>
    </section>
  );
};

export default Products;
