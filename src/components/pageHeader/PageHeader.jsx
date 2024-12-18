import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subTitle, headerImg, isHomePage, textInfo }) => {
  return (
    <header
      className={isHomePage ? styles.homePageHeader : styles.subPageHeader}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div>
        <h1>{title}</h1>
        {subTitle && <h2 className={styles.subTitle}>{subTitle}</h2>}
        <p>{textInfo}</p>
      </div>
    </header>
  );
};

export default PageHeader;
