import { GoChevronDown } from "react-icons/go";
import styles from "./accordion.module.css";
import { useState } from "react";

const Accordion = ({ q }) => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const toggleMenuPanel = () => {
    setIsOpenPanel(!isOpenPanel);
  }; //En funksjon som inverterer verdien av isOpenPanel. Denne brukes som en event-handler for klikk-hendelser.
  return (
    <figure className={styles.question} key={q._id}>
      <p className={styles.acText}>{q.question}</p>
      <GoChevronDown
        size={37}
        className={styles.qIcon}sed
        onClick={toggleMenuPanel}
      />
      <div>{isOpenPanel && <p className={styles.panel}>{q.answer}</p>}</div>
    </figure>
  );
};

export default Accordion;
