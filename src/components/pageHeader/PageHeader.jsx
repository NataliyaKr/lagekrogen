import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subTitle, headerImg }) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div>
        <h1>{title}</h1>
        {subTitle && <h2>{subTitle}</h2>}
      </div>
    </header>
  );
};

export default PageHeader;
