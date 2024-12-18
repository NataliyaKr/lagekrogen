import styles from "./shipping.module.css";
import { FaTruck } from "react-icons/fa";

const Shipping = () => {
  return (
    <div className={styles.shippingBox}>
      <FaTruck className={styles.shippingIcon} />
      <p className={styles.shipping}>Fri fragt ved køb over 499,-</p>
    </div>
  );
};

export default Shipping;
