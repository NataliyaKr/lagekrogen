import styles from "./modal.module.css";
import { ImCross } from "react-icons/im";

const Modal = ({ children }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Modal;
