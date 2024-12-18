import PageHeader from "../../components/pageHeader/PageHeader";
import headerImg from "../../assets/heros/medlem.jpg";
import styles from "./customerClub.module.css";
import MemberForm from "../../components/memberForm/MemberForm";

const CustomerClub = () => {
  return (
    <article>
      <PageHeader
        title="Bliv medlem af vores"
        subTitle="KUNDEKLUB"
        headerImg={headerImg}
        textInfo="og få eksklusive nyheder før alle andre "
      />
      <MemberForm />
    </article>
  );
};

export default CustomerClub;
