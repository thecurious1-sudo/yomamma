import styles from "./Error.module.css";

const Error = (props) => {
  return <div className={styles.error}>{props.error}</div>;
};

export default Error;
