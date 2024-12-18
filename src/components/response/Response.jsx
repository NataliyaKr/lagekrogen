import SectionHeader from "../sectionHeader/SectionHeader";
import styles from "./response.module.css";

const Response = () => {
  return (
    <article>
      <div className={styles.response}>
        <SectionHeader
          color="blue"
          titleTop="Vores kunder"
          subtitle="udtaler"
        />
        <div className={styles.responseContainer}>
          <p className={styles.textTop}>
            “Pakken kom dagen efter jeg bestilte. Der blev jeg positivt
            overrasket, da der står på deres hjemmeside at leveringstiden er 2-4
            hverdage. Og min lille Hugo elsker sin nye træhest.”
          </p>
          <p className={styles.subText}>- Heidi, mor til Hugo på 3 år</p>
          <p className={styles.textTop}>
            “Jeg fik varen tilsendt i den forkerte farve, men da jeg kontaktede
            Legekrogens kundeservice, var de meget hurtige til at sende mig den
            rigtige farve. Jeg fik endda en gratis slikpose med. Det var meget
            lækkert”
          </p>
          <p className={styles.subText}>- Omar, onkel til Anton på 11 år</p>
          <p className={styles.textTop}>
            “Når jeg skal bestille julegaver til alle mine 14 børnebørn, er det
            næsten en umulig opgave. Mine døtre har meget høje krav, når det
            kommer til legetøj til deres børn. Jeg tør næsten ikke købe noget.
            Men efter min gode ven Lars tippede mig om Legekrogen.dk, har jeg
            ikke længere problemer med at købe de perfekte julegaver. Tak til
            Legekrogen. Og Lars”
          </p>
          <p className={styles.subText}>- Karsten Hansen, Morfar</p>
        </div>
      </div>
    </article>
  );
};

export default Response;
