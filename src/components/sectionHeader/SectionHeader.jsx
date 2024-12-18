import styles from "./sectionHeader.module.css";

const SectionHeader = ({ titleTop, subtitle, color = "white" }) => {
  return (
    <header className={styles.header}>
      <div>
        <h4 style={color === "blue" ? { color: "#355675" } : null}>
          {titleTop}
        </h4>
        <h2 style={color === "blue" ? { color: "#355675" } : null}>
          {subtitle}
        </h2>
      </div>
    </header>
  );
};

export default SectionHeader;
