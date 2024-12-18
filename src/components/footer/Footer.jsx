import styles from "./footer.module.css";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <article className={styles.footerContainer}>
      <figure className={styles.footerContent}>
        <figcaption className={styles.footerLeft}>
          <h2 className={styles.footerTitle}>Kundeservice</h2>
          <Link className={styles.footerContact} to="#">
            <MdOutlineLocalPostOffice />
            kontakt@legekrogen.dk
          </Link>
          <p className={styles.footerContact}>
            {" "}
            <IoMdCall />
            +45 23 45 67 89
          </p>
        </figcaption>
        <figcaption>
          <p className={styles.footerRight}>Følg os</p>
          <SiFacebook className={styles.footerIcon} />
          <FaInstagram className={styles.footerIcon} />
        </figcaption>
      </figure>
    </article>
  );
};

export default Footer;
