import { GoChevronDown } from "react-icons/go";
import styles from "./accordion.module.css";
import { useState } from "react";

const Accordion = ({ q }) => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const toggleMenuPanel = () => {
    setIsOpenPanel(!isOpenPanel);
  };
  return (
    <figure className={styles.question} key={q._id}>
      <p className={styles.acText}>{q.question}</p>
      <GoChevronDown
        size={37}
        className={styles.qIcon}
        onClick={toggleMenuPanel}
      />
      <div>{isOpenPanel && <p className={styles.panel}>{q.answer}</p>}</div>
    </figure>
  );
};

export default Accordion;
