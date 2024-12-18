import styles from "./modal.module.css";
import { ImCross } from "react-icons/im";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.content}>
        <button className={styles.closeButton} onClick={onClose}>
          <ImCross />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
