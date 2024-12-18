import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./member.module.css";

const Member = () => {
  return (
    <article>
      <figcaption className={styles.member}>
        <h3 className={styles.memberTitle}>
          Kunne du også tænke dig at blive medlem af vores
        </h3>
        <h2 className={styles.memberSubTitle}>Kundeklub?</h2>
        <Link to="/customer">
          <Button buttonText="Bliv medlem nu!" className={styles.memberBtn} />
        </Link>
      </figcaption>
    </article>
  );
};

export default Member;
