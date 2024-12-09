import styles from "./sectionHeader.module.css";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className={styles.header}>
      <h4>{title}</h4>
      <h2>{subtitle}</h2>
    </header>
  );
};

export default SectionHeader;
