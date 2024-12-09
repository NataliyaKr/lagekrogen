import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/heros/forsiden.jpg";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import Products from "./products/Products";

const Home = () => {
  return (
    <article>
      <PageHeader
        title="At lege er at leve"
        subTitle="Her hos os har vi et stort udvalg af legetøj i høj kvalitet"
        headerImg={headerImg}
      />
      <SectionHeader title="Et udpluk af vores" subtitle="LEGETØJ" />
      <Products />
    </article>
  );
};

export default Home;
