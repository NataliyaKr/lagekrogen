import styles from "./questions.module.css";
import useFetchQuestions from "../../hook/useFetchQuestions";
import Accordion from "../accordions/accordions";

const Questions = () => {
  const { questions } = useFetchQuestions();

  return (
    <article className={styles.questionContainer}>
      {questions.map((q) => (
        <Accordion q={q} key={q._id} />
      ))}
    </article>
  );
};

export default Questions;
