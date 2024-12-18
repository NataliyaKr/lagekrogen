import PageHeader from "../../components/pageHeader/PageHeader";
import headerImg from "../../assets/heros/FAQ.jpg";
import styles from "./faq.module.css";
import Member from "../../components/member/Member";

const FAQ = () => {
  return (
    <article>
      <PageHeader
        title="Har du nogle"
        subTitle="spørgsmål?"
        headerImg={headerImg}
        textInfo="Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os."
      />
      <Member />
    </article>
  );
};

export default FAQ;
