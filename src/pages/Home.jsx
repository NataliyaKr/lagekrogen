import PageHeader from "../components/pageHeader/PageHeader";
import headerImg from "../assets/heros/forsiden.jpg";
import Recommended from "../components/recommended/Recommended";
import Response from "../components/response/Response";
import Member from "../components/member/Member";

const Home = () => {
  return (
    <article>
      <PageHeader
        title="At lege er at leve"
        subTitle="Her hos os har vi et stort udvalg af legetøj i høj kvalitet"
        headerImg={headerImg}
        isHomePage={true}
      />
      <Recommended />
      <Response />
      <Member />
    </article>
  );
};

export default Home;
